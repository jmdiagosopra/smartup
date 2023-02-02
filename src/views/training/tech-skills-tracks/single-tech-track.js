import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from '../../../components/shared-styles.js';

const THRESHOLDS = {
  FIRST: 0.5,
  SECOND: 0.8,
};

class SingleTechTrack extends LitElement {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          display: block;
        }

        section {
          position: relative;
        }

        section h2 {
          font-size: 18px;
          opacity: 0;
        }

        .content {
          opacity: 0;
        }

        .index-1 {
          height: 440px;
        }

        .index-2 {
          height: 700px;
          color: #fff;
        }

        .index-3 {
          height: 610px;
        }
        
        section img {
          opacity: 0;
          position: absolute;
          right: 0;
          bottom: -80px;
          width: 220px;
          height: 227px;
          z-index: 1;
        }

        .index-3 img {
          bottom: 0;
        }
        
        .text-container {
          font-size: 16px;
          margin: 20px 26px 10px 26px;
        } 

        .text-container h2 {
          text-align: left;
        } 

        .right-side h2 {
          text-align: right;
        } 

        .right-side .skills-container {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .clear {
          clear: both;
        }

        .skills-container p {
          font-weight: bold;
          margin: 0px;
        }
        
        section img.right {
          margin: 0;
          left: 0;
          bottom: 0;
        }

        .single-tech-track-container .right-side {
          background-color: #CD6B79;
          text-align: right;
          margin-right: 0;
          padding: 70px 20px;
          height: 400px;
        }

        .bottom-to-top-default {
          opacity: 0;
        }

        .h2appearingFirst {
          margin-top: 30px;
          color: #CD6B79;
          animation: first_appearance 1s ease-out forwards;
        }

        .right-side .h2appearingFirst {
          color: #fff;
        }

        .bottom-to-top-effect {
          animation: bottom_to_top 1s ease 0.5s forwards;
        }

        .appearing {
          animation: last_appearance 1s ease-in forwards;
        }

        @keyframes first_appearance { 
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
          
        }
        
        @keyframes bottom_to_top { 
          0% {
            opacity: 0;
            margin-top: 60px;
          }
          100% {
            opacity: 1;
            margin-top: 0px;
          }
        }

        @keyframes last_appearance { 
          0% {
            opacity: 0;
          }
          60% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @media (min-width: 768px) {
          section h2 {
            font-size: 26px;
            font-weight: 900;
          }

          section div.text-container {
            font-size: 18px;
            width: 60%;
          }

          section.single-tech-track-container {
            display: flex;
            height: 470px;
          }

          section.single-tech-track-container div.right-side {
            width: 100%;
          }
          
          section.single-tech-track-container div.right-side p {
            float: right;
            width: 600px;
            margin-left: 12vw;
          }

          .single-tech-track-container .right-side {
            padding: 100px 20px;
          }

          .content p {
            width: 600px;
          }

          section.single-tech-track-container div.text-container {
            padding-right: 250px;
          }

          section.single-tech-track-container.right div.text-container {
            padding: 50px 20px;
            margin-right: 0;
          }

          section img.right {
            margin: 0;
            margin-top: 0px;
            bottom: -40px;
            left: 0;
          }

          section img {
            width: 32vw;
            height: 32vw;
            max-width: 440px;
            max-height: 440px;
          }
          
        }
      `,
    ];
  }

  static get properties() {
    return {
      header: { type: String },
      textAlign: { type: String },
      description: { type: String },
      skills: { type: Array },
      src: { type: String },
      srcset: { type: Array },
      paddingTop: { type: Boolean },
      opacityChange: { type: Boolean },
      textDisplacement: { type: Boolean },
      imageAppearing: { type: Boolean },
      index: { type: Number },
    };
  }

  constructor() {
    super();
    this.header = '';
    this.textAlign = '';
    this.description = '';
    this.skills = [];
    this.src = '';
    this.srcset = [];
    this.opacityChange = false;
    this.textDisplacement = false;
    this.imageAppearing = false;
    this.paddingTop = false;
    this.index = 0;
  }

  render() {
    return html`
     <section class="single-tech-track-container index-${this.index} ${this.textAlign} ${this.paddingTop ? 'bottom-single-tech-track' : ''}">
      <div class="text-container ${this.textAlign == 'right' ? 'right-side' : ''}">
        <h2 class="${this.textDisplacement ? 'h2appearingFirst' : '' }" tabindex="0">${this.header}</h2>
        <div class="content ${this.textDisplacement ? 'bottom-to-top-effect' : '' }">
          <p tabindex="0">${this.description}</p>
          <div class="clear"></div>
          <div class="skills-container" tabindex="0"> ${this._printSkills()}
        </div>
        </div>
      </div>
      <picture>
        ${this.srcset.map(source => html`
          <source srcset="${source.src}" media="${source.media}">
        `)}
        <img src=${this.src} class="${this.textAlign} ${this.imageAppearing ? 'appearing' : '' }">
      </picture>
    </section>
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

      this.dispatchEvent(new CustomEvent('start-observing-intersection', {
        bubbles: true,
        composed: true,
        detail: { element: this, threshold: THRESHOLDS.SECOND, callback: this._handleSecondIntersection.bind(this) },
      }));
    } else {
      this.opacityChange = true;
      this.textDisplacement = true;
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (window.IntersectionObserver) {
      this._unobserveIntersection(THRESHOLDS.FIRST);
      this._unobserveIntersection(THRESHOLDS.SECOND);
    }
  }
  /* eslint-enable require-jsdoc */

  /**
   * Changes opacityChange and textDisplacement according to the intersection state and removes the observer if it intersects
   *
   * @param {boolean} isIntersecting shows if there has been an intersection or not
   */
  _handleIntersection([{ isIntersecting }]) {
    this.opacityChange = isIntersecting;
    this.textDisplacement = isIntersecting;
    if (isIntersecting) {
      this._unobserveIntersection(THRESHOLDS.FIRST);
    }
  }

  /**
   * Changes imageAppearing according to the intersection state and removes the observer if it intersects
   *
   * @param {boolean} isIntersecting shows if there has been an intersection or not
   */
  _handleSecondIntersection([{ isIntersecting }]) {
    this.imageAppearing = isIntersecting;
    if (isIntersecting) {
      this._unobserveIntersection(THRESHOLDS.SECOND);
    }
  }

  /**
   * Stops the intecrsection's observers to avoid the re-launching of the opacity and displacement effects again
   *
   * @param {number} threshold threshold of the interesectionObserver
   */
  _unobserveIntersection(threshold) {
    this.dispatchEvent(new CustomEvent('stop-observing-intersection', {
      bubbles: true,
      composed: true,
      detail: { element: this, threshold: threshold },
    }));
  }

  /**
   * Prints the skills of the skills tracks
   * @return {string} HTML Template
   */
  _printSkills() {
    this.skills = this.skills || [];
    return this.skills.map((skill) => html`<p>${skill}</p>`);
  }
}


customElements.define('single-tech-track', SingleTechTrack);
