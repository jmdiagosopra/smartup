import { LitElement, html, css } from 'lit-element';

import './smartup-community-bottom-circle';

class SmartupCommunityBottom extends LitElement {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      css `
        :host {
          display: block;
        }

        section {
          height: auto;
          padding: 10px;
          background: #CD6B79;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        #oval {
          width: 100%;
          height: 100%;
          border-radius: 0 0 100% 0;
          background-color: #fff;
          position: absolute;
          top: 0;
          left: 0;
        }

        .ramp-cover {
          width: 100vw;
          height: 100%;
          background-color: #fff;
          position: absolute;
          top: 0;
          left: 0;
        }

        .ramp-cover-big-display {
          transition: all 2s ease;
        }

        .ramp-cover-small-display {
          transition: all 2.5s ease;
        }

        .ramp-visible {
          top: 100%;
        }

        @media(min-width: 768px) {
          section {
            padding: 20px 10px;
            flex-direction: row;
          }

          .ramp-cover {
            top: 0;
            left: 0;
          }

          .ramp-visible {
            left: 100vw;
          }
        }
        `,
    ];
  }

  static get properties() {
    return {
      circlesData: { type: Array },
      gradientRampAppearing: { type: Boolean },
      THRESHOLDS: { type: Number },
      animationDelay: { type: Number },
    };
  }

  constructor() {
    super();
    this.circlesData = [];
    this.gradientRampAppearing = false;
    this.THRESHOLDS = window.innerHeight >= 720 ? 0.9 : 0.7;
    this.screenHeight = window.innerHeight >= 720 ? 'big' : 'small';
  }

  render() {
    return html`
      <section>
        <div id="oval"></div>
        <div class="ramp-cover ${this.screenHeight === 'big' ? 'ramp-cover-big-display' : 'ramp-cover-small-display'} ${this.gradientRampAppearing ? 'ramp-visible': ''}"></div>
        ${this._toPrintCircles()}
      </section>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    if (window.IntersectionObserver) {
      this.dispatchEvent(new CustomEvent('start-observing-intersection', {
        bubbles: true,
        composed: true,
        detail: { element: this, threshold: this.THRESHOLDS, callback: this._handleIntersection.bind(this) },
      }));
    } else {
      this.gradientRampAppearing = true;
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (window.IntersectionObserver) {
      this._unobserveIntersection(this.THRESHOLDS);
    } else {
      this.gradientRampAppearing = false;
    }
  }
  /* eslint-enable require-jsdoc */

  /**
   * @return {String} circles
   */
  _toPrintCircles() {
    return this.circlesData.map((circleData) => html`<smartup-community-bottom-circle .image="${circleData.image}" .circleText="${circleData.text}"></smartup-community-bottom-circle>` );
  }

  /**
   * Dispatch an event
   * @param {object} threshold
   */
  _unobserveIntersection(threshold) {
    this.dispatchEvent(new CustomEvent('stop-observing-intersection', {
      bubbles: true,
      composed: true,
      detail: { element: this, threshold: threshold },
    }));
  }

  /**
   * Handle animation with intersection Observer
   * @param {array} isIntersecting
   */
  _handleIntersection([{ isIntersecting }]) {
    this.gradientRampAppearing = isIntersecting;
    if (isIntersecting) {
      this._unobserveIntersection(this.THRESHOLDS);
    }
  }
}
customElements.define('smartup-community-bottom', SmartupCommunityBottom);
