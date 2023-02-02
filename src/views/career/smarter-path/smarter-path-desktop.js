import { LitElement, html, css } from 'lit-element';
import { get as i18n } from '../../../components/lit-i18n';
// These are the shared styles needed by this element.
import { SharedStyles } from '../../../components/shared-styles.js';

import { arrowDown } from '../../../components/my-icons.js';
import { pathData } from './smarter-path-data.js';

class SmarterPathDesktop extends LitElement {
/* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
        :host{
          display: block;
          position: relative;
        }

        .steps-container {
          position: relative;
          height: 75vh;
          overflow: hidden;
        }

        .background-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.9;
          background-image: url('./assets/images/career/road.jpg');
          background-size: cover;
          background-position-x: center;
          background-position-y: 31%;
          background-blend-mode: lighten;
          transition: all 1s ease 1.4s;
        }

        .steps-container-background {
          opacity: 1;
        }

        .steps-container:before {
          content: "";
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.8));
        }

        .ring {
          position: absolute;
          width: 150vw;
          height: 150vw;
          top: 140px;
          left: -26.2vw;
          border: 10px solid var(--app-primary-color, #CC0033);
          border-radius: 1000vw;
        }
        
        .cover {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: #fff;
          transition: all 1s ease;
        }

        .cover-animation {
          left: 100vw;
        }

        .ball-big {
          position: absolute;
          top: -150px;
          left: 50%;
          transform: translateX(-50%);
          width: 280px;
          height: 280px;
          border-radius: 280px;
          border: 10px solid var(--app-primary-color, #CC0033);
          background-color: #fff;
          overflow: hidden;
          clip-path: circle(0% at 50% 50%);
          transition: all 0.5s ease 1.2s;
        }

        .big-ball-entrance {
          clip-path: circle(50% at 50% 50%);
        }
        
        .ball-small-1, .ball-small-2 {
          position: absolute;
          margin-top: 20px;
          width: 70px;
          height: 70px;
          border-radius: 70px;
          background-color: var(--app-primary-color, #CC0033);
          clip-path: circle(0% at 50% 50%);
          transition: all 0.5s ease 0.8s;
        }
        
        .small-balls-entrance {
          clip-path: circle(50% at 50% 50%);
        }

        .ball-small-1 {
          left: 25%;
        }
        
        .ball-small-2 {
          right: 25%;
        }

        .ninja-image {
          width: 100%;
          margin: 0;
        }

        .slider {
          position: absolute;
          top: 350px;
          left: 50%;
          transform: translateX(-50%);
          width: 550px;
          height: 200px;
          overflow: hidden;
        }

        .slider-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          height: 200px;
          width: 100%;
        }
        
        .slider-text {
          width: 80%;
          opacity: 1;
          transition: all 0.2s ease;
        }

        .slider h3 {
          color: var(--app-primary-color, #CC0033);
          font-size: 32px;
          text-align: center;
        }
        
        .slider p {
          padding: 0 10px;
          font-size: 16px;
          text-align: center;
        }
        
        .slider img {
          width: 40px;
        }

        .arrow-button {
          cursor: pointer;
          background: transparent;
          border: 0;
          width: 27px;
          height: 15px;
          padding: 0;
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

        @keyframes fadeIn {
          from {opacity: 0;}
          to {opacity: 1;}
        }
        
        @keyframes slideFromRight {
          from {opacity: 0; margin-left: 200px;}
          to {opacity: 1; margin-left: 0;}
        }
        
        @keyframes slideFromLeft {
          from {opacity: 0; margin-left: -200px;}
          to {opacity: 1; margin-left: 0;}
        }

        .text-animation {
          animation: fadeIn 0.5s ease;
        }

        .ninja-animation-from-left {
          animation: slideFromLeft 0.5s ease;
        }
        
        .ninja-animation-from-right {
          animation: slideFromRight 0.5s ease;
        }

        @media screen and (max-height: 700px) {
          .steps-container {
            padding-bottom: 150px;
          }
        }
        
        @media screen and (min-width: 980px) {
          .ball-small-1, .ball-small-2 {
            margin-top: 25px;
          }

          .ball-small-1 {
            left: 28%;
          }
          
          .ball-small-2 {
            right: 28%;
          }
        }
        
        @media screen and (min-width: 1300px) {
          .ball-small-1, .ball-small-2 {
            margin-top: 32px;
          }

          .ball-small-1 {
            left: 30%;
          }
          
          .ball-small-2 {
            right: 30%;
          }
        }
        
        @media screen and (min-width: 1580px) {
          .ball-small-1, .ball-small-2 {
            margin-top: 0.6vw;
          }

          .ball-small-1 {
            left: 35%;
          }
          
          .ball-small-2 {
            right: 35%;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      animated: { type: Boolean },
      pathSteps: { type: Array },
      stepSelected: { type: Number },
    };
  }

  constructor() {
    super();
    this.animated = false;
    this.pathSteps = pathData;
    this.stepSelected = 0;
  }

  render() {
    return html`
      <section>
        <div class="background-container ${this.animated ? 'steps-container-background' : ''}"></div>
        <div class="steps-container">
          <div class="ring">
            <div class="ball-small-1 ${this.animated ? 'small-balls-entrance' : ''}"></div>
            <div class="ball-big ${this.animated ? 'big-ball-entrance' : ''}">
              <img class="ninja-image" src=${this.pathSteps[this.stepSelected].logoUrl} alt=${this.pathSteps[this.stepSelected].title}>
            </div>
            <div class="ball-small-2 ${this.animated ? 'small-balls-entrance' : ''}"></div>
          </div>
          <div class="slider">
            <div class="slider-content">
              <button id="prev" aria-label="${i18n('PREV_BUTTON')}" class="arrow-button prev" @click="${() => this._handleArrowClick('left')}">${arrowDown}</button>
              <div class="slider-text">
                <h3 tabindex="0">${this.pathSteps[this.stepSelected].title}</h3>
                <p tabindex="0">${this.pathSteps[this.stepSelected].text}</p>
              </div>
              <button id="next" aria-label="${i18n('NEXT_BUTTON')}" class="arrow-button next" @click="${() => this._handleArrowClick('right')}">${arrowDown}</button>
            </div>
          </div>
          <div class="cover ${this.animated ? 'cover-animation' : ''}"></div>
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
   * Handle arrows clicks
   * @param {array} arrow
   */
  _handleArrowClick(arrow) {
    const slider = this.shadowRoot.querySelector('.slider-text');
    const ninja = this.shadowRoot.querySelector('.ninja-image');
    slider.classList.add('text-animation');
    arrow === 'left' ? ninja.classList.add('ninja-animation-from-left') : ninja.classList.add('ninja-animation-from-right');

    if (arrow === 'left' && this.stepSelected > 0) {
      this.stepSelected--;
    } else if (arrow === 'left' && this.stepSelected === 0) this.stepSelected = (this.pathSteps.length - 1);
    if (arrow === 'right' && this.stepSelected < (this.pathSteps.length - 1)) {
      this.stepSelected++;
    } else if (arrow === 'right' && this.stepSelected === 3) this.stepSelected = 0;

    setTimeout(() => {
      slider.classList.remove('text-animation');
      ninja.classList.remove('ninja-animation-from-right', 'ninja-animation-from-left');
    }, 500);
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
customElements.define('smarter-path-desktop', SmarterPathDesktop);
