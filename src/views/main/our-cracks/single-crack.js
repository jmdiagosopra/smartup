import { LitElement, html, css } from 'lit-element';

// These are the shared styles needed by this element.
import { SharedStyles } from '../../../components/shared-styles.js';

/**
 * Single carousel item inside the our-cracks element
 */
class SingleCrack extends LitElement {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding: 91px 0;
        max-width: 100%;
        box-sizing: border-box;
      }

      .crack-inner {
        height: 100%;
        width: 100%;
        max-width: 189px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }

      .crack-inner > * {
        max-width: 100%;
      }

      h2 {
        margin: 12px 0 0 0;
        color: #FFF;
        font-weight: var(--app-font-weight-normal, 400);
        font-size: 18px;
        line-height: 20px;
        text-transform: uppercase;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      p {
        color: #FFF;
        font-weight: var(--app-font-weight-light, 300);
        font-size: 18px;
        line-height: 20px;
        margin: 0;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      img {
        position: relative;
        box-sizing: border-box;
        display: block;
        border-radius: 50%;
        width: 100%;
        border-radius: 50%;
      }

      @media (min-width: 768px) {
        .crack-inner {
          max-width: 273px;
        }

        h2, p {
          font-size: var(--app-subtitle-font-size, 24px);
          line-height: 24px;
        }
      }
    `,
    ];
  }

  static get properties() {
    return {
      crack: { type: Object },
    };
  }

  render() {
    return html`
      <div class="crack-inner">
        <img src="${this.crack.picture}" alt="${this.crack.name}">
        <div>
          <h2>${this.crack.name}</h2>
          <p>${this.crack.job}</p>
        </div>
      </div>
    `;
  }
  /* eslint-disable require-jsdoc */
}
window.customElements.define('single-crack', SingleCrack);
