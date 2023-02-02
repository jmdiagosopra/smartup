import { LitElement, html, css } from 'lit-element';

/**
 * `smartup-brand` Description
 * @customElement
 * @polymer
 * @demo
 */
class SmartupBrand extends LitElement {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      css`
        .brand-images {
          display: flex;
          align-items: center;
        }
        .brand-images img {
          width: 100%;
          box-sizing: border-box;
        }

        .brand-images .smartup-logo{
          width: 120px;
          padding: 10px;
          cursor: pointer;
        }

        @media(min-width: 768px) {
          .brand-images .smartup-logo {
            width: 180px;
            padding: 0px;
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <a href="/home" class="brand-images" aria-label="Sopra Steria">
        <img class="smartup-logo" src="./assets/images/smartup-xperience-logo.png">
      </a>
    `;
  }
  /* eslint-enable require-jsdoc */
}
customElements.define('smartup-brand', SmartupBrand);
