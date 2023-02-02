import { LitElement, html, css } from 'lit-element';
// These are the shared styles needed by this element.
import { SharedStyles } from '../../../components/shared-styles.js';
import { get as i18n } from '../../../components/lit-i18n';
import { arrowDown } from '../../../components/my-icons.js';

import { pathData } from './smarter-path-data.js';

class SmarterPath extends LitElement {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
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
        transition: all 2s ease 1.5s;
      }
      .background-container::before {
        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.8));
      }

      .steps-container-background {
        opacity: 1;
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
        display: flex;
        flex-direction: column;
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

      .ninja-container {
        position: absolute;
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

      #container-ninja {
        top: 0%;
        left: 0px; 
        border: 8px solid var(--app-primary-color, #CC0033);
        transition: 1s;
      }
      
      .ninja-list {
        --dimension-padre: 150vw;;
        margin: 0px;
        padding: 0px;
        position: relative;
        width: var(--dimension-padre);
        height: var(--dimension-padre);
        border-radius: 50%;
        transition: 1s;
      }

      .single-card {
        list-style: none;
        --dimension-little: calc(var(--dimension-padre) * 0.03);
        --radious-little: calc(var(--dimension-little) / 2);
        width: var(--dimension-little);
        height: var(--dimension-little);
        background-color: var(--app-primary-color, #CC0033);
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border: 8px solid var(--app-primary-color, #CC0033);
      }

      .first {
        position: absolute;
        top: calc(-1% - var(--radious-little));
        left: calc(50% - var(--radious-little)); 
        transition: 1s;
      }

      .second {
        position: absolute;
        top: calc(6% - var(--radious-little));  
        left: calc(75% - var(--radious-little)); 
        transition: 1s;
      }

      .third {
        position: absolute;
        left: calc(93% - var(--radious-little));
        top: calc(24% - var(--radious-little));
        transition: 1s;
      }

      .fourth {
        position: absolute;
        top: calc(50% - var(--radious-little));  
        left: calc(100% - var(--radious-little)); 
        transition: 1s;
      }

      .fifth {
        position: absolute;
        top: calc(75% - var(--radious-little));  
        left: calc(93% - var(--radious-little)); 
        transition: 1s;
      }

      .sixth {
        position: absolute;
        top: calc(93% - var(--radious-little));  
        left: calc(75% - var(--radious-little)); 
        transition: 1s;
      }
      
      .seventh {
        position: absolute;
        top: calc(100% - var(--radious-little));  
        left: calc(49% - var(--radious-little)); 
        transition: 1s;
      }

      .eighth {
        position: absolute;
        top: calc(93% - var(--radious-little));  
        left: calc(24% - var(--radious-little)); 
        transition: 1s;
      }

      .nineth {
        position: absolute;
        top: calc(75% - var(--radious-little));  
        left: calc(6% - var(--radious-little)); 
        transition: 1s;
      }

      .tenth {
        position: absolute;
        top: calc(50% - var(--radious-little));  
        left: calc(-1% - var(--radious-little)); 
        transition: 1s;
      }

      .eleventh {
        position: absolute;
        top: calc(24% - var(--radious-little));  
        left: calc(6% - var(--radious-little)); 
        transition: 1s;
      }
      
      .last {
        position: absolute;
        top: calc(5.5% - var(--radious-little));  
        left: calc(25% - var(--radious-little)); 
        transition: 1s;
      }

      .single-card img {
        transition: 1s;
        width: 0px;
      }

      .focused-ninja {
        transition: 1s;
        --dimension-little: calc(var(--dimension-padre) * 0.08);
        width: var(--dimension-little);
        height: var(--dimension-little);
        background-color: white;
      }

      .focused-ninja img {
        transition: 1s;
        transition-delay: 0.5s;
        --dimension-little: calc(var(--dimension-padre) * 0.08);
        width: var(--dimension-little);
      }

      .slider-container {
        position: absolute;
        top: 320px;
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
        position: absolute;
        bottom: 0px;
        left: 50%;
        transform: translate(-50%);
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
      num: { type: Number },
      degrees: { type: Number },
      initialClass: { type: Array },
      position: { type: Array },
    };
  }

  constructor() {
    super();
    this.animated = false;
    this.stepSelected = 0;
    this.initialClass = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'nineth', 'tenth', 'eleventh', 'last'];
    this.position = [0,1,2,3,4,5,6,7,8,9,10,11];
    this.pathSteps = [...pathData, ...pathData, ...pathData];
    this.num = 0;
    this.degrees = 30;
  }

  render() {
    return html`
    <section>
      <div class="container">
        <div class="background-container ${this.animated ? 'steps-container-background' : ''}"></div>
        <ul class="ninja-container">
          <div class="ninja-list" id="container-ninja">
            ${this.pathSteps.map((x, i) => html`
            <li class="ninja-list single-card" id="ninja-${i}">
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
        <div class="button">
          <a href="mailto:seleccion@soprasteria.com?subject=SmartUp+Xperience" class="primary-button big" aria-label="${i18n('WANT_TO_BE_SMARTER_BTN_A11Y', true)}">
            <lit-i18n raw>WANT_TO_BE_SMARTER_BTN</lit-i18n>
          </a>
        </div>
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
    this._getPosition();
  }

  _getPosition() {
    const ninja = this.shadowRoot.querySelectorAll('.single-card');
    for(let i = 0; i < ninja.length; i++){
      ninja[i].classList.add(this.initialClass[i]);
      ninja[i].setAttribute('data-index', this.position[i]);
      if(this.position[i] === 0){
        ninja[i].classList.add('focused-ninja');
      } else {
        ninja[i].classList.remove('focused-ninja');
      }
    }
  }

  _rotate(arrow) {
    let direction = arrow === "L" ? this.num + this.degrees : this.num - this.degrees;
    this.num = (direction)%360;
    let numSon = - this.num;
    let father = this.shadowRoot.querySelector(".ninja-list");
    father.style.transform = "rotate("+this.num+"deg)";
    
    const ninja = this.shadowRoot.querySelectorAll(".single-card");
    for(let i = 0; i < ninja.length;  i++){
      ninja[i].style.transform = "rotate("+numSon+"deg)";
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
    }, 1000);
  }

  _clickedArrow(way){
    this.shadowRoot.getElementById("next").disabled = true;
    this.shadowRoot.getElementById("prev").disabled = true;

    if(way === 'left'){
      let element = this.position.shift();
      this.position.push(element);
      this._switchText('left');
      this._rotate("L");
    } 
    else if(way === 'right') {
      let element = this.position.pop();
      this.position.unshift(element);
      this._switchText('right');
      this._rotate("R");
    }

    setTimeout(() => {

      this.shadowRoot.getElementById("next").disabled = false;
      this.shadowRoot.getElementById("prev").disabled = false;
    }, 1000); 
    
    this._setFocus();
  } 

  _setFocus(){
    const ninja = this.shadowRoot.querySelectorAll('.single-card');
    for(let i = 0; i < ninja.length;  i++){
      // let att = ninja[i].getAttribute('data-index');
      // att = this.position[i];
      ninja[i].setAttribute('data-index', this.position[i]);
      if(this.position[i] === 0){
        ninja[i].classList.add('focused-ninja');
      } else {
        ninja[i].classList.remove('focused-ninja');
      }
    }
  }
}
customElements.define('smarter-path', SmarterPath);
