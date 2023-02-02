import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from '../../../components/shared-styles.js';
import { get as i18n } from '../../../components/lit-i18n';

import { arrowDown } from '../../../components/my-icons';

/**
  * Technical coaches component
  */
class TechnicalCoaches extends LitElement {
/* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
        .container {
          position: relative;
          width: 100%;
          background: url('/assets/images/training/coaches.jpg');
          background-size: cover;
          background-position: center;
        }

        .container::before {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background-color: #CD6B79;
          background-image: linear-gradient(#CB4747, black);
          opacity: 0.8;
        }

        .filter {
          background-color: rgba(152, 55, 55, 0.69);
          padding: 10px;
        }

        .filter > p {
          position: relative;
          text-align: center;
          padding: 0px;
          font-size: 20px;
          font-weight: bold;
          color: white;
        }

        h3 {
          position: relative;
          text-align: center;
          color: white;
          margin: 0;
          transition: all 1s;
          margin-top: 40px;
          font-size: 18px;
        }

        h4 {
          margin: 0;
        }

        h5 {
          margin: 0;
          font-weight: 400;
        }

        p {
          will-change: transform;
          transition: all 1s;
        }

        .coaches {
          display: flex;
          position: relative;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 40px;
        }

        .coach {
          width: 200px;
          height: 200px;
          margin: 15px;
          background-size: 220%;
          background-repeat: no-repeat;
          overflow: hidden;
          border-radius: 100%;
          position: relative;
          transition: all 1s;
          cursor: pointer;
        }
        
        .hover:before {
          content:"";
          position: absolute;
          width: 200px;
          height: 200px;
          top: 0; left: 0;
          background-color: rgba(0,0,0,0.4);
          border-radius: 100%;
          animation: fadein 1s;
        }
        
        .coach-first {
          background-image: url('./assets/images/main/our-cracks/josediago.jpeg');
          background-size: cover;
          background-position: 0px 0px;
          background-position: 0% 0%;
        }
        
        .coach-second {
          background-image: url('./assets/images/main/our-cracks/arturozarzalejo.jpeg');
          background-size: cover;
          background-position: 0% 0%;
        }
        
        .coach-third {
          background-image: url('./assets/images/main/our-cracks/oriolfurnells.jpeg');
          background-size: cover;
          background-position: 0% 0%;
        }
        
        .coach-fourth {
          background-image: url('./assets/images/main/our-cracks/alfonsoestepa.jpg');
          background-size: cover;
          background-position: 0% 0%;
        }
        
        .card {
          display: none;
          padding: 20px;
        }

        .card:before {
          content: "";
          align-items: center;
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background-color: white;
          opacity: 0.6;
        }

        .card > p {
          padding: 0px;
          font-weight: 500;
          width: 100%;
          float: right;
        }

        .card > h2, .card > h3, .card > p {
          position: relative;
          text-align: center;
          color: black;
        }

        .card > h2 {
          color: #CC0033;
        }

        .card > h3 {
          font-weight: 600;
        }

        .name {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          margin-top: 100%;
          color: white;
          will-change: transform;
          position: relative;
          border-radius: 100%;
          transition: all 1s;
        }

        .show {
          margin-top: 0;
        }

        svg {
          width: 50px;
          opacity: 0;
          transform: rotate(90deg);
          will-change: transform;
          transition: opacity 3s;
        }

        .arrow {
          position: absolute;
          background: none;
          border: none;
          height: 100px;
          padding: 20px;
          bottom: 0;
          cursor: pointer;
        }

        .remove-margin {
          margin: 0 !important;
          padding: 0 !important;
        }

        .coach-open {
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          will-change: transform;
          transition: all 1s;
          width: 100%;
          height: 500px;
          border-radius: 0;
          margin: 0;
          padding: 0;
        }

        .text-close {
          opacity: 0;
          height: 0;
          padding: 0;
          margin: 0;
        }

        .expanded .bio {
          animation: fadein 2s 800ms;
          animation-fill-mode: backwards;
        }

        @keyframes fadein {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .expanded .card {
          display: block;
        }
        
        .expanded svg {
          opacity: 1;
        }

        .button {
          display: flex;
          justify-content: center;
          padding: 50px;
        }

        a {
          margin: 0 !important;
        }

        svg > path {
          stroke: rgb(204, 0, 51);
          stroke-width: 1.3;
        }

        @media screen and (min-width: 500px) {
          .coach-first {
            background-image: url('./assets/images/main/our-cracks/josediago.jpeg');
          }

          .coach-second {
            background-image: url('./assets/images/main/our-cracks/arturozarzalejo.jpeg');
          }

          .coach-third {
            background-image: url('./assets/images/main/our-cracks/oriolfurnells.jpeg');
          }

          .coach-fourth {
            background-image: url('./assets/images/main/our-cracks/alfonsoestepa.jpg');
          }
        }

        @media screen and (min-width: 768px) {
          .coaches {
            display: flex;
            flex-direction: unset;
          }

          .coach:before {
            display: none;
          }

          @keyframes light-fadein {
          from { background-color: rgba(0,0,0,0); }
          to { background-color: rgba(0,0,0,0.4); }
        }

          .hover:hover::before {
            display: block;
            animation: light-fadein 0.7s ease;
          }

          .coach-open {
            background-size: 100%;
          }

          .filter > p {
            font-size: 22px;
          }

          .card > p {
            width: 50%;
          }

          .coach:hover > .name {
            margin-top: 0;
          }

          .card {
            padding: 50px;
            padding-left: 0;
          }

          .card > h2, .card > h3, .card > p {
            text-align: right;
          }

          .filter {
            padding: 50px;
          }
        }

        @media screen and (min-width: 1024px) {
          .coach-open {
            background-position: center -35px;
          }
        }

        @media screen and (min-width: 1300px) {
          .coach-open {
            background-position: center -145px;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      animated: { type: Boolean },
      device: { type: String },
      opened: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.animated = false;
    this.opened = false;
    this._detectDevice();
  }

  render() {
    return html`
      <section aria-label="${i18n('TECHNICAL_COACHES', true)}" tabindex="0">
        <h1 class="title section-header" aria-label="${i18n('TECHNICAL_COACHES', true)}" tabindex="0">
          <lit-i18n>TECHNICAL_COACHES</lit-i18n>
        </h1>
        <div class="container">
          <div class="filter">
              <p tabindex="0"><lit-i18n>TECHNICAL_COACHES_P</lit-i18n></p>
              <h3 tabindex="0"><lit-i18n>TECHNICAL_COACHES_SUBTITLE</lit-i18n></h3>
              <div class="coaches">
                <div class="coach hover coach-first" @click="${() => this._openBio('first', this)}">
                  <div class="name first-title ${(this.animated && this.device==='mobile') ? 'show' : ''}">
                    <h4 tabindex="0"><lit-i18n>TECHNICAL_COACH_1_NAME</lit-i18n></h4>
                    <h5 tabindex="0"><lit-i18n>TECHNICAL_COACH_1_SUBTITLE</lit-i18n></h5>
                  </div>
                  <div class="card">
                    <h2 tabindex="0"><lit-i18n>TECHNICAL_COACH_1_NAME</lit-i18n></h2>
                    <h3 tabindex="0"><lit-i18n>TECHNICAL_COACH_1_SUBTITLE</lit-i18n></h3>
                    <p class="bio" tabindex="0"><lit-i18n>TECHNICAL_COACH_1_BIO</lit-i18n></p>
                    <button class="arrow" @click="${() => this._closeBio('first', this)}">${arrowDown}</button>
                  </div>
                </div>
                <div class="coach hover coach-second" @click="${() => this._openBio('second', this)}">
                  <div class="name second-title ${(this.animated && this.device==='mobile') ? 'show' : ''}">
                    <h4 tabindex="0"><lit-i18n>TECHNICAL_COACH_2_NAME</lit-i18n></h4>
                    <h5 tabindex="0"><lit-i18n>TECHNICAL_COACH_2_SUBTITLE</lit-i18n></h5>
                  </div>
                  <div class="card">
                    <h2 tabindex="0"><lit-i18n>TECHNICAL_COACH_2_NAME</lit-i18n></h2>
                    <h3 tabindex="0"><lit-i18n>TECHNICAL_COACH_2_SUBTITLE</lit-i18n></h3>
                    <p class="bio" tabindex="0"><lit-i18n>TECHNICAL_COACH_2_BIO</lit-i18n></p>
                    <button class="arrow" @click="${() => this._closeBio('second', this)}">${arrowDown}</button>
                  </div>
                </div>
                <div class="coach hover coach-third" @click="${() => this._openBio('third', this)}">
                  <div class="name third-title ${(this.animated && this.device==='mobile') ? 'show' : ''}">
                    <h4 tabindex="0"><lit-i18n>TECHNICAL_COACH_3_NAME</lit-i18n></h4>
                    <h5 tabindex="0"><lit-i18n>TECHNICAL_COACH_3_SUBTITLE</lit-i18n></h5>
                  </div>
                  <div class="card">
                    <h2 tabindex="0"><lit-i18n>TECHNICAL_COACH_3_NAME</lit-i18n></h2>
                    <h3 tabindex="0"><lit-i18n>TECHNICAL_COACH_3_SUBTITLE</lit-i18n></h3>
                    <p class="bio" tabindex="0"><lit-i18n>TECHNICAL_COACH_3_BIO</lit-i18n></p>
                    <button class="arrow" @click="${() => this._closeBio('third', this)}">${arrowDown}</button>
                  </div>
                  </div>
                  <div class="coach hover coach-fourth" @click="${() => this._openBio('fourth', this)}">
                  <div class="name fourth-title ${(this.animated && this.device==='mobile') ? 'show' : ''}">
                    <h4 tabindex="0"><lit-i18n>TECHNICAL_COACH_4_NAME</lit-i18n></h4>
                    <h5 tabindex="0"><lit-i18n>TECHNICAL_COACH_4_SUBTITLE</lit-i18n></h5>
                  </div>
                  <div class="card">
                    <h2 tabindex="0"><lit-i18n>TECHNICAL_COACH_4_NAME</lit-i18n></h2>
                    <h3 tabindex="0"><lit-i18n>TECHNICAL_COACH_4_SUBTITLE</lit-i18n></h3>
                    <p class="bio" tabindex="0"><lit-i18n>TECHNICAL_COACH_4_BIO</lit-i18n></p>
                    <button class="arrow" @click="${() => this._closeBio('fourth', this)}">${arrowDown}</button>
                  </div>
                </div>
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

  connectedCallback() {
    super.connectedCallback();
    if (window.IntersectionObserver) {
      this.dispatchEvent(new CustomEvent('start-observing-intersection', {
        bubbles: true,
        composed: true,
        detail: { element: this, threshold: 0.5, callback: ([{ isIntersecting }]) => this.animated = isIntersecting },
      }));
    } else {
      this.animated = true;
    }

    const mq = window.matchMedia('(min-width: 768px)');
    mq.addListener(() => {
      this._detectDevice();
    }, true);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (window.IntersectionObserver) {
      this.dispatchEvent(new CustomEvent('stop-observing-intersection', {
        bubbles: true,
        composed: true,
        element: { view: this, threshold: 0.5 },
      }));
    }

    const mq = window.matchMedia('(min-width: 768px)');
    mq.removeListener(() => {
      this._detectDevice();
    }, true);
  }

  _detectDevice() {
    this.device = window.innerWidth < 768 ? 'mobile' : 'desktop';
  }

  /** eslint-disable require-jsdoc */

