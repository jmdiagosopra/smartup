import { LitElement, html, css } from 'lit-element';
// These are the shared styles needed by this element.
import { SharedStyles } from '../../../components/shared-styles.js';

import './smarter-path.js';
import './smarter-path-mobile.js';
import './smarter-path-desktop.js';
import './smarter-path-desk.js';

class SmarterPathContainer extends LitElement {
/* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
        :host{
          display: block;
        }
      `,
    ];
  }

  static get properties() {
    return {
      device: { String },
    };
  }

  constructor() {
    super();
    this._detectDevice();
  }

  render() {
    return html`
      <section aria-label="SMARTUP PATH" tabindex="0">
        <h1 class="title section-header" tabindex="0">
          <lit-i18n>SMARTER_PATH</lit-i18n>
        </h1>

        ${this.device === 'mobile' ? html`<smarter-path-mobile></smarter-path-mobile>` : html`<smarter-path></smarter-path>`}
      </section>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    const mq = window.matchMedia('(min-width: 768px)');

    mq.addListener(() => {
      this._detectDevice();
    }, true);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    const mq = window.matchMedia('(min-width: 768px)');

    mq.removeListener(() => {
      this._detectDevice();
    }, true);
  }
  /* eslint-enable require-jsdoc */

  /**
   * Sets 'device' property starting from innerWidth
   */
  _detectDevice() {
    this.device = window.innerWidth < 768 ? 'mobile' : 'desktop';
  }
}
customElements.define('smarter-path-container', SmarterPathContainer);