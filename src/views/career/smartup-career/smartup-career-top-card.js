import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from '../../../components/shared-styles.js';

class SmartUpCareerTopCard extends LitElement {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
        :host{
          display: block;
        }

        section {
          position: relative;
          height: 100%;
          width: 100%;
          padding: 0px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          font-size: var(--app-title-font-size-mobile, 18px);
          background-image: url('./assets/images/career/smartup_career_component_card1image-mobile.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center 20%;
          overflow: hidden;
        }

        section:before {
          content: "";
          display: block;
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          background-color: #CD6B79;
          background-image: linear-gradient(#e80b2c, black); 
          opacity: 0.8;
        }

        .default-text {
          width: 80%;
          z-index: 1;
          margin-top: 220px;
          text-align: center;
          color: white;
          opacity: 0;
          transition: all 1s ease-out;
        }

        .center-text {
          margin: 0;
          opacity: 1;
        }

        @media (min-width: 768px) {
          section {
            background-image: url('./assets/images/career/smartup_career_component_card1image.jpg');
          }
          .default-text {
            width: 70%;
            margin-top: 300px;
          }

          .center-text {
            margin: 0;
          }

          p {
            font-size: var(--app-paragraph-font-size-mobile, 16px);
          }
        }

        @media (min-width: 1100px) {
          p {
            font-size: var(--app-subtitle-font-size, 24px);
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      textDisplacement: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.textDisplacement = false;
  }

  render() {
    return html`
        <section tabindex="0">
          <p class="default-text ${this.textDisplacement ? 'center-text' : ''}"><lit-i18n>SMARTUP_CAREER_COMPONENT_CARDONE_TEXT</lit-i18n></p>
        </section>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    if (window.IntersectionObserver) {
      this.dispatchEvent(new CustomEvent('start-observing-intersection', {
        bubbles: true,
        composed: true,
        detail: { element: this, threshold: 0.5, callback: this._handleIntersection.bind(this) },
      }));
    } else {
      this.textDisplacement = true;
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (window.IntersectionObserver) {
      this.dispatchEvent(new CustomEvent('stop-observing-intersection', {
        bubbles: true,
        composed: true,
        detail: { element: this },
      }));
    }
  }

  /* eslint-enable require-jsdoc */

  /**
   * Handles IntersectionObserver intersecting callback
   * @param {IntersectionObserverEntry[]} event IntersectionObserverEntry array
   */
  _handleIntersection([{ isIntersecting }]) {
    this.textDisplacement = isIntersecting;

    if (isIntersecting) {
      this.dispatchEvent(new CustomEvent('stop-observing-intersection', {
        bubbles: true,
        composed: true,
        detail: { element: this },
      }));
    }
  }
}

customElements.define('smartup-career-top-card', SmartUpCareerTopCard);
