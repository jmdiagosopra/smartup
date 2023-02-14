import { LitElement, css, html } from 'lit-element';

import { SharedStyles } from '../../../components/shared-styles.js';
import { get as i18n } from '../../../components/lit-i18n';

/**
 * Component that shows the view "want to live the experience" and has a button that redirects to the view.
 */
class WantToLiveTheExperience extends LitElement {
  /* eslint-disable require-jsdoc*/
  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          display: block;
        }

        section {
          height: auto;
          padding: 0 16px 36px;
          background-color: #ECECEC;
          box-sizing: border-box;
        }

        section h1.title.section-header {
          padding: 15px 0;
        }

        section p {
          display: inline;
        }

        div.navigation-buttons {
          display: flex;
          justify-content: center;
        }

        @media screen and (min-width: 768px) {
          section {
            background-image: url('./assets/images/white_ninja.svg');
            background-repeat: no-repeat;
            background-position: right -140px center;
            font-size: 20px;
            padding: 0 0 36px;
            box-sizing: border-box;
          }

          section h1.title.section-header {
            padding: 26px 120px;
          }

          .text-want-to-live {
            padding: 0 120px;
          }
          
          section div a.primary-button {
            margin-top: 100px;
          }
        } 
      `,
    ];
  }

  render() {
    return html`
      <section aria-label="${i18n('LIVING_THE_EXPERIENCE', true)}" tabindex="0">
        <h1 class="title section-header" aria-label="${i18n('LIVING_THE_EXPERIENCE', true)}" tabindex="0"> 
          <lit-i18n>LIVING_THE_EXPERIENCE</lit-i18n>
        </h1>
        <div class="text-want-to-live">
          <p tabindex="0"> 
            <lit-i18n>LIVING_THE_EXPERIENCE_P</lit-i18n>
          </p>
        </div>
        <div class="navigation-buttons">
          <a href="mailto:BeConnectedSpain@soprasteria.com?subject=SmartUp+Xperience" class="primary-button big" aria-label="${i18n('WANT_TO_BE_SMARTER_BTN_A11Y', true)}">
            <lit-i18n raw>WANT_TO_BE_SMARTER_BTN</lit-i18n>
          </a>
        </div>
      </section>
    `;
  }
  /* eslint-enable require-jsdoc*/
}
window.customElements.define('want-to-live-the-experience', WantToLiveTheExperience);
