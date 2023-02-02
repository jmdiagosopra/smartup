import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from '../../../components/shared-styles';

import { smartUpIcon, lightIcon, moonIcon } from '../../../components/my-icons';

/**
  * Smartup Animation component
  */
class SmartUpAnimation extends LitElement {
/* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          --app-smartup-animation-red: rgb(189, 63, 73);
          --app-smartup-animation-green: rgb(119, 189, 62);
          --app-smartup-animation-blue: rgb(35, 190, 183);
          --app-smartup-animation-purple: rgb(195, 77, 211);
          --app-smartup-animation-yellow: rgb(170, 161, 41);

          --app-smartup-animation-green-light: rgb(98, 151, 55);
          --app-smartup-animation-blue-light: rgb(53, 161, 156);
          --app-smartup-animation-yellow-light: rgb(149, 141, 44);
        }
        .dark {
          --animation-background: linear-gradient(217deg, rgba(219, 146, 66, 0.8),rgba(255, 0, 0, 0) 70.71%), linear-gradient(127deg, rgba(81, 123, 81, 0.8), rgba(0, 255, 0, 0) 70.71%), linear-gradient(336deg, rgba(50, 203, 240, 0.8), rgba(0, 0, 255, 0) 70.71%);
          --animation-box-background: rgba(0,0,0,.6);
          --animation-green: var(--app-smartup-animation-green);
          --animation-blue: var(--app-smartup-animation-blue);
          --animation-yellow: var(--app-smartup-animation-yellow);
          --animation-title: white;

          --animation-switch-back-hard: rgba(18, 18, 18, .8);
          --animation-switch-back-soft: rgba(18, 18, 18, .6);
          --animation-switch-moon-color: white;
          --animation-switch-sun-color: rgba(255,255,255, .6);

          --animation-blend-mode: unset;
        }

        .light {
          --animation-background: rgba(255,255,255,.3);
          --animation-box-background: rgba(255,255,255,.6);
          --animation-green: var(--app-smartup-animation-green-light);
          --animation-blue: var(--app-smartup-animation-blue-light);
          --animation-yellow: var(--app-smartup-animation-yellow-light);
          --animation-title: '#2b2b2b';

          --animation-switch-back-hard: rgba(18, 18, 18, .6);
          --animation-switch-back-soft: rgba(18, 18, 18, .8);
          --animation-switch-moon-color: rgba(255,255,255, .6);
          --animation-switch-sun-color: white;

          --animation-blend-mode: multiply;
        }

        .container {
          background-image: url('./assets/images/main/the-experience/background-mobile.jpg');
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-position: center; 
          background-size: cover;
          background-attachment: local;
          height: 400px;
        }

        .filter {
          position: absolute;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 400px;
          background: var(--animation-background);
          transition: background 200ms ease-in-out;
        }

        .icon {
          margin: 0px;
          mix-blend-mode: var(--animation-blend-mode);
          fill: black;
          stroke: black;
        }

        .animation {
          font-size: 30px;
          line-height: 40px;
          color: #000;
          display: flex;
          flex-direction: column;
          text-align: center;
          width: 100%;   
        }

        .animation p {
          height: 50px;
          text-align: center;
          white-space: nowrap;
          margin: 0;
          padding-top: 20px;
          transition: all 200ms ease-in-out;
        }

        .animation b {
          overflow: hidden;
          position: relative;
          height: 40px;
          top: 0px;
        }

        .slide {
          display: flex;
          flex-direction: column;
          position: relative;
          white-space: nowrap;
          top: 0;
          left: 0;
        }

        .smart {
          font-weight: 600;
          color: var(--animation-title);
        }

        .box {
          display: flex;
          width: 95%;
          justify-content: center;
          flex-direction: column;
          background-color: var(--animation-box-background);
          align-items: center;
          border-radius: 100px;
          border-top-left-radius: 0;
          border-bottom-right-radius: 0;
          padding-bottom: 30px;
          padding-top: 30px;
          transition: background-color 200ms ease-in-out;
        }

        .box[paused] .slide,
        .box[paused] .icon {
          animation: none !important;
        }

        .red {
          color: var(--app-smartup-animation-red, rgb(189, 63, 73));
        }

        .green {
          color: var(--animation-green);
        }

        .blue {
          color: var(--animation-blue);
        }

        .purple {
          color: var(--app-smartup-animation-purple, rgb(195, 77, 211));
        }

        .yellow {
          color: var(--animation-yellow);
        }

        .switch-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 70px;
          height: 30px;
          border-right: 100%;
          display: flex;
        }

        .switch {
          width: 50%;
          height: 30px;
          display: flex;
          justify-content: center;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
        }

        .switch-sun {
          border-top-left-radius: 50%;
          border-bottom-left-radius: 50%;
          background-color: var(--animation-switch-back-soft);
        }

        .switch-moon {
          border-top-right-radius: 50%;
          border-bottom-right-radius: 50%;
          background-color: var(--animation-switch-back-hard);
        }

        .moon {
          fill: var(--animation-switch-moon-color);
        }

        .sun {
          fill: var(--animation-switch-sun-color);
        }

        @media screen and (min-width: 500px) {
          .container {
            background-image: url('./assets/images/main/the-experience/background.jpg');
          }
        }

        @media screen and (min-width: 600px) {
          .box {
            width: auto;
          }

          .animation b {
            height: 50px;
            top: 10px;
          }

          .animation {
            font-size: 40px;
            line-height: 50px;
          }

          .icon {
            margin: 40px;
          }

          .box {
            flex-direction: unset;
            padding: 20px;
          }

          .animation p {
            margin-right: 0.3em;
            margin-top: 0;
            margin-bottom: 0;
            padding: 0;
          }
        }

        @media screen and (min-width: 768px) {
          .filter {
            flex-direction: unset;
          }

          .box {
            padding-left: 70px;
          }

          .animation {
            flex-direction: unset;
            text-align: left;
            width: auto;
          }

          .animation p {
            padding: 25px;
            padding-right: 10px;
          }

          .animation b {
            top: 25px;
          }

          .icon {
            margin: 0px;
          }
        }
        
        @media screen and (min-width: 1500px) {
          .container {
            height: 500px;
          }

          .filter {
            height: 500px;
          }
        }
      `]
    ;
  }

  static get properties() {
    return {
      wordList: { type: Array },
      animated: { type: Boolean },
      mode: { type: String },
    };
  }

  constructor() {
    super();
    this.colorList = ['red', 'green', 'blue', 'purple', 'yellow'];
    this.colorCount = 0;
    this.wordList = [];
    this.mode = 'dark';
  }

  render() {
    return html`
    <style>
      p {
        color:red;
      }
    </style>
      <div class="container ${this.mode}">
        <div class="filter">
          <div class="switch-btn">
            <button class="switch switch-sun" @click="${() => this.mode = 'light'}">${lightIcon}</button>
            <button class="switch switch-moon" @click="${() => this.mode = 'dark'}">${moonIcon}</button>
          </div>
          <div class="box" ?paused="${!this.animated}">
            ${smartUpIcon}
            <div class="animation">
              <p class="smart">SmartUp es</p>
              <b>
                <div class="slide">
                  ${(this.wordList) ? this.wordList.map((x, i) => html `
                    <span class="${this.getColorClass(i)}">${x}</span>
                  `) : []}
                </div>
              </b>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    this._cssGenerator();

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) this._resetAnimationOnResize();
  }
  /* eslint-enable require-jsdoc */

