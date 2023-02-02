import { LitElement, html, css } from 'lit-element';

import './review-video.js';

class ReviewCard extends LitElement {
/* eslint-disable require-jsdoc */
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-flow: column;
        height: 100%;
        width: 100%;
        font-size: 1rem;
        color: white;
      }

      .card-info {
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 400px;
        text-align: center;
        position: relative;
        margin-top: 50px;
        border-top-color: var(--app-background-color, '#fff');
        background-color: var(--app-smarters-reviews-background, rgb(179, 79, 92));
      }

      .card-description {
        display: flex;
        flex-grow: 1;
        align-items: center;
        height: auto;
        hyphens: auto;
        padding: 40px;
        margin-top: -50px;
        background-color: var(--app-smarters-reviews-background, rgb(179, 79, 92));
        justify-content: center;
        white-space: pre-line;
      }

      .photo-container {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40%;
        padding: 10px;
      }

      .title {
        font-weight: bolder;
        padding: 20px;
      }

      .card-subtitle {
        border-top: 1px solid white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 20px;
        height: auto;
        padding: 40px;
      }

      .photo {
        width: 100%;
        max-width: 220px;
        max-height: 220px;
        border-radius: 100%;
        position: absolute;
        top: -50px;
      }

      p {
        font-size: 16px;
        padding: 0;
        margin: 5px;
        text-align: center;
        font-style: italic;
      }

      .new-title {
        background-color: red;
        width: 100%;
        max-width: 100%;
        height: 20px;
      }

      .name {
        font-size: 18px;
        font-weight: 600;
      }

      @media screen and (min-width: 768px) {
        p {
          font-size: 20px;
        }
      }
 
      @media screen and (min-width: 1050px) {

        :host {
          flex-flow: row nowrap;
          min-height: 400px;
        }

        .card-info {
          width: 35%;
          height: 100%;
        }

        .card-description {
          border-left: 1px solid white;
          padding-top: 40px;
          width: 65%;
          border-top: 50px solid;
          border-top-color: var(--app-background-color, '#fff');
          margin-top: 0;
        }

        .photo-container {
          flex-grow: inherit;
          padding-bottom: 0;
        }
        
        .card-subtitle {
          border-top: 1px solid white;
          
        }

        p {
          font-size: 20px;
        }
      } 
    `;
  }

  static get properties() {
    return {
      card: { type: Object },
      isRunning: { type: Boolean },
      isCurrentCard: { type: Boolean },
    };
  }

  render() {
    return html`
      <div class="card-info">
        <div class="photo-container">
          <review-video class="photo" .card="${this.card}" .isRunning="${this.isRunning}" .isCurrentCard="${this.isCurrentCard}"></review-video>
        </div>
        <span class="title">${this.card.title}</span>
        <div class="card-subtitle">
          <span class="name" tabindex="${this.isCurrentCard ? 1 : -1}" aria-label="${this.card.name + ' ' + this.card.subtitle}">${this.card.name}</span>
          <span>${this.card.subtitle}</span>
        </div>
      </div>
      <div class="card-description">
        <p tabindex="${this.isCurrentCard ? 2 : -1}">${this.card.description}</p>
      </div>
    `;
  }
  /* eslint-enable require-jsdoc */
}
customElements.define('review-card', ReviewCard);