  /**
    * Open coach biography when clicking on the profile photo
    * @param {String} card Card reference
    */
  _openBio(card) {
    if (!this.shadowRoot.querySelector('.expanded') && !this.opened) {
      setTimeout(() => {
        
        this.shadowRoot.querySelector('.filter').classList.add('remove-margin');
        this.shadowRoot.querySelector('.coaches').classList.add('remove-margin');
        
        this.shadowRoot.querySelector('.coach-' + card).classList.add('coach-open');
        
        this.shadowRoot.querySelector('p').classList.add('text-close');
        this.shadowRoot.querySelector('h3').classList.add('text-close');
        
        this.shadowRoot.querySelector('.' + card + '-title').style.display = 'none';
        
        for(let i =0; i<this.shadowRoot.querySelectorAll('.coach').length; i++){
          let position = ["first", "second", "third", "fourth"];
          this.shadowRoot.querySelector(`.coach-${position[i]}`).classList.remove('hover');
          if(card !== position[i])
            this.shadowRoot.querySelector(`.coach-${position[i]}`).style.display = 'none';
        }

        this.shadowRoot.querySelector('.container').classList.add('expanded');

        this._scrollWhenOpen();
      }, 0);
      this.opened = true;
    }
  }

  /**
    * Close coach biography when clicking on the left arrow
    * @param {String} card Card reference
    */
  _closeBio(card) {
    setTimeout(() => {
      let position = ["first", "second", "third", "fourth"];
      this.shadowRoot.querySelector('.filter').classList.remove('remove-margin');
      this.shadowRoot.querySelector('.container').classList.remove('expanded');
      this.shadowRoot.querySelector('.coaches').classList.remove('remove-margin');

      this.shadowRoot.querySelector('.coach-' + card).classList.remove('coach-open');

      this.shadowRoot.querySelector('p').classList.remove('text-close');
      this.shadowRoot.querySelector('h3').classList.remove('text-close');

      setTimeout(() => {
        this.shadowRoot.querySelector('.' + card + '-title').style.display = '';
        for(let i =0; i<this.shadowRoot.querySelectorAll('.coach').length; i++){
          this.shadowRoot.querySelector(`.coach-${position[i]}`).classList.add('hover');
        }
        this.opened = false;
      }, 1000);
      for(let i =0; i<this.shadowRoot.querySelectorAll('.coach').length; i++){
        if(card !== position[card])
          this.shadowRoot.querySelector(`.coach-${position[i]}`).style.display = 'block';
      }
    }, 0);
  }

  /**
    * Scroll to top when _openBio()
    */
  _scrollWhenOpen() {
    setTimeout(() => {
      const headerHeight = parseInt(getComputedStyle(this).getPropertyValue('--header-height'));
      window.scrollTo({
        left: 0,
        top: this.shadowRoot.querySelector('section').offsetTop - headerHeight,
        behavior: 'smooth',
      });
    }, 500);
  }
}
customElements.define('technical-coaches', TechnicalCoaches);
