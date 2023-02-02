import { LitElement, html, css } from 'lit-element';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

import { arrowDown } from './my-icons.js';

/**
 * Hero element for SmartUp Xperience
 */
class HeroElement extends LitElement {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          height: 100vh;
          min-height: calc(100vh - var(--header-height));
          position: relative;
        }

        .video-wrapper {
          margin: 0;
          padding: 0;
          background-size: cover;
          height: 100%;
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .text-container {
          height: 100%;
          color: white;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          position: absolute;
          top: 0;
          margin: 0 auto;
          width: 100%;
          padding: 3rem 10px;
          box-sizing: border-box;
          text-shadow: 0 0 50px rgba(0, 0, 0, .5);
        }

        .text-container .title {
          text-transform: uppercase;
          white-space: pre-line;
          font-size: var(--app-image-text-font-size-mobile, 36px);
          font-weight: 700;
          line-height: 1;
          margin: 0;
        }

        .text-container .text {
          margin-top: 80px;
        }

        .text-container .subtitle {
          font-size: 18px;
          font-weight: 300;
          color: inherit;
          margin: 5px;
        }
        .text-container button {
          cursor: pointer;
          border: none;
          background: none;
          width: 32px;
        }
        .text-container button svg {
          width: 100%;
        }

        .text-container svg:active path {
          stroke: red;
          stroke-width: 1;
        }

        @media (min-width: 768px) {
          .text-container button {
            width: 48px;
            margin-bottom: 40px;
          }

          .text-container .title {
            font-size: 60px;
            font-weight: 700;
            white-space: pre-line;
          }

          .text-container .text {
            margin-top: 150px;
          }

          .text-container .subtitle {
            font-size: 40px;
          }

          .text-container svg path {
            stroke-width: 1;
          }
          
          .text-container svg:hover path {
            stroke-width: 1.6;
            stroke: red;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      scrollTo: { type: String },
      literals: { type: Array },
    };
  }

  constructor() {
    super();
    this.literals = [];
    this.scrollTo = '';
  }

  render() {
    return html`
      <div class="video-wrapper">
        <slot name="video"></slot>
      </div>
      <div class="text-container">
        <div class="text">
          <h1 class="title" aria-level="1" tabindex="0" role="heading"><lit-i18n>${this.literals[0]}</lit-i18n></h1>
          <h2 class="subtitle" tabindex="0">
            <lit-i18n>${this.literals[1]}</lit-i18n>
          </h2>
        </div>
        <button tabindex="0" aria-label="Siguiente sección" @click="${this._handleButtonClick}">${arrowDown}</button>
      </div>
    `;
  }

  firstUpdated() {
    this._handleBackGroundVideo();
  }

  connectedCallback() {
    super.connectedCallback();
    if (window.IntersectionObserver) {
      this.dispatchEvent(new CustomEvent('start-observing-intersection', {
        bubbles: true,
        composed: true,
        detail: { element: this, callback: this._handleIntersection.bind(this), threshold: 0.3 },
      }));
    }
  }

  disconnectedCallback() {
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
   * Handle click button component, build event scroll-automatic
   */
  _handleButtonClick() {
    this.dispatchEvent( new CustomEvent('scroll-automatic', {
      bubbles: true,
      composed: true,
      detail: { elementScroll: this.scrollTo },
    }));
  }

  /**
   * Handles video behaviour on intersection
   * @param {Array} entries Entries of observed elements (needed for isIntersecting attribute)
   */
  _handleIntersection([{ isIntersecting }]) {
    const video = this.querySelector('video');
    if (isIntersecting) {
      video.play();
    } else {
      video.pause();
    }
  }

  /**
   * Handles video background for career path
   */
  _handleBackGroundVideo() {
    const videoWrapper = this.shadowRoot.querySelector('.video-wrapper');
    if (this.literals[0] === 'SMARTUP_CAREER') {
      videoWrapper.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    }
  }
}

window.customElements.define('hero-element', HeroElement);
