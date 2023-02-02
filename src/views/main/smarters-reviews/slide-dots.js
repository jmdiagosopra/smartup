import { LitElement, html, css } from 'lit-element';

import { get as i18n } from '../../../components/lit-i18n';

/** */
class SlideDots extends LitElement {
/* eslint-disable require-jsdoc */
  static get styles() {
    return css`
      :host {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-flow: row nowrap;
        padding-top: 20px;
        padding-bottom: 20px;
      }

      .dot {
        width: 20px;
        height: 20px;
        margin: 5px;
        background-color: #8e3b52;
        border-radius: 100%;
        border: none;
        cursor: pointer;
      }

      .active {
        background-color: #d8336d;
      }
    `;
  }

  static get properties() {
    return {
      index: { type: Number },
      nElements: { type: Number, reflect: true },
      dotsArray: { type: Array },
    };
  }

  constructor() {
    super();
    this.index = 0;
    this.nElements = 0;
    this.dotsArray = [];
  }

  render() {
    return html`
      ${this.dotsArray.map((x, i) => html`<button tabindex="0" @click="${() => this.setPosition(i)}" id="${'a' + i}" class="dot" aria-label="${i18n('GO_TO_REVIEW', true) + ' ' + (i + 1)}"></button>`)}
    `;
  }

  firstUpdated() {
    this.setActive(this.index, 'dot active');
  }

  /**
  * Update index and dots
  * @param {Number} changedProps Update active class when the index changes
  */
  updated(changedProps) {
    if (this.index || changedProps.get('index')) {
      this.setActive(this.index, 'dot active');
      this.setActive(changedProps.get('index'), 'dot');
    }
  }

  attributeChangedCallback() {
    const n = this.nElements;
    const abc = new Array(n).fill('');
    this.dotsArray = abc;
  }
  /* eslint-enable require-jsdoc */

  /**
    * Set active class
    * @param {Number} i  Assign default index (0)
    * @param {String} mod Assign active class (dot active)
    */
  setActive(i, mod) {
    const currentDot = this.shadowRoot.querySelector('#a' + i);
    if (currentDot) currentDot.classList = mod;
  }

  /**
    * Set new index and dispatchEvent to smarters-reviews component
    * @param {Number} index  Selected index
    */
  setPosition(index) {
    this.dispatchEvent(new CustomEvent('setPosition', { detail: index, composed: true }));
  }
}
customElements.define('slide-dots', SlideDots);
