import { LitElement, html, css } from 'lit-element';

// These are the shared styles needed by this element.
import { SharedStyles } from '../../../components/shared-styles.js';
import { get as i18n } from '../../../components/lit-i18n';

class SoftSkills extends LitElement {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
        :host{
          display: block;
        }

        section h1.title.section-header {
          font-size: 17px;
        }

        section .container-soft-skills {
          overflow: hidden;
          height: auto;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .container-soft-skills h2{
          font-size: 20px;
        }

        .container-soft-skills p {
          font-size: 14px;
        }

        .container-soft-skills img {
          position: absolute;
          z-index: 1;
          opacity: 0.2;
          width: 75%;
        }

        .container-soft-skills div{
          position:relative;
        } 

        .container-soft-skills .wrapper-right {
          top: 0;
          width: 100%;
          right: 100%;
          height: 50%;
          background-color: #D8D8D8;
          transition: right 1s ease-in;
        }

        .container-soft-skills div.wrapper-left{
          bottom: 0;
          width: 100%;
          left: 100%;
          height: 50%;
          background-color: #CD6B79;
          transition: left 1s ease-in;
        }

        .container-soft-skills .text-skills-right {
          width: 90%;
          margin: 20% auto;
        }
        
        .container-soft-skills .text-skills-right h2 {
          color:rgb(0, 0, 0);
        }

        .container-soft-skills .text-skills-right h2, .container-soft-skills .text-skills-right p {
          text-align: left;
        }

        .container-soft-skills .text-skills-left {
          width: 90%;
          margin: 20% auto;
        }

        .container-soft-skills .text-skills-left h2, .container-soft-skills .text-skills-left p {
          text-align: right;
          color: white;
        }

        .text-skills-left p {
          white-space: pre-line;
        }

        .container-soft-skills div.wrapper-right.animated {
          right: 0%;
        }

        .container-soft-skills div.wrapper-left.animated {
          left: 0%;
        }

        @media (min-width: 768px) {
          section h1.title.section-header {
            font-size: var(--app-title-font-size-desktop, 32px);
            padding: 26px 120px;
          }

          section.container-soft-skills h2 {
            font-size: 24px;
          }

          section.container-soft-skills {
            flex-direction: inherit;
            align-items: center;
            height: 592px;
            overflow: hidden;
          }
          
          section.container-soft-skills .wrapper-right, section.container-soft-skills .wrapper-left{
            height: 100%;
          }

          section.container-soft-skills .wrapper-right {
            clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
            -webkit-clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%)
          }

          section.container-soft-skills .wrapper-left {
            clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 3% 100%);
            -webkit-clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 3% 100%);
            margin-left: -14.6%;
            height: 90%;
            align-self: flex-start;
          }

          .container-soft-skills img {
              width: auto;
              height: 120%
          }

          section.container-soft-skills .text-skills-right {
            margin: 10% 5% 20%;
            width: 65%;
          }

          section.container-soft-skills .text-skills-right p {
            font-size: 20px;
          }

          section.container-soft-skills .text-skills-left {
            margin: 10% 25% 20%;
            width: 70%;
          }

          section.container-soft-skills .text-skills-left p {
            font-size: 20px;
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
  }

  render() {
    return html`
      <section aria-label="${i18n('SOFT_SKILLS', true)}" tabindex="0">
        <h1 class="title section-header" aria-label="${i18n('SOFT_SKILLS', true)}" tabindex="0">
          <lit-i18n>SOFT_SKILLS</lit-i18n>
        </h1>
        <section class="container-soft-skills">
          <div class="wrapper-right ${this.animated ? 'animated' : ''}">
            <div class="text-skills-right">
              <h2 tabindex="0">
                <lit-i18n>SOFT_SKILLS_TITLE</lit-i18n>
              </h2>
              <p tabindex="0">
                <lit-i18n>SOFT_SKILLS_TEXT</lit-i18n>
              </p>
              <p tabindex="0">
                <lit-i18n>SOFT_SKILLS_SECOND_TEXT</lit-i18n>
              </p>
            </div>
          </div>
          <img src="./assets/images/training/white_ninja.svg">
          <div class="wrapper-left ${this.animated ? 'animated' : ''}">
            <div class="text-skills-left ${this.animated ? 'animated' : ''}">
              <h2 tabindex="0">
                <lit-i18n>CULTURA_DIGITAL_TITLE</lit-i18n>
              </h2>
              <p tabindex="0">
                <lit-i18n>CULTURA_DIGITAL_TEXT</lit-i18n>
              </p>
            </div>
          </div>
        </section>
      </section>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    if (window.IntersectionObserver) {
      this.dispatchEvent(new CustomEvent('start-observing-intersection', {
        bubbles: true,
        composed: true,
        detail: { element: this, threshold: 0.5, callback: this._handleIntersection.bind(this) },
      }));
    } else {
      this.animated = true;
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (window.IntersectionObserver) {
      this.dispatchEvent(new CustomEvent('stop-observing-intersection', {
        bubles: true,
        composed: true,
        detail: { element: this, threshold: 0.5 },
      }));
    }
  }
  /* eslint-enable require-jsdoc */

  /**
   * Handle animation since intersection Observer
   * @param {array} isIntersecting
   */
  _handleIntersection([{ isIntersecting }]) {
    this.animated = isIntersecting;
    if (isIntersecting) {
      this.dispatchEvent(new CustomEvent('stop-observing-intersection', {
        bubbles: true,
        composed: true,
        detail: { element: this, threshold: 0.5 },
      }));
    }
  }
}
customElements.define('soft-skills', SoftSkills);
