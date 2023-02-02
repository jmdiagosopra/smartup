import { LitElement, html, css } from 'lit-element';

import { SharedStyles } from '../../../components/shared-styles.js';
import { get as i18n } from '../../../components/lit-i18n';

import { playButton } from '../../../components/my-icons.js';

/**
 * Video component for Smarters-Reviews component
 */
class ReviewVideo extends LitElement {
/* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
        .container {
          width: 220px;
          height: 220px;
          border-radius: 100%;
          position:relative;
        }

        .photo {
          width: 100%;
        }

        .play-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width:100%;
          height:100%;
          position:absolute;
          top: 0;
          background: none;
          border: none;
          cursor: pointer;
        }

        svg {
          width: 50px;
          height: 50px;
          position: absolute;
          bottom: 10px;
        }

        img {
          border-radius: 100%;
        }

        video {
          position: absolute;
          top: 0;
          height: 100%;
          width: 100%;
          display: none;
          border-radius: 100%;
        }

        video::-webkit-media-controls {
          display: none ;
        }

        video::-webkit-media-controls-start-playback-button {
          display: none;
        }
        
      `,
    ];
  }

  static get properties() {
    return {
      card: { type: Object },
      isRunning: { type: Boolean },
      isCurrentCard: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.card = {};
    this.isRunning = false;
  }

  render() {
    return html`
      <div class="container">
        <img id="preview" class="photo" src="${this.card.src}">
        <button @click="${this._showVideo}" class="play-icon" tabindex="${this.isCurrentCard ? 0 : -1}" aria-label="${i18n('VIDEO_REF', true) + ' ' + this.card.name}">${playButton}</button>
        <video id="video" @click="${this._stopVideo}" width="220" height="220">
            <source src="${this.card.video}" type="video/mp4">
            ${i18n('NOT_SUPPORTED_VIDEO', true)}
          </video>
        </div>
        `;
  }

  updated(changedProps) {
    if (!changedProps.get('isRunning') || this.isRunning) this._stopVideo();
  }
  /* eslint-enable require-jsdoc */

  /**
    * Show and play video
    */
  _showVideo() {
    const video = this.shadowRoot.querySelector('#video');

    if (video.paused) {
      const videoContainer = this.shadowRoot.querySelector('#preview');
      this.dispatchEvent(new CustomEvent('stopInterval', { composed: true }));

      video.style.display = 'block';
      videoContainer.style.visibility = 'hidden';

      video.play();
      video.onended = () => {
        this._stopVideo();
      };
    } else {
      this.stopVideo();
    }
  }

  /**
    * Stop video and reset current time from the begining
    */
  _stopVideo() {
    const videoContainer = this.shadowRoot.querySelector('#preview');
    const video = this.shadowRoot.querySelector('#video');
    this.dispatchEvent(new CustomEvent('resetInterval', { composed: true }));

    video.pause();
    videoContainer.style.visibility = 'visible';
    video.style.display = 'none';
    video.currentTime = 0;
  }
}
customElements.define('review-video', ReviewVideo);
