import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from './shared-styles';

class CardCollapse extends LitElement {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          display: block;
        }

        .header {
          position: relative;
          cursor: pointer;
          display: block;
          border: 0;
          background: none;
          padding: 0;
          width: 100%;
          font-family: inherit;
          overflow: hidden;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: var(--collapse-card-overlay-background-color, transparent);
          opacity: 0.4;
          transition: background-color 0.3s ease;
        }

        .overlay[active] {
          background-color: var(--app-primary-color);
        }

        .triangle {
          margin: 0 auto;
          height: 0;
          background: white;
          transform: rotate(45deg);
          width: 25px;
          position: absolute;
          left: calc(50% - 12.5px);
          bottom: -40px;
          opacity: 0;
          transition: all 8s ease-in-out;
        }

        .triangle[active] {
          opacity: 1;
          height: 25px;
          bottom: -12.5px;
        }

        .body {
          max-height: 0;
          overflow: hidden;
        }

        .body[active] {
          max-height: 800px;
        }

        button {
          margin: 0;
        }
      `,
    ];
  }

  static get properties() {
    return {
      isOpened: {
        type: Boolean,
        attribute: 'is-opened',
      },
      hasOverlay: {
        type: Boolean,
        attribute: 'has-overlay',
      },
      hasTriangle: {
        type: Boolean,
        attribute: 'has-triangle',
      },
      scrollTo: { type: String },
    };
  }

  render() {
    return html`
      ${this.mixinsCSS}
      <article role="region">
        <button tabindex="0" class="header" @click="${this._dispatchOpenedCard}" aria-controls="body" ?aria-expanded="${this.isOpened}">
          <slot name="header"></slot>
          <div ?active="${this.hasOverlay && this.isOpened}" class="overlay"></div>
          ${this.hasTriangle ? html`<div ?active="${this.hasTriangle && this.isOpened}" class="triangle"></div>` : ''}
        </button>
        <div ?active="${this.isOpened}" class="body" id="body" tabindex="${this.isOpened ? 0 : -1}" ?aria-hidden="${!this.isOpened}">
          <slot name="body"></slot>
        </div>
      </article>
    `;
  }
  /* eslint-enable require-jsdoc */

  /**
   * Triggers the opened-card event and passing the generated auto id
   */
  _dispatchOpenedCard() {
    const detail = {
      detail: { element: this, elementScroll: this.scrollTo },
      bubbles: true, composed: true,
    };
    const event = new CustomEvent('opened-card', detail);
    this.dispatchEvent(event);
  }

  /**
   * This method implemented in the render,
   * allows access to the classes of the components to modify any property CSS
   */
  get mixinsCSS() {
    return html`
      <style>
        article {
          @apply --card-collapse-article;
        }

        .header ::slotted(*) {
          @apply --card-collapse-header-slot;
        }

        .body {
          @apply --card-collapse-body;
        }
        
        .body ::slotted(*) {
          @apply --card-collapse-body-slot;
        }
      </style>
    `;
  }
}
window.customElements.define('card-collapse', CardCollapse);
