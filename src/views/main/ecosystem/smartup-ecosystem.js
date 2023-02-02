import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from '../../../components/shared-styles.js';
import { get as i18n } from '../../../components/lit-i18n';

import { scroll } from '../../../utils/scrollUtils.js';
import { cardsData } from './smartup-ecosystem-data.js';
import '../../../components/card-collapse.js';
import '../../../components/card-collapse-desktop.js';

class SmartupEcosystem extends LitElement {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          display: block;
          --collapse-card-overlay-background-color: black;
        }

        h1 {
          text-transform: uppercase;
        }

        .header-content {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .header-content h1 {
          color: var(--app-light-text-color);
          font-size: var(--app-image-text-font-size-mobile, 36px);;
          margin: 0;
          line-height: 40px;
          z-index: 1;
          white-space: pre-line;
        }

        .header-content .background-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .body-content {
          padding: 30px 20px;
        }

        .go-to {
          position: relative;
          padding: 10px;
          bottom: 20px;
        }

        .go-to a {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-size: 16px;
          color: var(--app-ecosystem-background-color-primary);
          text-decoration: none;
          position: absolute;
          right: 30px;
        }

        a:hover {
          font-weight: bold;
        }

        card-collapse-desktop {
          display: none;
        }

        @media (min-width: 768px) {
          card-collapse {
            display: none;
          }

          card-collapse-desktop {
            display: block;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      data: { type: Array },
    };
  }

  constructor() {
    super();
    this.data = cardsData;
    this.addEventListener('opened-card', this._handleOpenedCard);
  }

  render() {
    return html`
      ${this.mixinsCSS}
      <section tabindex="0" aria-label="${i18n('ECOSYSTEM', true)}">
        <h1 class="title section-header" aria-label="${i18n('ECOSYSTEM', true)}" tabindex="0">
          <lit-i18n>ECOSYSTEM</lit-i18n>
        </h1>

        ${this.cardCollapseMobile}

        ${this.cardCollapseDesktop}
        
      </section>
    `;
  }
  /* eslint-enable require-jsdoc */

  /**
   * The event that triggers card-collapse is listened to every time clicked
   * on the element header of said component
   * @param {Object} card from detail object of event and recive the card-collapse component
   */
  _handleOpenedCard(card) {
    const element = card.detail !== undefined ? card.detail.element : '';
    const cardList = this.shadowRoot.querySelectorAll('card-collapse');
    const someOpened = this._isOpened(cardList);

    cardList.forEach((card) => {
      if (card === element) {
        if (someOpened) {
          setTimeout(() => {
            this._handleScrollMobile(card);
          }, 400);
        } else {
          this._handleScrollMobile(card);
        }
      } else {
        card.removeAttribute('is-opened');
      }
    });
  }

  /**
   * Check if any card-collapse is opened
   * @param {Array} cardList contains all card-collapses
   * @return {Boolean} Boolean that indicates if there is any card-collapse opened
   */
  _isOpened(cardList) {
    let someOpened = false;
    cardList.forEach((card) => {
      if (!someOpened) {
        someOpened = card.hasAttribute('is-opened') ? true : false;
      }
    });
    return someOpened;
  }

  /**
   * Manage the scroll for mobile view
   * @param {Object} card Represents the card-collapse selected
   */
  _handleScrollMobile(card) {
    if (card) {
      const headerHeight = parseInt(getComputedStyle(this).getPropertyValue('--header-height'));
      scroll({ elemenToScroll: card.offsetTop, headerHeight: headerHeight });
      setTimeout(() => card.focus());
    }
    this.scrollView = null;
    if (card.hasAttribute('is-opened')) {
      card.removeAttribute('is-opened');
      this._handleOpenedCard(card);
    } else {
      card.setAttribute('is-opened', '');
    }
  }

  /**
   * Template that contains three card-collapse components with their respective
   * header and body slots for the mobile version
   */
  get cardCollapseMobile() {
    return html`
      <div class="card-collapse-container">
        ${this.data.map((card) => {
    return html`
            <card-collapse scrollTo="article" has-overlay has-triangle>
              <div slot="header">
                <div class="header-content">
                  <picture>
                    ${card.image.srcset.map(source => html`
                      <source srcset="${source.src}" media="${source.media}">
                    `)}
                    <img class="background-img"
                         src="${card.image.src}"
                         alt="${card.image.alt}"
                    >
                  </picture>
                  <h1><lit-i18n>${card.title}</lit-i18n></h1>
                </div>
              </div>
  
              <div slot="body">
                <div class="dropdown-text-body">
                  <p>
                    ${card.body}
                  </p>
                  <div class="go-to">
                    <a href="${card.urlButton}">
                      Ir al sitio
                    </a>
                  </div>
                </div>
              </div>
            </card-collapse>
          `;
  })}
      </div>
    `;
  }

  /**
   * Template that contains a card-collapse-desktop component
   * with the data object that contains the following information: image, title, subtitle, body, urlButton
   * for each card element
   */
  get cardCollapseDesktop() {
    return html`
    <card-collapse-desktop scrollTo="article" .data="${this.data}"></card-collapse-desktop>`;
  }

  /**
   * This method implemented in the render,
   * allows access to the classes of the components to modify any property CSS
   */
  get mixinsCSS() {
    return html`
      <style>
        card-collapse {
          --card-collapse-article: {
            margin: 0;
          }

          --card-collapse-header-slot: {
            height: 320px;
          }

          --card-collapse-body: {
            transition: max-height 0.5s ease;
          }

          --card-collapse-body-slot: {
            padding: 30px 20px;
          }
        }
      </style>
    `;
  }
}
window.customElements.define('smartup-ecosystem', SmartupEcosystem);
