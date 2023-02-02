import { LitElement, html, css } from 'lit-element';

// These are the shared styles needed by this element.
import { SharedStyles } from '../../components/shared-styles';
import { scroll } from '../../utils/scrollUtils.js';

import '../../components/hero-element.js';
import '../career/smartup-career/smartup-career.js';
import '../career/smarter-path/smarter-path-container.js';

import { smartupCareerBottomCardsData } from './smartup-career/smartup-career-data'
/**
 * Career view
 */
class SmartupCareerView extends LitElement {
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

        @media (max-width: 420px) {
          video {
            width: 300%;
            left: -540px;
          }
        }

        @media (min-width: 420px) and (max-width: 768px) {
          video {
            width: 200%;
            left: -450px;
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <hero-element .literals="${['SMARTUP_CAREER', 'SMARTUP_CAREER_SUBTITLE']}" .scrollTo="${'smartup-career'}">
        <video slot="video" autoplay loop muted playsinline poster="/assets/videos/career-video-poster.png">
          <source src="/assets/videos/career-video.mp4" type="video/mp4">
        </video>
      </hero-element>
      <smartup-career .bottomCardsData="${smartupCareerBottomCardsData}"></smartup-career>
      <smarter-path-container></smarter-path-container>
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

window.customElements.define('smartup-career-view', SmartupCareerView);
