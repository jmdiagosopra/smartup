import { LitElement, html, css } from 'lit-element';
// These are the shared styles needed by this element.
import { SharedStyles } from '../shared-styles.js';

import './bottom-card';

class BottomCardsContainer extends LitElement {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
        :host{
          display: block;
        }

        @media (min-width: 768px) {
          .bottom-cards-container {
            display: flex;
          }
          
          bottom-card {
            flex: 1 1 0;
            height: calc(100vw / 3);
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      cardsData: { type: Array }
    };
  }

  constructor() {
    super();
    this.cardsData = [];
  }

  render() {
    return html`
        <section class="bottom-cards-container">
            ${this._printBottomCards()}
          </div>
        </section> 
    `;
  }

  /**
   * Prints the bottom-cards-component's instancies.
   * @return {string} HTML Template
   */
  _printBottomCards() {
    this.cardsData = this.cardsData || [];
    return this.cardsData.map((bottomCardData) => html`<bottom-card .backgroundImage="${bottomCardData.image}" .text="${bottomCardData.text}"></bottom-card>`);
  }

}
/* eslint-enable require-jsdoc */
customElements.define('bottomcards-container', BottomCardsContainer);
