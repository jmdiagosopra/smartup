import { LitElement, html } from 'lit-element';

import { get as i18n } from '../../../components/lit-i18n';
import { SharedStyles } from '../../../components/shared-styles.js';

import './smartup-community-header';
import './smartup-community-bottom.js';
import { circlesData } from './circles-data.js';

class SmartupCommunity extends LitElement {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
    ];
  }

  static get properties() {
    return {
      smartupCommunityCircles: { type: Array },
    };
  }

  render() {
    return html`
      <section>
        <h1 class="title section-header" aria-label="${i18n('SMARTUP_COMMUNITY_TITLE', true)}" tabindex="0">
          <lit-i18n>SMARTUP_COMMUNITY_TITLE</lit-i18n>
        </h1>
        <smartup-community-header></smartup-community-header>
        <smartup-community-bottom .circlesData="${circlesData}"></smartup-community-bottom>
      </section>
    `;
  }
  /* eslint-enable require-jsdoc */
}
customElements.define('smartup-community', SmartupCommunity);
