/* eslint-disable no-tabs */
import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from '../../../components/shared-styles.js';
import { get as i18n } from '../../../components/lit-i18n';

import { arrowDown } from '../../../components/my-icons.js';
import { touchGestures } from '../../../utils/carouselUtils';
import './smarter-feed-tweet.js';

// Constantes para que la query a la API de Twitter cumpla los requisitos
const API_TARGET_ACCOUNT = "from:SopraSteria_ES lang:es";
const API_MAX_RESULTS = "10";
const DAY_LAST_MOMENT = "2359";
const DAYS_BEFORE = 30;
const CLOCK_SKEW = 5;
const MONTH_ADJUSTMENT = 1;

class SmarterFeed extends LitElement {
/* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
      :host{
        display: block;
      }

      .slider-container {
        flex: 1 1 0;
        display: flex;
        flex-flow: row nowrap;
        height: auto;
        width: 100%;
        margin: 0;
        overflow: hidden;
      }

      .slider-container div {
        min-width: 100%;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        color: grey;
        transform: translateX(0);
        transition: transform .8s;
      }

      .tweets-container {
        position: relative;
        overflow: hidden;
        background-color: white;
      }

      .arrow-button {
        position: absolute;
        top: 50%;
        cursor: pointer;
        background: transparent;
        border: 0;
        width: 27px;
        height: 15px;
        padding: 0;
      }

      .arrow-button {
        display: none;
      }

      .arrow-button.next {
        transform: rotateZ(-90deg);
      }

      .arrow-button.prev {
        transform: rotateZ(90deg);
      }

      .arrow-button svg {
        width: 100%;
        height: 100%;
      }

      .arrow-button svg * {
        stroke-width: 2px;
        stroke: var(--app-primary-color, #CC0033);
      }

      .arrow-button:hover svg *,
      .arrow-button:active svg * {
        stroke: #8f0024;
      } 

      .bar {
        width: 88%;
        margin: 10px auto 0;
        height: 5px;
        background-color: grey;
      }

      @keyframes growToRight {
        from {width: 0;}
        to {width: 100%;}
      }

      .red-bar {
        height: 100%;
        width: 0;
        background-color: var(--app-primary-color, #CC0033);
      }

      .red-bar-animation {
        animation: growToRight 6s linear infinite;
      }

      smarter-feed-tweet {
        display: flex;
        justify-content: center;
      }

      .button {
        height: 48px;
        padding: 50px;
        display: flex;
        justify-content: center;
      }

      .button > a {
        margin: 0 !important;
      }

      @media (min-width: 768px) {
        .tweets-container {
          display: flex;
          flex-direction: column;
          padding: 0 10% 0;
          box-sizing: border-box;
          height: 590px;
        }

        .arrow-button {
          display: block;
          width: 40px;
          height: 20px;
          z-index: 2;
        }
 
        .arrow-button.next {
          right: 5%;
        } 

         .arrow-button.prev {
          left: 5%;
        } 

        .bar {
          width: 88%;
          max-width: 700px;
        }
      }

      @media (min-width: 1350px) {
        .arrow-button.next {
          right: 10%;
        } 

         .arrow-button.prev {
          left: 10%;
        }
      }
    `,
    ];
  }

  static get properties() {
    return {
      ApiUrl: { type: String },
      coordinate: { type: Number },
      index: { type: Number },
      tweets: { type: Array },
      fetchData: { type: Object },
      timer: { type: Number },
      auto: { type: Boolean },
      interval: { type: Number },
      animationClass: { type: Boolean },
      minTouchLength: { type: Number },
      minTouchAngle: { type: Number },
    };
  }

  constructor() {
    super();
    this.index = 0;
    this.coordinate = 0;
    this.animationSpeed = 0.6;
    this.auto = true;
    this.timer = 6000;
    this.interval = null;
    this.minTouchLength = 70;
    this.minTouchAngle = 30;
    
    this.animationClass = true;
    this.tweets = [];
    this.ApiUrl = "/tweets.json";
    let fromDate = this._getFromDate();
    let toDate = this._getToDate();
    
    let queryBody = {
      query: API_TARGET_ACCOUNT,
      maxResults: API_MAX_RESULTS,
      fromDate: fromDate,
      toDate: toDate
    }
    this.fetchParams = {
      method: 'POST',
      body: JSON.stringify(queryBody),
      headers: {
        'content-type': 'application/json',
      }
    };
    this._fetchTweets(this.ApiUrl, this.fetchParams);

    this._focusEventsActive = [];
    this.EVENTS = {
      mouseenter: 'mouse',
      mouseleave: 'mouse',
      focusin: 'focus',
      focusout: 'focus',
    };
  }

  render() {
    return html`
      <section aria-label="${i18n('SMARTER_FEED_TITLE', true)}" tabindex="0">
        <h1 class="title section-header" aria-label="${i18n('SMARTER_FEED_TITLE', true)}" tabindex="0">
          <lit-i18n>SMARTER_FEED_TITLE</lit-i18n>
        </h1>
        <div class="tweets-container">
          <button id="prev" aria-label="${i18n('PREV_BUTTON')}" class="arrow-button prev" @click="${() => this.showNext(false)}">${arrowDown}</button>

          <div id="slide" class="slider-container">
            ${this.tweets.map((tweet, i) => html `
            <div class="single-tweet" .style="${'transform: translateX(' + this.coordinate + 'px); transition: transform ' + this.animationSpeed + 's'}">
              <smarter-feed-tweet .tweet="${tweet}" index="${this.index === i}"></smarter-feed-tweet>
            </div>
            `)}
          </div>

          <button id="next" aria-label="${i18n('NEXT_BUTTON')}" class="arrow-button next" @click="${() => this.showNext(true)}">${arrowDown}</button>

          <div class="bar">
            <div class="red-bar red-bar-animation"></div>
          </div>
        </div>
        <div class="button">
          <a href="mailto:bedigital@soprasteria.com?subject=SmartUp+Xperience" class="primary-button big" aria-label="${i18n('WANT_TO_BE_SMARTER_BTN_A11Y', true)}">
            <lit-i18n raw>WANT_TO_BE_SMARTER_BTN</lit-i18n>
          </a>
        </div>
      </section>
    `;
  }

  firstUpdated() {
    touchGestures(this, '#slide');
    this._addEventListeners();
    window.addEventListener('resize', this.setCoordinate.bind(this));
    if (this.auto) this.setAutoInterval();
  }

  connectedCallback() {
    super.connectedCallback();
    if (window.IntersectionObserver) {
      this.dispatchEvent(new CustomEvent('start-observing-intersection', {
        bubbles: true,
        composed: true,
        detail: { element: this, threshold: 0.3, callback: ([{ isIntersecting }]) => this._isIntersecting = isIntersecting },
      }));
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (window.IntersectionObserver) {
      this.dispatchEvent(new CustomEvent('stop-observing-intersection', {
        bubbles: true,
        composed: true,
        detail: { element: this, threshold: 0.3 },
      }));
    }
  }
  /* eslint-enable require-jsdoc */