  /**
    * Dinamic css generator. Animation & Keyframes
    */
  _cssGenerator() {
    const svgStyle = '.cls-1,.cls-2,.cls-3,.cls-4,.cls-5{fill:none;}.cls-1,.cls-2,.cls-3,.cls-4,.cls-5,.cls-6{stroke-miterlimit:10;}.cls-1,.cls-2{stroke-width:27px;}.cls-2{stroke-linecap:round;}.cls-3{stroke-width:35px;}.cls-4{stroke-width:26px;}.cls-5{stroke-width:18px;} ';
    const colorRef = 'var(--app-smartup-animation-';
    const percent = Math.round(100 / (this.wordList ? this.wordList.length : []));

    let slideKeyframe = '@keyframes move {0%  { top: 0px; } ';
    let slideKeyMedia = '@media screen and (min-width: 600px) { ' + slideKeyframe;
    let svgKeyframe = '@keyframes anim { ';
    let keyColors = '';
    let count = 0;

    const setSvgKey = (num, value) => {
      return num + '% { stroke: ' + value + '); fill: ' + value + ');} ';
    };

    const setAnimKey = (i, value) => {
      return (i * percent) + '% {top: -' + value + 'px; } ';
    };

    const setAnimation = (ref, name, seconds, delay) => {
      const addDelay = (delay) ? ' animation-delay: 1s; ' : '';
      this.shadowRoot.querySelector(ref).setAttribute('style', 'animation: ' + name + ' ' + seconds + 's; animation-iteration-count: infinite; ' + addDelay);
    };
    this.wordList = this.wordList || [];
    this.wordList.forEach((x, i) => {
      if (i > 0) {
        slideKeyframe = slideKeyframe.concat(setAnimKey(i, (i * 4) * 10));
        slideKeyMedia = slideKeyMedia.concat(setAnimKey(i, i * 50));
        keyColors = keyColors.concat(setSvgKey(i * percent, colorRef + this.colorList[count]));
      }

      if (i === this.wordList.length - 1) svgKeyframe = this._svgKeyframeFinal(count, keyColors, colorRef, svgKeyframe, setSvgKey);

      count = this._resetColorIndex(i === 0, count);
    });

    this._setAnimationsAndKeyframes(svgKeyframe, svgStyle, slideKeyframe, slideKeyMedia, setAnimation);
  }

