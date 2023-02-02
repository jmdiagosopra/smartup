import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from './shared-styles';

import { scroll } from '../utils/scrollUtils.js';

/**
 * Accordion component for desktop
 */
class CardCollapseDesktop extends LitElement {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          display: block;
        }

        .container-header {
          display: flex;
        }

        .header {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100%;
          min-width: 200px;
          height: calc(100vw / 3);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          border: 0;
          padding: 0;
          margin: 0;
          font-family: inherit;
        }

        .header .background-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .header h1 {
          color: var(--app-light-text-color);
          font-size: 36px;
          margin: 0;
          line-height: 40px;
          z-index: 1;
          pointer-events: none;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: black;
          opacity: 0.4;
          transition: background-color 0.3s ease;
        }

        .overlay.active,
        .overlay:hover {
          background-color: var(--app-primary-color);
        }

        .triangle {
          margin: 0 auto;
          border-left: 25px solid transparent;
          border-right: 25px solid transparent;
          border-bottom: 25px solid white;
          position: absolute;
          left: calc(50% - 12.5px);
          bottom: -40px;
          opacity: 0;
          transition: all 0.5s ease;
        }

        .triangle.active {
          opacity: 1;
          bottom: -1px;
          z-index: 1;
        }

        .container-body {
          display: flex;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s ease-out;
        }

        .container-body.active {
          max-height: 800px;
        }

        .body {
          width: 100%;
          padding: 60px 120px;
        }

        .go-to {
          position: relative;
          padding: 10px;
        }

        .go-to a {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-size: 18px;
          color: var(--app-ecosystem-background-color-primary);
          text-decoration: none;
          position: absolute;
          right: 30px;
        }

        a:hover {
          font-weight: bold;
        }

        span > * {
          white-space: pre-line;
        }
      `,
    ];
  }

  static get properties() {
    return {
      data: { type: Array },
      bodyList: { type: Array },
      urlButton: { type: String },
      selectedId: { type: Number },
      scrollTo: { type: String },
    };
  }

  constructor() {
    super();
    this.scrollTo = '';
  }

  render() {
    return html`
      <article>
        <div class="container-header">
          ${this._fetchHeader()}
        </div>
        <div class="container-body">
          <div class="body" id="body">
            ${this.bodyList}
            <div class="go-to" id="show-btns">
              <a href="${this.urlButton}">
                Ir al sitio
              </a>
            </div>
          </div>
        </div>
      </article>
    `;
  }
  /* eslint-enable require-jsdoc */

  /**
   * Prints all the information passed from the parent componen object
   * that contains the following information: image, title, subtitle, body, urlButton
   * @return {string} HTML Template
   */
  _fetchHeader() {
    return html`
      ${this.data.map((item, index) => html`
        <button
          class="header" 
          id="${index}" 
          @click="${() => this._onClickHeader(index)}"
          aria-label="${`${item.title} ${item.subtitle}`}"
          ?aria-expanded="${index === this.selectedId}"
          aria-controls="body"
          tabindex="${((index+1)*2)-1}"
        >
          <picture>
            ${item.image.srcsetDesktop.map(source => html`
              <source srcset="${source.src}" media="${source.media}">
            `)}
            <img class="background-img"
                 src="${item.image.src}" 
                 alt="${item.image.alt}">
          </picture>
          <h1>Smartup</h1>
          <h1>${item.subtitle}</h1>
          <div class="triangle"></div>
          <div class="overlay"></div>
        </button>
      `)}
    `;
  }

  /**
   * Print the body info
   * @param {ID} id Recive the corresponding id with the index of the array of data objects
   */
  _setBody(id) {
    this.bodyList = html`
      <span tabindex="${(id === this.selectedId) ? -1 : ((id+1)*2)}" ?aria-hidden="${(id === this.selectedId)}">
        ${this.data[id].body}
      </span>
    `;
  }

  /**
   * Get the link href
   * @param {ID} id Recive the corresponding id with the index of the array of data objects
   */
  _setUrlButton(id) {
    this.urlButton = this.data[id].urlButton;
  }

  /**
   * Add or remove action-buttons depending on the data
   * @param {ID} id Recive the corresponding id with the index of the array of data objects
   */
  _toggleUrlButton(id) {
    const actionButton = this.shadowRoot.querySelector('.go-to');
    if (!this.data[id].urlButton) {
      actionButton.remove();
    }
  }

  /**
   * Add or remove the active class of the following elements from header class: triangle and overlay
   * @param {ID} id Recive the corresponding id with the index of the array of data objects
   */
  _toggleElements(id) {
    const headerList = this.shadowRoot.querySelectorAll('.header');
    headerList.forEach((item) => {
      if (item.id === id.toString()) {
        item.querySelector('.triangle').classList.toggle('active');
        item.querySelector('.overlay').classList.toggle('active');
      } else {
        item.querySelector('.triangle').classList.remove('active');
        item.querySelector('.overlay').classList.remove('active');
      }
    });
  }

  /**
   * Add or remove the active class of the container-info element
   * @param {ID} id Recive the corresponding id with the index of the array of data objects
   */
  _toggleContainerBody(id) {
    const containerInfo = this.shadowRoot.querySelector('.container-body');
    if (this.selectedId === id) {
      containerInfo.classList.toggle('active');
      this.selectedId = null;
    } else {
      containerInfo.classList.add('active');
      this.selectedId = id;
    }
  }

  /**
   * Event that triggers every time you click on the header element and launches the effects
   * of overlay and triangle on the header, and displays or hides the body container with its
   * respective information
   * @param {ID} id Recive the corresponding id with the index of the array of data objects
   */
  _onClickHeader(id) {
    const headerHeight = parseInt(getComputedStyle(this).getPropertyValue('--header-height'));
    const elementToScroll = this.shadowRoot.querySelector(this.scrollTo).offsetTop;
    scroll({ headerHeight, elemenToScroll: elementToScroll });
    this._toggleElements(id);
    this._setBody(id);
    this._toggleContainerBody(id);
    this._setUrlButton(id);
    this._toggleUrlButton(id);
  }
}

window.customElements.define('card-collapse-desktop', CardCollapseDesktop);
