import { LitElement, html, css } from 'lit-element';

// These are the shared styles needed by this element.
import { SharedStyles } from '../../../components/shared-styles.js';
import { get as i18n } from '../../../components/lit-i18n';

import '../../../components/cards-element/bottomcards-container';

class SmartUp extends LitElement {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
        :host{
          display: block;
        }

        .image-deploy {
          max-width: 100%;
          min-width: 100%;
          height: 367px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          background: url("./assets/images/training/image-deploy-mobile.jpg") no-repeat;
          background-size: cover;
          background-position-y: 88%;
          background-position-x: 28%;
          padding: 0px 35px;
          box-sizing: border-box;
        }

        .image-deploy:before {
          content: "";
          display: block;
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          background-color: #CD6B79;
          background-image: linear-gradient(#CB4747, black); 
          opacity: 0.8;
        }

        .box-deploy {
          position: relative;  
          width: 50px;
          height: 10%;
          font-size: 1rem;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          white-space: pre-line;
          transition: all 1s ease;
        }

        .animated {
          width: 90%;
          height: 80%;
        }

        .top-left-corner {
          width: 30px;
          height: 30px;
          position: absolute;
          top: 0;
          left: 0;
          border-left: 3px solid white;
          border-top: 3px solid white;
          transition: transform 1s ease;
        }

        .animated .top-left-corner {
          transform:rotate(360deg);
        }

        .bottom-right-corner {
          width: 30px;
          height: 30px;
          position: absolute;
          bottom: 0;
          right: 0;
          border-right: 3px solid white;
          border-bottom: 3px solid white;
          transition: transform 1s ease;
        }

        .animated .bottom-right-corner {
          transform:rotate(360deg);
        }

        .box-deploy p {
          display: flex;
          justify-content: center;
          opacity: 0;
          padding: 10px;
          min-width: 180px;
        }

        .animated p {
          opacity: 1;
          margin: 0;
          transition: opacity 0.5s ease 1s;
        }

        @media (min-width: 400px) {
          .animated {
            height: 60%;
          }
        }

        @media (min-width: 768px) {
          .box-deploy {
            white-space: initial;
            width: 49px;
            transition : all 0.8s ease;
            height: 10%;
          }

          .animated {
            width: 600px;
            height: 30%;
          }

          .top-left-corner {
            top: -2px;
            left: -5px;
          }

          .image-deploy {
            background: url("./assets/images/training/image-deploy.jpg") no-repeat fixed;
            background-size: cover;
            background-position-y: 0;
            background-position-x: 0;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      animated: { type: Boolean },
      smartUpBottomCardsData: { type: Array },
    };
  }

  constructor() {
    super();
    this.animated = false;
    this.smartUpBottomCardsData = [];
  }

  render() {
    return html`
        <section aria-label="${i18n('SMARTUP', true)}" tabindex="0">
          <h1 class="title section-header" aria-label="${i18n('SMARTUP', true)}" tabindex="0">
            <lit-i18n>SMARTUP</lit-i18n>
          </h1>
          <div class="image-deploy">
            <div class="box-deploy ${this.animated ? 'animated' : ''}">
            <div class="top-left-corner"></div>
                <p tabindex="0">
                  <lit-i18n>SMARTUP_BOX_TEXT</lit-i18n>
                </p>
            <div class="bottom-right-corner"></div>
            </div>
          </div>
          <bottomcards-container .cardsData="${this.smartUpBottomCardsData}"></bottomcards-container>
        </section>
    `;
  }

  firstUpdated() {
    if (window.IntersectionObserver) {
      const imageDeploy = this.shadowRoot.querySelector('.image-deploy');
      // Event cannot be dispatched on connectedCallback as imageDeploy doesn't exist. Minor performance issue
      this.dispatchEvent(new CustomEvent('start-observing-intersection', {
        bubbles: true,
        composed: true,
        detail: { element: imageDeploy, threshold: 0.7, callback: this._handleIntersection.bind(this) },
      }));
    } else {
      this.animated = true;
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (window.IntersectionObserver) {
      const imageDeploy = this.shadowRoot.querySelector('.image-deploy');
      this.dispatchEvent(new CustomEvent('stop-observing-intersection', {
        bubbles: true,
        composed: true,
        detail: { element: imageDeploy, threshold: 0.7 },
      }));
    }
  }
  /* eslint-enable require-jsdoc */

  /**
   * Handle animation since intersection Observer
   * @param {array} isIntersecting
   */
  _handleIntersection([{ isIntersecting }]) {
    this.animated = isIntersecting;
  }
}
customElements.define('smart-up', SmartUp);
