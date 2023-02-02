import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from '../../../components/shared-styles';
import { get as i18n } from '../../../components/lit-i18n';

import { arrowDown } from '../../../components/my-icons.js';
import '../../../components/card-collapse.js';

/**
 * Frequent questions component, with a list of accordions
 */
class FrequentQuestions extends LitElement {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          display: block;
        }

        section {
          padding: 0 0 35px;
        }

        card-collapse[is-opened] {
          box-shadow: 0 2px 4px -2px #000;
        }

        p {
          margin: 0;
          padding: 1em 0;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .header-content .question {
          font-size: 16px;
          font-weight: bold;
          text-align: left;
        }

        .header-content .icon {
          margin-right: 7px;
          margin-left: 15px;
          font-weight: var(--app-font-weight-extrabold);
        }

        .header-content .icon svg {
          width: 15px;
          height: 16px;
        }

        .header-content .icon.active {
         transform: rotate(180deg);
        }

        .header-content .icon svg path {
          stroke: var(--app-primary-color, #CC0033);
          stroke-width: 3px;
        }

        .more-questions {
          margin: 40px 15px 0 15px;
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        .more-questions .doubts {
          text-align: center;
          color: var(--app-frequent-questions-secondary-color, #484848);
        }

        .question-link {
          width: 275px;
        }

        .body-content, .header-content {
          transition: 1s;
          background-color: transparent;
        }

        .cliked {
          background: var(--app-frequent-questions-background-color, #F8F9F9);
          transition: 1s;
        }

        @media (min-width: 768px) {
          card-collapse[is-opened] {
            box-shadow: none;
          }
        }
      `,
    ];
  }

  constructor() {
    super();
    this.addEventListener('opened-card', this._handleOpenedCard);
  }

  render() {
    return html`
      ${this.mixinsCSS}
      <section aria-label="${i18n('FREQUENT_QUESTIONS', true)}" tabindex="0">
        <h1 class="title section-header" aria-label="${i18n('FREQUENT_QUESTIONS', true)}" tabindex="0">
          <lit-i18n>FREQUENT_QUESTIONS</lit-i18n>
        </h1>

        <div role="list" tabindex="0" aria-label="Preguntas frecuentes">
          <card-collapse role="listitem" class="first">
            <div slot="header">
              <div class="header-content">
                <p class="question"><lit-i18n>FREQUENT_QUESTION1</lit-i18n></p>
                <i class="icon">${arrowDown}</i>
              </div>
            </div>
            <div slot="body">
              <div class="body-content">
                <p>
                  <lit-i18n>FREQUENT_QUESTION1_P</lit-i18n>
                </p>
              </div>
            </div>
          </card-collapse>

          <card-collapse role="listitem">
            <div slot="header">
              <div class="header-content">
                <p class="question"><lit-i18n>FREQUENT_QUESTION2</lit-i18n></p>
                <i class="icon">${arrowDown}</i>
              </div>
            </div>
            <div slot="body">
              <div class="body-content">
                <p>
                  <lit-i18n>FREQUENT_QUESTION2_P</lit-i18n>
                </p>
              </div>
            </div>
          </card-collapse>

          <card-collapse role="listitem">
            <div slot="header">
              <div class="header-content">
                <p class="question"><lit-i18n>FREQUENT_QUESTION3</lit-i18n></p>
                <i class="icon">${arrowDown}</i>
              </div>
            </div>
            <div slot="body">
              <div class="body-content">
                <p>
                  <lit-i18n>FREQUENT_QUESTION3_P</lit-i18n>
                </p>
              </div>
            </div>
          </card-collapse>

          <card-collapse role="listitem">
            <div slot="header">
              <div class="header-content">
                <p class="question"><lit-i18n>FREQUENT_QUESTION4</lit-i18n></p>
                <i class="icon">${arrowDown}</i>
              </div>
            </div>
            <div slot="body">
              <div class="body-content">
                <p>
                  <lit-i18n>FREQUENT_QUESTION4_P</lit-i18n>
                </p>
              </div>
            </div>
          </card-collapse>

          <card-collapse role="listitem">
            <div slot="header">
              <div class="header-content">
                <p class="question"><lit-i18n>FREQUENT_QUESTION5</lit-i18n></p>
                <i class="icon">${arrowDown}</i>
              </div>
            </div>
            <div slot="body">
              <div class="body-content">
                <p>
                  <lit-i18n>FREQUENT_QUESTION5_P</lit-i18n>
                </p>
              </div>
            </div>
          </card-collapse>
        </div>

        <div class="more-questions">
          <p class="doubts" tabindex="0"><lit-i18n>FREQUENT_QUESTION6</lit-i18n></p>
          <a class="primary-button big question-link" href="mailto:bedigital@soprasteria.com">
            <lit-i18n>ASK_US</lit-i18n>
          </a>
        </div>

      </section>
    `;
  }
  /* eslint-enable require-jsdoc */

  /**
   * The event that triggers card-collapse is listened to every time clicked
   * on the element header of said component
   * @param {Object} Destructuring from detail object of event and recive the card-collapse component
   */
  _handleOpenedCard({ detail: { element } }) {
    const cardList = this.shadowRoot.querySelectorAll('card-collapse');
    cardList.forEach((card) => {
      const icon = card.querySelector('.header-content .icon');
      const headerClicked = card.querySelector('.header-content');
      const bodyClicked = card.querySelector('.body-content');
      if (card === element) {
        icon.classList.toggle('active');
        headerClicked.classList.toggle('cliked');
        bodyClicked.classList.toggle('cliked');
        card.hasAttribute('is-opened') ? card.removeAttribute('is-opened'): card.setAttribute('is-opened', '');
      } else {
        icon.classList.remove('active');
        headerClicked.classList.remove('cliked');
        bodyClicked.classList.remove('cliked');
        card.removeAttribute('is-opened');
      }
    });
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
            margin: 0 15px;
            border-bottom: 1px solid var(--app-frequent-questions-border-color, #969696);
          }

          --card-collapse-header-slot: {
            height: auto;
          }

          --card-collapse-body: {
            transition: max-height 0.5s ease;
          }
        }

        card-collapse[is-opened] {
          --card-collapse-article: {
            margin: 0 15px; /*reset de margin again for override style*/
          }

          --card-collapse-body: {
            transition: max-height 2s ease-in-out;
          }
        }

        @media (min-width: 768px) {
          card-collapse {
            --card-collapse-article: {
              margin: 0 120px;
              border-bottom: 1px solid var(--app-frequent-questions-border-color, #969696);
            }
          }
          
          card-collapse[is-opened] {
            --card-collapse-article: {
              margin: 0 120px;
            }
          }
        }
      </style>
    `;
  }
}
window.customElements.define('frequent-questions', FrequentQuestions);
