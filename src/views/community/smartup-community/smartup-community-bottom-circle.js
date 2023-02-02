import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from '../../../components/shared-styles.js';

const THRESHOLDS = {
  FIRST: 0.5,
};

class SmartupCommunityBottomCircle extends LitElement {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css `
        :host {
          display: block;
        }

        .circle {
          opacity: 0;
          width: 240px;
          height: 240px;
          margin: 10px 10px;
          border-radius: 50%;
          background-size: cover;
          overflow: hidden;
        }
        
        div.circle div.text-container {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0,0,0,0.5);
          height: 100%;
          width: 100%;
        }
  
        div.circle div p {
          display: none;
          color: white;
          display: block;
          white-space: pre-line;
          text-align: center;
          margin-top: 0;
        }   

        .appearing {
          animation: first_appearance 1s ease-out forwards;
        }

        @keyframes first_appearance { 
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media(min-width: 768px) {
          div.circle div.text-container {
            background-color: rgba(0,0,0,0);
            transition: all 0.2s ease;
          }

          div.circle div.text-container:hover {
            background-color: rgba(0,0,0,0.5);
          }

          div.circle div p {
            display: none;
            color: white;
          }

          div.circle div.text-container:hover p {
            display: block;
          }
        }

        @media(min-width: 1200px) {
          .circle {
            width: 350px;
            height: 350px;
            margin: 70px 30px 150px 30px;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      image: { type: String },
      circleText: { type: String },
      increasedOpacity: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.image = '';
    this.circleText = '';
    this.increasedOpacity = false;
  }

  render() {
    return html`
        <div class="circle ${this.increasedOpacity ? 'appearing' : ''}" style="background-image: url(${this.image})">
          <div class="text-container">
            <p>
              <lit-i18n>${this.circleText}</lit-i18n>
            </p>
          </div>
        </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    if (window.IntersectionObserver) {
      this.dispatchEvent(new CustomEvent('start-observing-intersection', {
        bubbles: true,
        composed: true,
        detail: { element: this, threshold: THRESHOLDS.FIRST, callback: this._handleIntersection.bind(this) },
      }));
    } else {
      this.increasedOpacity = true;
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (window.IntersectionObserver) {
      this._unobserveIntersection(THRESHOLDS.FIRST);
    } else {
      this.increasedOpacity = false;
    }
  }

  _unobserveIntersection(threshold) {
    this.dispatchEvent(new CustomEvent('stop-observing-intersection', {
      bubbles: true,
      composed: true,
      detail: { element: this, threshold: threshold },
    }));
  }

  _handleIntersection([{ isIntersecting }]) {
    this.increasedOpacity = isIntersecting;
    if (isIntersecting) {
      this._unobserveIntersection(THRESHOLDS.FIRST);
    }
  }
}
/* eslint-enable require-jsdoc */
customElements.define('smartup-community-bottom-circle', SmartupCommunityBottomCircle);
