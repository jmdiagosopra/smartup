import { html, css, LitElement } from 'lit-element';

// These are the shared styles needed by this element.
import { SharedStyles } from '../components/shared-styles.js';

import { get as i18n } from '../components/lit-i18n';

/**
 * 404 view
 */
class View404 extends LitElement {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
        .message-container {
          background-color: #000;
          height: calc(100vh - var(--header-height, 68px));
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .message-container h2 {
          color: white;
        }
      `,
    ];
  }

  render() {
    return html`
      <section aria-label="${i18n('404', true)}" tabindex="0">
        <div class="message-container">
          <h2> 🚧 Work in progress! 🚧</h2>
        </div>
      </section>
    `;
  }
  /* eslint-enable require-jsdoc */
}

window.customElements.define('view-404', View404);
