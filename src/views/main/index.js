import { LitElement, html, css } from 'lit-element';

// These are the shared styles needed by this element.
import { SharedStyles } from '../../components/shared-styles.js';

import { crackData } from './our-cracks/crack-data.js';
import { scroll } from '../../utils/scrollUtils.js';
import './smarters-reviews/smarters-reviews';
import './ecosystem/smartup-ecosystem.js';
import './frequent-questions/frequent-questions.js';
import './the-experience/the-experience.js';
import './our-cracks/our-cracks.js';
import './want-to-live-the-experience/want-to-live-the-experience.js';
import '../../components/hero-element';

/**
 * Main view
 */
class MainView extends LitElement {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          height: 100%;
        }
        
        video {
          transform: rotate(180deg) scale(1.1);
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
      <hero-element .literals="${['SMARTUP_XPERIENCE', 'SMARTUP_XPERIENCE_SUBTITLE']}" .scrollTo="${'the-experience'}">
        <video slot="video" autoplay loop muted playsinline poster="/assets/videos/main-video-poster.jpg">
          <source src="/assets/videos/main-video.mp4" type="video/mp4">
        </video>
      </hero-element>
      <the-experience></the-experience>
      <smartup-ecosystem></smartup-ecosystem>
      <our-cracks .cracks="${crackData}"></our-cracks>
      <smarters-reviews></smarters-reviews>
      <want-to-live-the-experience></want-to-live-the-experience>
      <frequent-questions></frequent-questions>
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
}
/* eslint-enable require-jsdoc */
window.customElements.define('main-view', MainView);
