import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from '../../../components/shared-styles.js';
import { get as i18n } from '../../../components/lit-i18n';

import './single-tech-track.js';

class TechSkillsTracks extends LitElement {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
        :host{
          display: block;
        }
      `,
    ];
  }

  static get properties() {
    return {
      singleTechTracks: { type: Array },
    };
  }

  constructor() {
    super();
    this.singleTechTracks = [];
  }

  render() {
    return html`
      <section class="container"> 
        <h1 class="title section-header">
        TECH SKILLS TRACKS
        </h1>
        <div>
          ${this.singleTechTracks.map((track, index) => html`
            <single-tech-track
              .src="${track.src}"
              .srcset="${track.srcset}"
              .header="${i18n(track.title, true)}"
              .description="${i18n(track.description, true)}"
              .skills="${i18n(track.skills, true)}"
              .textAlign="${track.textAlign}"
              .paddingTop="${track.paddingTop}"
              .index="${index + 1}"
            ></single-tech-track>`)}
        </div>
      </section>
    `;
  }
  /* eslint-enable require-jsdoc */
}
customElements.define('tech-skills-tracks', TechSkillsTracks);
