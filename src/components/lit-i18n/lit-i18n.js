import { LitElement, html } from 'lit-element';

import { get } from './index.js';

/**
 * Custom element to render literals
 */
class litI18n extends LitElement {
  /* eslint-disable require-jsdoc */
  static get properties() {
    return {
      raw: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.raw = false;
  }

  render() {
    return html`<slot></slot>`;
  }

  connectedCallback() {
    this.key = this.textContent;
    document.addEventListener('LIT_I18N_UPDATED', this._handleUpdate.bind(this));
    this._handleUpdate();
  }

  disconnectedCallback() {
    document.removeEventListener('LIT_I18N_UPDATED', this._handleUpdate.bind(this));
  }
  /* eslint-disable require-jsdoc */

  /**
   * Handles literal updates when language is changed
   */
  _handleUpdate() {
    if (this.raw) {
      const span = document.createElement('span');
      span.innerText = get(this.key, true);
      this.shadowRoot.appendChild(span);
    } else {
      this.shadowRoot.innerHTML = get(this.key);
    }
  }
}

customElements.define('lit-i18n', litI18n);
