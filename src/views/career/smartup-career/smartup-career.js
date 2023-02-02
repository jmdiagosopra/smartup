import { LitElement, html, css } from 'lit-element';

// These are the shared styles needed by this element.
import { SharedStyles } from '../../../components/shared-styles.js';

import '../../../components/cards-element/bottomcards-container.js'
import '../smartup-career/smartup-career-top-card.js';

class SmartUpCareer extends LitElement {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
        :host{
          display: block;
        }

        smartup-career-top-card {
          height: 296px;
        }

        @media (min-width: 768px) {

          smartup-career-top-card {
            height: 25vw;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      bottomCardsData: { type: Array },
    };
  }

  constructor() {
    super();
    this.bottomCardsData = [];
  }

  render() {
    return html`
        <section aria-label="SMARTUP CAREER" tabindex="0">
          <h1 class="title section-header" aria-label="SMARTUP CAREER" tabindex="0">
            <lit-i18n>SMARTUP_CAREER_COMPONENT_TITLE</lit-i18n>
          </h1>
          <smartup-career-top-card></smartup-career-top-card>
          <bottomcards-container .cardsData="${this.bottomCardsData}"></bottomcards-container>
        </section> 
    `;
  }
}

/* eslint-enable require-jsdoc */
customElements.define('smartup-career', SmartUpCareer);
