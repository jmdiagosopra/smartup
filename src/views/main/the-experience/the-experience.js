import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from '../../../components/shared-styles';
import { get as i18n } from '../../../components/lit-i18n';

import './smartup-animation.js';

/**
 * Introducing component to the SmartUp Xperience Web
*/
class TheExperience extends LitElement {
/* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          display: block;
          background-color: var(--app-background-color, white);
        }

        * {
          box-sizing: border-box;
        }

        section p,
        section div {
          padding-left: 18px;
          padding-right: 18px;
        }

        section p {
          color: var(--app-secundary-color, #4A4A4A);
          font-size: var(--app-paragraph-font-size-mobile, 16px);
          line-height: calc(20/18);
          margin: 0 0 1em;
        }

        section p.upper-text {
          text-align: left;
          width: 100%;
          margin-bottom: 26px;
          margin-left: 0;
        }

        section p.bottom-text {
          text-align: right;
          width: 100%;
          max-width: 628px;
          padding: 40px;
          margin: 12px 0 0 auto;
        }

        section div.tags-container {
          background-color: #ECECEC;
          width: 100%;
          display: flex;
          justify-content: center;
          padding-top: 30px;
          padding-bottom: 30px;
        }

        @media (min-width: 768px) {
          section p,
          section div {
            padding-left: 120px;
            padding-right: 120px;
          }

          section p {
            font-size: var(--app-paragraph-font-size-desktop, 20px);
            line-height: calc(24/20);
          }

          section p.upper-text {
            max-width: 839px; /* 719 + 120 */
          }

          section p.bottom-text {
            max-width: 748px; /* 628 + 120 */
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      animated: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.animated = false;
    this.wordList = i18n('ANIMATION_WORDS_LIST', true);
  }

  render() {
    if (!this.wordList.length == 0) {
      return html`
      <section aria-label="${i18n('THE_EXPERIENCE', true)}" tabindex="0">
        <h1 class="title section-header">
          <lit-i18n>THE_EXPERIENCE</lit-i18n>
        </h1>
        <p class="upper-text" tabindex="0"><lit-i18n>THE_EXPERIENCE_P1</lit-i18n></p>
        <smartup-animation .wordList="${this.wordList}" ?animated="${this.animated}"></smartup-animation>
        <p class="bottom-text" tabindex="0"><lit-i18n>THE_EXPERIENCE_P2</lit-i18n></p>
      </section>
      `;
    }
  }

  firstUpdated() {
    if (window.IntersectionObserver) {
      this.observer = new IntersectionObserver(this._handleIntersection.bind(this));
      this.observer.observe(this);
    } else {
      this.animated = true;
    }

    document.addEventListener('LIT_I18N_UPDATED', () => {
      this.wordList = i18n('ANIMATION_WORDS_LIST', true);
      this.requestUpdate();
    });
  }

  disconnectedCallback() {
    if (this.observer) {
      this.observer.unobserve(this);
    }
  }
  /* eslint-enable require-jsdoc */

  /**
   * Handles animation behaviour on intersection
   * @param {Array} entries Entries of observed elements (needed for isIntersecting attribute)
   */
  _handleIntersection([{ isIntersecting }]) {
    this.animated = isIntersecting;
  }
}
customElements.define('the-experience', TheExperience);
