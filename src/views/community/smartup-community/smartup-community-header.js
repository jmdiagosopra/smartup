import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from '../../../components/shared-styles.js';

let wolf;

class SmartupCommunityHeader extends LitElement {
/* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css `
        #red-gradient {
          width: 100%;
          height: 100%;
          position: absolute;
          background: linear-gradient(rgba(203, 71, 71, 0.7), rgba(0, 0, 0, 0.5));
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          z-index: 1;
        }

        #smartup-community-section {
          height: 254px;
          overflow: hidden;
          position: relative;
        }

        .background-image-parallax {
          background-image: url('/assets/images/community/smartup-community/wolf.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: absolute;
          width: 100vw;
          height: 140vh;
          bottom: 0;
        }

        #smartup-community-header {
          color: #fff;
          font-size: 16px;
          text-align: center;
          padding-top: 40px;
          width: 82vw;
          margin: 12px auto;
        }

        .smartup-experience-circles-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: absolute;
          bottom: -18px;
        }

        .smartup-community-circle {
          display: block;
          background-color: #fff;
          width: 20px;
          height: 20px;
          border-radius: 200px;
          margin-bottom: 0px;
          opacity: 0;
        }

        #circle-0 {
          width: 3px;
          height: 3px;
          transition: all 1s ease;
        }

        #circle-1 {
          width: 7px;
          height: 7px;
          transition: all 1s ease 0.2s;
        }

        #circle-2 {
          width: 13px;
          height: 13px;
          transition: all 1s ease 0.4s;
        }

        #circle-3 {
          width: 29px;
          height: 29px;
          transition: all 1s ease 0.6s;
        }

        .animated {
          opacity: 1;
          margin-bottom: 10px;
        }

        @media screen and (min-width: 768px) {
          #smartup-community-section {
            background-size: 200%;
            height: 427px;
          }

          #smartup-community-header {
            width: 724px;
            height: 132px;
            font-size: 23px;
            padding-top: 100px;
          }

          .smartup-experience-circles-container {
            margin-bottom: -50px;
          }

          .smartup-community-circle {
            margin-bottom: 0px;
          }

          #circle-0 {
            width: 7px;
            height: 7px;
          }

          #circle-1 {
            width: 22px;
            height: 22px;
          }

          #circle-2 {
            width: 43px;
            height: 43px;
          }

          #circle-3 {
            width: 122px;
            height: 122px;
          }

          .animated {
            margin-bottom: 14px;
          }
        }

        @media screen and (min-width: 1200px) {
          #smartup-community-section {
            background-size: 120%;
          }
        }
        
        @media screen and (max-width: 360px) {
          #smartup-community-header {
            padding-top: 20px;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      animated: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.animated = false;
  }

  render() {
    return html`
      <section>
        <div id='smartup-community-section'>
          <div id='red-gradient'>
            <p id='smartup-community-header' tabindex="0">
              <lit-i18n>SMARTUP_COMMUNITY_HEADER</lit-i18n>
            </p>
            <div class='smartup-experience-circles-container'>
              ${this._generateCircles}
            </div>
          </div>
          <div class="background-image-parallax"></div>
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
        detail: { element: this, threshold: 0.7, callback: this._handleIntersection.bind(this) },
      }));

      this.dispatchEvent(new CustomEvent('start-observing-intersection', {
        bubbles: true,
        composed: true,
        detail: { element: this, threshold: 0, callback: this._handleParallaxIntersection.bind(this) },
      }));
    } else {
      this.animated = true;
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (window.IntersectionObserver) {
      this.dispatchEvent(new CustomEvent('stop-observing-intersection', {
        bubles: true,
        composed: true,
        detail: { element: this, threshold: 1 },
      }));

      this.dispatchEvent(new CustomEvent('start-observing-intersection', {
        bubbles: true,
        composed: true,
        detail: { element: this, threshold: 0, callback: this._handleParallaxIntersection.bind(this) },
      }));
    }
  }
  /* eslint-enable require-jsdoc */

  /**
   * Returns 4 empty divs that will become white circles
   */
  get _generateCircles() {
    return new Array(4).fill('').map((iteration, index) => html`<div class='smartup-community-circle ${this.animated ? 'animated' : ''}' id='circle-${index}'></div>`);
  }

  /**
   * Handle animation with intersection Observer
   * @param {array} isIntersecting
   */
  _handleIntersection([{ isIntersecting }]) {
    this.animated = isIntersecting;
  }

  /**
   * Handle animation with intersection Observer
   * @param {array} isIntersecting
   */
  _handleParallaxIntersection([{ isIntersecting }]) {
    wolf = this.shadowRoot.querySelector('.background-image-parallax');
    if(isIntersecting) {
      window.addEventListener('scroll', this._parallaxAnimation, false);
    } else {
      window.removeEventListener('scroll', this._parallaxAnimation, false);
    }
  }

  /**
   * Parallax animation
   */
  _parallaxAnimation() {
    // eslint-disable-next-line require-jsdoc
    function animate() {
      const scrolltop = window.pageYOffset;
      wolf.style.top = 30 - scrolltop * 0.5 + 'px';
    }
    /* eslint-enable require-jsdoc */
    requestAnimationFrame(animate);
  }
}
customElements.define('smartup-community-header', SmartupCommunityHeader);
