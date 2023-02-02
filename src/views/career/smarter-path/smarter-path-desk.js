import { LitElement, html, css } from 'lit-element';
// These are the shared styles needed by this element.
import { SharedStyles } from '../../../components/shared-styles.js';
import { get as i18n } from '../../../components/lit-i18n';
import { arrowDown } from '../../../components/my-icons.js';

import { pathData } from './smarter-path-data.js';

class SmarterPathDesk extends LitElement {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
      :host{
        
      }

      section {
        overflow: hidden;
        height: 700px;
        display: flex;
        flex-direction: column;
      }
      .background-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        background-image: url('../../../../assets/images/career/road.jpg');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        background-blend-mode: lighten;
        transition: all 2s ease 2.2s;
      }

      .steps-container-background {
        opacity: 0.3;
      }

      .container:before {
        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7));
      }

      .container {
        height: 100vh;
        padding: 10px;
        position: relative;
        overflow: hidden;
        margin: 0;
      }

      .cover {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: #fff;
        transition: all 2s ease;
      }

      .cover-animation {
        left: 100vw;
      }

      .ninja-container{
        position: absolute;
        border: 10px solid var(--app-primary-color, #CC0033);
        height: 150vh;
        width: 150vw;
        border-radius: 50%;
        top: 150px;
        left: -10px;
        transform: translateX(-25vw);
        padding: 0px;
        margin: 30px 0px 0px;
        display: flex;
        justify-content: center;
      }
      
      .ninja-list-container {
        position: relative;
        width: 100%;
        height: 100%;
      }

      .single-card {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        background-color: var(--app-primary-color, #CC0033);
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border: 10px solid var(--app-primary-color, #CC0033);
        transform: translateX(-50%);
      }

      .single-card img {
        transition: 2s;
        width: 0px;
      }

      .focused-ninja {
        transition: 2s;
        width: 250px;
        transform: translate(-50%, 25%);
        height: 250px;
        border-radius: 250px;
        background-color: white;
      }

      .focused-ninja img {
        transition: 2s;
        width: 200px;
      }

      .slider-container {
        position: absolute;
        top: 300px;
        left: 50%;
        transform: translateX(-50%);
        width: 700px;
        height: 200px;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-flow: row nowrap;
        margin: 0;
      }

      .slider-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        position: relative;
        height: 200px;
        width: 550px;
      }
      
      .text-animation {
        animation: fadeIn 2s ease;
      }

      @keyframes fadeIn {
        from {opacity: 0;}
        to {opacity: 1;}
      }

      .slider-container h3 {
        color: var(--app-primary-color, #CC0033);
        font-size: 32px;
        text-align: center;
        margin: 0;
      }
      
      .slider-container p {
        padding: 0 10px;
        font-size: 16px;
        text-align: center;
        margin: 0;
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

      .button {
        z-index: 2;
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
      `,
    ];
  }

  static get properties() {
    return {
      animated: { type: Boolean },
      pathSteps: { type: Array },
      stepSelected: { type: Number },
      angle: { type: Array },
    };
  }

  constructor() {
    super();
    this.animated = false;
    this.pathSteps = [...pathData, ...pathData];
    this.stepSelected = 0;
    this.angle = [4.712, 5.498, 6.284, 0.785, 1.571, 2.356, 3.142, 3.927];
  }

  render() {
    return html`
    <section>
      <div class="container">
        <div class="background-container ${this.animated ? 'steps-container-background' : ''}"></div>
        <ul class="ninja-container">
          <div class="ninja-list-container">
            ${this.pathSteps.map((x, i) => html`
            <li class="single-card ninja-${i}" id="ninja-${i}" style="left:; top:;">
                <img class="ninja-image" src=${x.logoUrl} alt=${x.title}>
            </li>
            `)}
          </div>
        </ul>
        <div class="slider-container">
          <button id="prev" aria-label="${i18n('PREV_REVIEW', true)}" class="arrow-button prev" @click="${() => this._clickedArrow('left')}">
            <div class="rotate-left">${arrowDown}</div>
          </button>
          <div class="slider-content">
            <h3 tabindex="0">${this.pathSteps[this.stepSelected].title}</h3>
            <p tabindex="0">${this.pathSteps[this.stepSelected].text}</p>
          </div>
          <button id="next" aria-label="${i18n('NEXT_REVIEW', true)}" class="arrow-button next" @click="${() => this._clickedArrow('right')}">
            <div class="rotate-right">${arrowDown}</div>
          </button>
        </div>
        <div class="cover ${this.animated ? 'cover-animation' : ''}"></div>
      </div>
      <div class="button">
        <a href="mailto:seleccion@soprasteria.com?subject=SmartUp+Xperience" class="primary-button big" aria-label="${i18n('WANT_TO_BE_SMARTER_BTN_A11Y', true)}">
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

  firstUpdated(){
    this._getPosition(this.angle);
  }

  _getPosition(angle) {
    const centerX = 1400;
    const centerY = 600;
    const radius = 800;
    const principalAngle = 4.712;
    let elementX = centerX + radius * Math.cos(angle);
    let elementY = centerY + radius * Math.sin(angle);
    
    let ninja = this.shadowRoot.querySelectorAll('li');

    for (let i=0; i<ninja.length; i++){
      elementX = centerX + radius * Math.cos(angle[i]);
      elementY = centerY + radius * Math.sin(angle[i]) -20;
      ninja[i].style.left = elementX + "px";
      ninja[i].style.top = elementY + "px";
      ninja[i].style.marginLeft = "0%";
      ninja[i].style.transition = '2s';
      
      if(angle[i] === 5.498) {
        ninja[i].style.marginLeft = "70%";
        ninja[i].style.left = "0px";
      } else if(angle[i] === 3.927) {
        ninja[i].style.marginLeft = "30%";
        ninja[i].style.left = "0px";
      }

      if(angle[i] === principalAngle) {
        ninja[i].classList.add('focused-ninja');
        ninja[i].style.marginLeft = "50%";
        ninja[i].style.left = "0px";
      } else {
        ninja[i].classList.remove('focused-ninja');
        ninja[i].style.transition = '2s';
      }

      if(angle[i] === 6.284 ) {
        elementX = centerX + radius * Math.cos(angle[i]) * (5);
        elementY = centerY + radius * Math.sin(angle[i]) + 600;
        ninja[i].style.left = elementX + "px";
        ninja[i].style.top = elementY + "px";
      } else if (angle[i] === 3.142 ) {
        elementX = centerX + radius * Math.cos(angle[i]) - 600;
        elementY = centerY + radius * Math.sin(angle[i]) - 400;
        ninja[i].style.left = elementX + "px";
        ninja[i].style.top = elementY + "px";
      }

    }
  }

  _switchText(way){
    const slider = this.shadowRoot.querySelector('.slider-content');
    slider.classList.add('text-animation');

    if (way === 'left' && this.stepSelected > 0) {
      this.stepSelected--;
    } else if (way === 'left' && this.stepSelected === 0) this.stepSelected = (this.pathSteps.length - 1);
    
    if (way === 'right' && this.stepSelected < (this.pathSteps.length - 1)) {
      this.stepSelected++;
    } else if (way === 'right' && this.stepSelected === this.pathSteps.length - 1) this.stepSelected = 0;

    setTimeout(() => {
      slider.classList.remove('text-animation');
    }, 500);
  }

  _clickedArrow(way){
    this.shadowRoot.getElementById("next").disabled = true;
    this.shadowRoot.getElementById("prev").disabled = true;

    if(way === 'left'){
      let element = this.angle.shift();
      this.angle.push(element);
      this._switchText('left');
    } 
    else if(way === 'right') {
      let element = this.angle.pop();
      this.angle.unshift(element);
      this._switchText('right');
    }

    setTimeout(() => {

      this.shadowRoot.getElementById("next").disabled = false;
      this.shadowRoot.getElementById("prev").disabled = false;
    }, 2000); 
    
    this._getPosition(this.angle);
  } 
}
customElements.define('smarter-path-desk', SmarterPathDesk);