  /**
   * Add Event Listener
   */
  _addEventListeners() {
    const slide = this.shadowRoot.querySelector('#slide');

    slide.addEventListener('stopInterval', () => {
      clearInterval(this.interval);
    });

    slide.addEventListener('resetInterval', () => {
      if (this.auto) this._startAutoplay();
    });

    slide.addEventListener('setPosition', this.setNewPosition);

    slide.addEventListener('focusin', this._stopAutoplay.bind(this));
    slide.addEventListener('mouseenter', this._stopAutoplay.bind(this));
    slide.addEventListener('mouseleave', this.startInterval.bind(this));
    slide.addEventListener('focusout', this.startInterval.bind(this));
  }

  /**
    * Show next card
    *  @param {Boolean} way set index and coordinate to show the next card (true = way/right, false = way/left)
    */
  showNext(way) {
    this.shadowRoot.querySelector('.red-bar').classList.remove('red-bar-animation');
    this.setIndex(way);
    this.setTweet();
  }

  /**
    * Show next card
    */
  _next() {
    this.showNext(true);
  }

  /**
    * Show prev card
    */
  _prev() {
    this.showNext(false);
  }

  /**
    * Show next card
    */
  setTweet() {
    this.setCoordinate();
    this._startAutoplay();
  }

  /**
    * Set current index
    *  @param {Boolean} way set current index (array index / current element)
    */
  setIndex(way) {
    if (this.index === this.tweets.length - 1 && way) {
      this.index = 0;
    } else if (this.index === 0 && !way) {
      this.index = this.tweets.length - 1;
    } else if (way) {
      this.index++;
    } else {
      this.index--;
    }
  }