  /**
    * Return the class name of the word (color name)
    * @param {Number} i current index
    * @return {String} color name
    */
  getColorClass(i) {
    if (this.colorCount === this.colorList.length - 1 || i === 0) {
      this.colorCount = 0;
    } else {
      this.colorCount++;
    }
    return (i === this.wordList.length -1 && this._checkLastColor(this.colorCount)) ? this.colorList[2] : this.colorList[this.colorCount];
  }

  /**
    * Check if last and first color of the list are the same
    * @param {Number} count last color of the list
    * @return {Boolean} Last and first color are the same
    */
  _checkLastColor(count) {
    return this.colorList[count] === this.colorList[0];
  }

  /**
  * Return next index position of colorList array
  * @param {Boolean} bool first wordList iteration
  * @param {Number} count current index
  * @return {Number} new index
  */
  _resetColorIndex(bool, count) {
    return (bool || count === this.colorList.length - 1) ? 0 : count + 1;
  }

  /**
    * Svg Keyframe generator
    * @param {Number} count current index of colorList
    * @param {String} keyColors Svg keyframes
    * @param {String} colorRef Color reference
    * @param {String} svgKeyframe Svg keyframe initial string
    * @param {Function} setSvgKey Keyframe attributes generator
    * @return {String} Final svg keyframe
    */
  _svgKeyframeFinal(count, keyColors, colorRef, svgKeyframe, setSvgKey) {
    count = this._resetColorIndex(false, count);
    const lastColor = colorRef + (this._checkLastColor(count) ? this.colorList[2] : this.colorList[count]);
    return svgKeyframe.concat(setSvgKey(0, lastColor) + keyColors + ' ' + setSvgKey(100, lastColor) + '} ');
  }

  /**
    * Set animations and keyframes via innerHTML
    * @param {String} svgKeyframe Svg keyframe
    * @param {String} svgStyle Svg animation
    * @param {String} slideKeyframe Wordlist keyframes
    * @param {String} slideKeyMedia Wordlist keyframes on media query (600px)
    * @param {Function} setAnimation Animation setter via querySelector()
    */
  _setAnimationsAndKeyframes(svgKeyframe, svgStyle, slideKeyframe, slideKeyMedia, setAnimation) {
    setAnimation('.slide', 'move', this.wordList.length, true);
    setAnimation('.icon', 'anim', this.wordList.length, false);
    this.shadowRoot.querySelector('style').innerHTML = svgKeyframe + svgStyle + slideKeyframe + '} ' + slideKeyMedia + '}';
  }

  /**
    * Reset animation onresize. Safari only
    */
  _resetAnimationOnResize() {
    this.isDesktop = window.innerWidth > 600;
    window.addEventListener('resize', this._resetAnimations.bind(this));
  }

  /**
    * Reset animations
    */
  _resetAnimations() {
    const slide = this.shadowRoot.querySelector('.slide');
    const icon = this.shadowRoot.querySelector('.icon');

    if (window.innerWidth > 600 !== this.isDesktop) {
      slide.setAttribute('style', 'animation: none');
      icon.setAttribute('style', 'animation: none;');

      setTimeout(() => {
        slide.setAttribute('style', 'animation: move ' + this.wordList.length + 's; animation-iteration-count: infinite; animation-delay: 1s;');
        icon.setAttribute('style', 'animation: anim ' + this.wordList.length + 's; animation-iteration-count: infinite;');
      });

      this.isDesktop = window.innerWidth > 600;
    }
  }
}

customElements.define('smartup-animation', SmartUpAnimation);
