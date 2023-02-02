import { LitElement, html, css } from 'lit-element';

// These are the shared styles needed by this element.
import { SharedStyles } from '../../../components/shared-styles.js';
import { get as i18n } from '../../../components/lit-i18n';

import { arrowDown } from '../../../components/my-icons.js';
import { touchGestures, updateAnimationSpeed, updateXPosition } from '../../../utils/carouselUtils';
import './single-crack.js';

/**
 * Our-cracks section that contains a header and a carousel of single-crack elements
 */
class OurCracks extends LitElement {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          width: 100%;
          background: #FFF;
        }

        section h1.title.section-header {
          font-size: 17px;
        }

        .slider-container {
          padding: 0 35px;
          width: 100%;
          max-width: 100%;
          min-width: 100%;
          position: relative;
          box-sizing: border-box;
          background-image: url("/assets/images/main/our-cracks/background-mobile.jpg");
          background-size: cover;
          background-position: center;
        }

        .slider-wrapper {
          overflow-x: hidden;
          width: 100%;
          height: 100%;
        }

        .slider-container::before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: var(--app-primary-color, #CC0033);
          opacity: 0.2;
        }

        .slider {
          display: flex;
          box-sizing: border-box;
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

        .arrow-button[disabled] {
          display: none;
        }

        .arrow-button.next {
          right: 17px;
          transform: rotateZ(-90deg);
        }

        .arrow-button.prev {
          left: 17px;
          transform: rotateZ(90deg);
        }

        .arrow-button svg {
          width: 100%;
          height: 100%;
        }

        .arrow-button svg * {
          stroke-width: 1px;
        }

        .arrow-button:hover svg *,
        .arrow-button:active svg * {
          stroke: var(--app-primary-color, #CC0033);
        }

        single-crack {
          flex: 1 1 0;
          box-sizing: border-box;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0,0,0,0);
          border: 0;
        }

        .arrow-button svg * {
          stroke-width: 2px;
        }

        @media (min-width: 768px) {
          section h1.title.section-header {
            font-size: var(--app-title-font-size-desktop, 32px);
          }

          .slider-container {
            padding: 0 220px;
            background-image: url("/assets/images/main/our-cracks/background.jpg");
          }

          .arrow-button {
            width: 40px;
            height: 20px;
          }

          .arrow-button.next {
            /* 120 - 10px from rotating the arrow */
            right: 110px;
          }

          .arrow-button.prev {
            /* 120 - 10px from rotating the arrow */
            left: 110px;
          }
        } 
      `,
    ];
  }

  static get properties() {
    return {
      cracks: { type: Array },
      autoplay: { type: Boolean },
      index: { type: Number },
      speed: { type: Number },
      animationSpeed: { type: Number },
      minTouchLength: { type: Number },
      minTouchAngle: { type: Number },
      numItems: { type: Number },
      _buttonsDisabled: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.cracks = [];
    this.index = 0;
    this.speed = 5000;
    this.animationSpeed = 0.7;
    this.minTouchLength = 70;
    this.minTouchAngle = 30;
    this.autoplay = true;
    this._buttonsDisabled = false;
    this.numItems = 1;
    // non-properties
    this.elementMinWidth = 300;
    this.interval = null;
    this._focusEventsActive = [];
    this._isIntersecting = true;

    this.EVENTS = {
      mouseenter: 'mouse',
      mouseleave: 'mouse',
      focusin: 'focus',
      focusout: 'focus',
    };
  }

  render() {
    return html`
      <section aria-label="${i18n('OUR_CRACKS_TITLE', true)}" tabindex="0">
        <h1 class="title section-header" aria-label="${i18n('OUR_CRACKS_TITLE', true)}" tabindex="0">
          <lit-i18n>OUR_CRACKS_TITLE</lit-i18n>
        </h1>
        <div id="cracks-slider-container" class="slider-container">
          <button id="prev" aria-label="${i18n('PREV_BUTTON')}" class="arrow-button prev" ?disabled="${this._buttonsDisabled}" @click="${() => this.clickPrev()}">${arrowDown}</button>
          <div class="slider-wrapper">
            <div class="slider" id="cracks-slider">
              ${this.cracks.map((crack) => html`<single-crack id="${crack.name.split(' ').join('')}" .crack="${crack}"></single-crack>`)}
            </div>
          </div>
          <button id="next" aria-label="${i18n('NEXT_BUTTON')}" class="arrow-button next" ?disabled="${this._buttonsDisabled}" @click="${() => this.clickNext()}">${arrowDown}</button>
          <div aria-live="polite" class="sr-only" tabindex="-1">
            ${i18n('OUR_CRACKS_TITLE') + ': ' + i18n(this.numItems === 1 ? 'SLIDE' : 'SLIDE_GROUP') + ' ' + (this.index + 1) + ' ' + i18n('OF') + ' ' + Math.ceil(this.cracks.length / this.numItems)}
          </div>
        </div>
      </section>
    `;
  }

  firstUpdated() {
    this._addEventListeners();
    updateAnimationSpeed(this.animationSpeed, this, '#cracks-slider');
    this._updateItemsVisibility();
    this._startAutoplay();
  }

  updated() {
    this._recalculateSliderWidth();
    this._updateCarouselWidth();
    updateXPosition(null, this, '#cracks-slider');
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
    window.addEventListener('resize', this._onWindowResize.bind(this));
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
    window.removeEventListener('resize', this._onWindowResize.bind(this));
  }
  /* eslint-enable require-jsdoc */

  /**
   * Click on the next button
   */
  clickNext() {
    this._stopAutoplay();
    this._next();
    this._startAutoplay();
  }

  /**
   * Click on the prev button
   */
  clickPrev() {
    this._stopAutoplay();
    this._prev();
    this._startAutoplay();
  }

  /**
   * Starts the autoplay interval if autoplay is true and there are enough items
   */
  _startAutoplay() {
    this._stopAutoplay();
    if (this.autoplay && this._focusEventsActive.length == 0 && this.cracks.length > this.numItems) {
      this.interval = setInterval(() => {
        if (this._isIntersecting) {
          this._next();
        }
      }, this.speed);
    }
  }

  /**
   * Stops the autoplay interval if there is any
   */
  _stopAutoplay() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }

  /**
   * Recalculates how many items can fit inside the slider and the container width
   *
   * Also sets buttons disabled if there are not enough items
   */
  _recalculateSliderWidth() {
    this.sliderWidth = this.shadowRoot.querySelector('.slider-wrapper').offsetWidth;
    let numItems = Math.floor(this.sliderWidth / this.elementMinWidth);

    if (numItems < 1) numItems = 1;
    if(this.cracks.length < numItems) numItems = this.cracks.length;
    if (this.numItems !== numItems) this.numItems = numItems;
    const buttonsDisabled = this.cracks.length <= this.numItems;
    if (this._buttonsDisabled !== buttonsDisabled) this._buttonsDisabled = buttonsDisabled;
  }

  /**
   * Resizes carousel element (#cracks-slider) and it's container (#cracks-slider-container)
   */
  _updateCarouselWidth() {
    this.shadowRoot.querySelector('#cracks-slider-container').style.width = this.sliderWidth + 'px';
    this.shadowRoot.querySelector('#cracks-slider').style.width = (this.cracks.length * this.sliderWidth / this.numItems) + 'px';
  }

  /**
   * Select next slide
   */
  _next() {
    this.index++;
    if (this.index >= Math.ceil(this.cracks.length / this.numItems)) {
      this.index = 0;
    }
    updateXPosition(null, this, '#cracks-slider');
  }

  /**
   * Select previous slide
   */
  _prev() {
    this.index--;
    if (this.index < 0) {
      this.index = Math.ceil(this.cracks.length / this.numItems) - 1;
    }
    updateXPosition(null, this, '#cracks-slider');
  }

  /**
   * Updates all _cracks items visible property
   */
  _updateItemsVisibility() {
    this.cracks.forEach((crack, i) => {
      const minIndex = this.index * this.numItems;
      const maxIndex = minIndex + this.numItems;
      const visible = i >= minIndex && i < maxIndex;
      const el = this.shadowRoot.querySelector(`#${crack.name.split(' ').join('')}`);
      el.setAttribute('aria-hidden', !visible);
      el.setAttribute('tabindex', visible ? 0 : -1);
    });
  }

  /**
   * Sets all event listeners for this component, including window resize
   */
  _addEventListeners() {
    touchGestures(this, '#cracks-slider');
    const sliderContainer = this.shadowRoot.querySelector('#cracks-slider-container');

    sliderContainer.addEventListener('mouseenter', this._onFocusIn.bind(this));
    sliderContainer.addEventListener('focusin', this._onFocusIn.bind(this));
    sliderContainer.addEventListener('mouseleave', this._onFocusOut.bind(this));
    sliderContainer.addEventListener('focusout', this._onFocusOut.bind(this));
  }

  /**
   * Operations to be performed on window resize
   */
  _onWindowResize() {
    this._recalculateSliderWidth();
    this.index = Math.floor(this.index / this.numItems);
    this._updateCarouselWidth();
    updateXPosition(null, this, '#cracks-slider');
  }

  /**
   * Fired when the mouse or the focus is inside the carousel. Stops autoplay
   *
   * @param {event} event
   */
  _onFocusIn(event) {
    this._focusEventsActive.push(this.EVENTS[event.type]);
    this._stopAutoplay();
  }

  /**
   * Fired when the mouse or the focus leaves the carousel. Starts autoplay
   *
   * @param {event} event
   */
  _onFocusOut(event) {
    this._focusEventsActive = this._focusEventsActive.filter((ev) => ev !== this.EVENTS[event.type]);
    this._startAutoplay();
  }
}
window.customElements.define('our-cracks', OurCracks);
