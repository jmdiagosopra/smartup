import { LitElement, html, css } from 'lit-element';

// These are the shared styles needed by this element.
import { SharedStyles } from '../../components/shared-styles';

import { scroll } from '../../utils/scrollUtils.js';
import './smartup-community/smartup-community.js';
import '../../components/hero-element.js';
import './smarter-leads/smarter-leads.js';
import './smarter-feed/smarter-feed.js';

/**
 * Main view
 */
class SmartupCommunityView extends LitElement {
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
      <hero-element .literals="${['SMARTUP_COMMUNITY', 'SMARTUP_COMMUNITY_SUBTITLE']}" .scrollTo="${'smartup-community'}">
        <video slot="video" autoplay loop muted playsinline poster="./assets/videos/community-video-poster.jpg">
          <source src="./assets/videos/community-video.mp4" type="video/mp4">
        </video>
      </hero-element>
      <smartup-community></smartup-community>
      <smarter-leads></smarter-leads>
      <smarter-feed></smarter-feed>
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
window.customElements.define('smartup-community-view', SmartupCommunityView);
