import { LitElement, html, css } from 'lit-element';

// These are the shared styles needed by this element.
import { SharedStyles } from '../../components/shared-styles.js';

import { scroll } from '../../utils/scrollUtils.js';
import './smart-up/smart-up.js';
import './technical-coaches/technical-coaches.js';
import '../../components/hero-element.js';
import '../training/tech-skills-tracks/tech-skills-tracks.js';
import './soft-skills/soft-skills.js';
import { techSkillsData } from './tech-skills-tracks/tech-skills-data.js';

import { smartupBottomCardsData } from './smart-up/smart-up-data'


/**
* Main view
*/
class TrainingView extends LitElement {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          height: 100%;
        }
        
        video {
          transform: scale(1.1);
          filter: blur(3px);
          opacity: .8;
          position: relative;
          top: 0;
          left: 0;
          width: auto;
          z-index: -1;
          object-fit: cover;
          height: 100%;
          width: 100%;
        }  
      `,
    ];
  }

  render() {
    return html`
      <hero-element .literals="${['TRAINING_XPERIENCE', 'TRAINING_XPERIENCE_SUBTITLE']}" .scrollTo="${'smart-up'}">
      <video slot="video" autoplay loop muted playsinline poster="./assets/videos/training-video-poster.jpg">
        <source src="./assets/videos/training-video.mp4" type="video/mp4">
      </video>
      </hero-element>
      <smart-up .smartUpBottomCardsData="${smartupBottomCardsData}"></smart-up>
      <tech-skills-tracks .singleTechTracks="${techSkillsData}"></tech-skills-tracks>
      <soft-skills></soft-skills>
      <technical-coaches></technical-coaches>
   `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('scroll-automatic', (e) => this._scrollMe(e));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('scroll-automatic', (e) => this._scrollMe(e));
  }

  _scrollMe(event) {
    const headerHeight = parseInt(getComputedStyle(this).getPropertyValue('--header-height'));
    const elementToScroll = this.shadowRoot.querySelector(event.detail.elementScroll).offsetTop;
    scroll({ headerHeight, elemenToScroll: elementToScroll });
  }
  /* eslint-enable require-jsdoc */
}
window.customElements.define('training-view', TrainingView);
