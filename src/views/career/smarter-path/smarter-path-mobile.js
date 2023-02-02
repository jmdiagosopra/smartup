import { LitElement, html, css } from 'lit-element';
// These are the shared styles needed by this element.
import { SharedStyles } from '../../../components/shared-styles.js';
import { get as i18n } from '../../../components/lit-i18n';

import { pathData } from './smarter-path-data.js';

class SmarterPathMobile extends LitElement {
/* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
        :host{
          display: block;
          position: relative;
        }

        section {
          height: 630px;
          padding: 20px;
          background-image: url('../../../../assets/images/career/road-mobile.jpg');
          background-size: cover;
          background-position: center;
        }

        .steps-container:before {
          content: "";
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.8));
          position: absolute;
        }

        .step-card {
          display: flex;
          align-items: center;
          margin-bottom: 30px;
          position: relative;
        }

        .icon-outer-circle {
          background-color: var(--app-primary-color, #CC0033);
          border-radius: 80px;
          padding: 1px;
          height: fit-content;
          z-index: 1;
          opacity: 0;
          transform: translateX(-100px);
        }

        .circle-1 {
          transition: transform 0.5s ease, opacity 0.5s ease, padding 0.5s ease, margin 0.5s ease;
        }
        
        .circle-2 {
          transition: transform 0.5s ease 0.15s, opacity 0.5s ease 0.15s, padding 0.5s ease, margin 0.5s ease;
        }
        
        .circle-3 {
          transition: transform 0.5s ease 0.3s, opacity 0.5s ease 0.3s, padding 0.5s ease, margin 0.5s ease;
        }
        
        .circle-4 {
          transition: transform 0.5s ease 0.45s, opacity 0.5s ease 0.45s, padding 0.5s ease, margin 0.5s ease;
        }

        .circle-entrance-animation {
          opacity: 1;
          transform: translateX(0px);
        }

        .icon-outer-circle-bold {
          padding: 4px;
          margin-left: -3px;
          margin-right: -3px;
        }

        .icon-inner-circle {
          background-color: #fff;
          border-radius: 60px;
        }
        
        .icon-inner-circle img {
          width: 100px;
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            margin-top: -20px;
           }
          to {
            opacity: 1;
            margin-top: 0;
           }
        }

        .step-text {
          z-index: 10;
          animation: slide-down 0.5s ease;
          opacity: 0;
          margin-left: 20px;
          transition: opacity 0.5s ease 1s;
        }

        .step-text-entrance-animation {
          opacity: 1;
        }

        .step-text h3 {
          color: var(--app-primary-color, #CC0033);
          margin: 0;
          font-size: 18px;
        }
        
        .step-text p {
          font-size: 11px;
          margin: 0;
        }

        .connector-line {
          width: 1px;
          border-right: 1px solid var(--app-primary-color, #CC0033);
          position: absolute;
          bottom: -45px;
          left: 50px;
          margin-bottom: 30px;
          height: 0;
          transition: all 1s linear 0.5s;
        }

        .step-card:last-child .connector-line {
          display: none;
        }

        .line-animation {
          margin-bottom: 0;
          height: 60px;
        }
        
        .button {
          z-index: 2;
          display: flex;
          justify-content: center;
          padding: 50px;
          margin: 0;
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          width: 100%;
          box-sizing: border-box;
        }

        a {
          margin: 0 !important;
        }

        svg > path {
          stroke: rgb(204, 0, 51);
          stroke-width: 1.3;
        }
      `,
    ];
  }

  static get properties() {
    return {
      animated: { type: Boolean },
      pathSteps: { type: Array },
      stepSelected: { type: String },
    };
  }

  constructor() {
    super();
    this.animated = false;
    this.pathSteps = pathData;
    this.stepSelected = this.pathSteps[0].title;
  }

  render() {
    return html`
      <section aria-label="${i18n('SMARTUP', true)}" tabindex="0">
        <div class="steps-container">
          ${this._generateSteps()}
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
        detail: { element: this, threshold: 0.8, callback: this._handleIntersection.bind(this) },
      }));
    } else {
      this.animated = true;
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (window.IntersectionObserver) {
      this._unobserveIntersection();
    }
  }
  /* eslint-enable require-jsdoc */

  /**
   * Returns 4 divs, one for each step
   * @return {string}
   */
  _generateSteps() {
    return this.pathSteps.map((step, index) => {
      return html`
        <div class="step-card">
          <div class="icon-outer-circle
                      circle-${index + 1}
                      ${this.stepSelected === step.title ? 'icon-outer-circle-bold' : ''}
                      ${this.animated ? 'circle-entrance-animation' : ''}">
            <div class="icon-inner-circle" @click="${() => this._selectStep(step.title)}">
              <img src=${step.logoUrl} alt="${step.title} icon">
            </div>
          </div>
          ${this.stepSelected === step.title ? html`
            <div class="step-text ${this.animated ? 'step-text-entrance-animation' : ''}">
              <h3>${step.title}</h3>
              <p>${step.text}</p>
            </div>
          ` : ''}
          <div class="connector-line ${this.animated ? 'line-animation' : ''}"></div>
        </div>
      `;
    });
  }

  /**
   * Sets stepSelected to a different title string
   * @param {string} title
   */
  _selectStep(title) {
    this.stepSelected = title;
  }

  /**
   * Dispatch an event
   */
  _unobserveIntersection() {
    this.dispatchEvent(new CustomEvent('stop-observing-intersection', {
      bubbles: true,
      composed: true,
      detail: { element: this, threshold: 0.8 },
    }));
  }

  /**
   * Handle animation with intersection Observer
   * @param {array} isIntersecting
   */
  _handleIntersection([{ isIntersecting }]) {
    this.animated = isIntersecting;
    if (isIntersecting) {
      this._unobserveIntersection(0.8);
    }
  }
}
customElements.define('smarter-path-mobile', SmarterPathMobile);