  /**
    * Set current card by coordinate
    */
  setCoordinate() {
    this.coordinate = -(this.shadowRoot.querySelector('#slide').clientWidth * this.index);
  }

  /**
    * Set carrousel interval in milliseconds
    */
  setAutoInterval() {
    this.interval = setInterval(() => {
      if (this._isIntersecting) {
        this.showNext(true);
      }
    }, this.timer);
  }

  /**
   * Starts the autoplay interval if autoplay is true and there are enough items
   */
  _startAutoplay() {
    clearInterval(this.interval);
    this.setAutoInterval();
    this.shadowRoot.querySelector('.red-bar') !== null ? this.shadowRoot.querySelector('.red-bar').classList.add('red-bar-animation') :'';
  }

  /**
   * Stops the autoplay
   * @param {Event} event Event object
   */
  _stopAutoplay(event) {
    this._focusEventsActive.push(this.EVENTS[event.type]);
    clearInterval(this.interval);
    this.auto = false;
    setTimeout(() => {
      this.shadowRoot.querySelector('.red-bar').classList.remove('red-bar-animation');
    }, 100);
  }

  /**
    * @param {Number} index Set selected index / card
    */
  setNewPosition(index) {
    this.index = index.detail;
    this.setTweet();
  }

  /**
   * Start the carousel interval
   * @param {Event} event Event object
   */
  startInterval(event) {
    this._focusEventsActive = this._focusEventsActive.filter((ev) => ev !== this.EVENTS[event.type]);
    if (this._focusEventsActive.length === 0) {
      this._startAutoplay();
      this.auto = true;
    }
  }

  /**
   * Calculate the date when the query starts to get tweets and parses it to the query API format
   * @return {{date}} Date to start to get tweets parsed
   */
  _getFromDate() {
    let fromDate = new Date();
    fromDate.setDate(fromDate.getDate() - DAYS_BEFORE);
    fromDate = fromDate.getFullYear() + this._datePieceFormatter(fromDate.getMonth() + MONTH_ADJUSTMENT) + this._datePieceFormatter(fromDate.getDate()) + DAY_LAST_MOMENT;    
    return fromDate;
  }
  
  /**
   * Calculate the date until the query get tweets and parses it to the query API format
   * @return {{date}} Five minutes from actual date 
   */
  _getToDate() {
    let toDate = new Date();
    toDate = toDate.getFullYear() + this._datePieceFormatter(toDate.getMonth() + MONTH_ADJUSTMENT) + this._datePieceFormatter(toDate.getDate()) + this._datePieceFormatter(toDate.getHours() - 2) + this._datePieceFormatter(toDate.getMinutes() - CLOCK_SKEW);
    return toDate;
  }

  /**
   * Parses the string to adapt to the specified format
   * @param {string || number} datePiece The API url.
   * @return {{string}} 
   */
  _datePieceFormatter(datePiece) {
    return ("0" + datePiece).slice(-2);
  }

  /**
   * @param {string} apiUrl The API url.
   * @param {object} fetchParams The params for the query to the Twitter API.
   * Makes the request to API twitter in pro enviroment and to our own file in dev enviroment
   */
  _fetchTweets(apiUrl, fetchParams) {
    fetch(apiUrl, fetchParams)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const tweetsWithPics = (keyList, fullObject) => {
          return keyList.reduce((prev, current) => (prev && prev[current]) ? prev[current] : null, fullObject)
        }
        this.tweets = data.results.filter((tweet) => { 
          if(tweetsWithPics(['extended_tweet', 'entities', 'media', 0, 'media_url_https'], tweet)) {
            return tweet.extended_tweet;
          }
        });
      })
      .catch(() => {
        this.shadowRoot.querySelector('section').setAttribute('style', 'display: none;');
      });
  }
}
customElements.define('smarter-feed', SmarterFeed);
