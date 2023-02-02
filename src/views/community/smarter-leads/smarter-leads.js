/* eslint-disable no-tabs */
import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from '../../../components/shared-styles.js';
import { get as i18n } from '../../../components/lit-i18n';

import { developIcon, coachingIcon, communityIcon } from '../../../components/my-icons';

let picture;

class SmarterLeads extends LitElement {
/* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
      :host{
        display: block;
      }

      section {
        background-color: black;
        overflow: hidden;
      }

      section h1.title.section-header{
        background-color: white;
        position: absolute;
        width: 100%;
        z-index: 1;
      }

      section p.paragraph {
        background-color: white;
        width: 100%;
        margin: 0;
        margin-top: 55px;
        padding: 0px 18px 26px 18px;
        box-sizing: border-box;
        position: relative;
        z-index: 1;
      }

      .image {
        position: relative;
        height: 400px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        color: var(--app-light-text-color, white);
      }

      .logos {
        z-index: 1;
      }

      .inside {
        position: relative;
        width: 100%;
        padding: 0 20px 10px;
        box-sizing: border-box;
        z-index: 1;
      }

      .inside p {
        margin: 0;
      }

      .develop.inside {
        text-align: start;
        bottom: -100px;
        opacity: 0;
        transition: all 1.2s linear;
      }

      .develop.inside.animated {
        bottom: 0;
        opacity: 1;
      }


      .coaching.inside {
        text-align: center;
        bottom: -100px;
        opacity: 0;
        transition: all 1.6s linear;
      }

      .coaching.inside.animated {
        bottom: 0;
        opacity: 1;
      }

      .community.inside {
        text-align: end;
        bottom: -100px;
        opacity: 0;
        transition: all 2s linear;
      }

      .community.inside.animated {
        bottom: 0;
        opacity: 1;
      }

      svg.smarter-icon {
        height: 80px;
        text-align: end;
        padding: 10px;
        box-sizing: border-box;
        fill: currentColor;
      }

      .image-background {
        position: absolute;
        width: 100%;
        height: 300%;
        background-image: url('/assets/images/community/smarter-leads/smarter-leads-image.jpg');
        background-repeat: no-repeat;
        background-size: cover;    
        background-position: center;
        opacity: 0.5;
      }

      @media (min-width: 550px) {
        .inside {
          width: 550px;
          margin: auto;
        }
      }

      @media (min-width: 768px) {
        .image {
          align-items: center;
          height: 600px;
        }

        .image-background {
          bottom: -1000px;
        }

        section p.paragraph {
          position: absolute;
          width: 100%;
          margin-top: 400px;
          max-width: 800px;
          left: 50%;
          transform: translate(-50%);
          text-align: center;
          background-color: transparent;
          color: white;
          z-index: 1;
          font-size: 18px;
          transition: all 1.5s ease;
          opacity: 0;
        }

        section p.paragraph.animated {
          margin-top: 200px;
          opacity: 1;
        }

        .logos {
          position: relative;
          bottom: -30%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          width: 500px;
          margin-top: 15%;
          transition: all 1.5s ease;
          opacity: 0;
        }

        .logos.animated {
          bottom: 0;
          opacity: 1;
        }

        .develop.inside, .coaching.inside, .community.inside {
          transition: none;
        }

        .image-background {
          background-position: 20% 30%;
        }
      }

      @media (min-width: 1200px) {
        section p.paragraph {
          font-size: 20px;
        }
        
        .logos {
          margin-top: 12%;
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
      <section aria-label="${i18n('SMARTER_LEADS_PROGRAM_TITLE', true)}" tabindex="0">
        <h1 class="title section-header" aria-label="${i18n('SMARTER_LEADS_PROGRAM_TITLE', true)}" tabindex="0">
          <lit-i18n>SMARTER_LEADS_PROGRAM_TITLE</lit-i18n>
        </h1>
        <p class="paragraph ${this.animated ? 'animated' : ''}" tabindex="0"><lit-i18n>SMARTER_LEADS_PROGRAM_PARAGRAPH</lit-i18n></p>
        <div class="image">
          <div class="logos ${this.animated ? 'animated' : ''}">
            <div class="develop inside ${this.animated ? 'animated' : ''}">
              <div class="logo">${developIcon}</div>
              <p tabindex="0"><lit-i18n>SMARTER_LEADS_PROGRAM_DEVELOP</lit-i18n></p>
            </div>
            <div class="coaching inside ${this.animated ? 'animated' : ''}">
              <div class="logo">${coachingIcon}</div>
              <p tabindex="0"><lit-i18n>SMARTER_LEADS_PROGRAM_COACHING</lit-i18n></p>
            </div>
            <div class="community inside ${this.animated ? 'animated' : ''}">
              <div class="logo">${communityIcon}</div>
              <p tabindex="0"><lit-i18n>SMARTER_LEADS_PROGRAM_COMMUNITY</lit-i18n></p>
            </div>
          </div>
          <div class="image-background"></div>
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
        detail: { element: this, threshold: 0.5, callback: this._handleIntersection.bind(this) },
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
        bubbles: true,
        composed: true,
        detail: { element: this, threshold: 0.5 },
      }));
      
      this.dispatchEvent(new CustomEvent('stop-observing-intersection', {
        bubbles: true,
        composed: true,
        detail: { element: this, threshold: 0, callback: this._handleParallaxIntersection.bind(this) },
      }));
    }
  }
  /* eslint-enable require-jsdoc */

  /**
   * Changes opacityChange and animated according to the intersection state and removes the observer if it intersects
   * @param {boolean} isIntersecting shows if there has been an intersection or not
   */
  _handleIntersection([{ isIntersecting }]) {
    this.animated = isIntersecting;
  }

  /**
   * Handle animation with intersection Observer
   * @param {array} isIntersecting
   */
  _handleParallaxIntersection([{ isIntersecting }]) {
    picture = this.shadowRoot.querySelector('.image-background');
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
      picture.style.top = 550 - scrolltop * 0.5 + 'px';
    }
    /* eslint-enable require-jsdoc */
    requestAnimationFrame(animate);
  }
}
customElements.define('smarter-leads', SmarterLeads);
