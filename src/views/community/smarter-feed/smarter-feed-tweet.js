/* eslint-disable no-tabs */
import { LitElement, html, css } from 'lit-element';
import { SharedStyles } from '../../../components/shared-styles.js';

class SmarterFeedTweet extends LitElement {
/* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
      :host {
        display: flex;
        flex-flow: column;
        align-items: center;
        height: 100%;
        width: 100%;
      }

      .tweet {
        height: fit-content;
        padding: 0 10px 10px;
        width: 88%;
        font-size: 14px;
        display: flex;
        flex-direction: column;
      }

      .tweet-link {
        text-decoration: none;
        color: black;
      }

      .tweet-logo {
        height: 100%;
        margin-right: 5px;
      }

      .logo {
        height: 55px;
      }

      .data-top {
        width: 100%;
        display: flex;
        flex-direction: row;
      }

      .header {
        width: 100%;
        display: flex;
        flex-direction: raw;
        white-space:nowrap;
      }

      .text {
        margin: 0;
      }

      .user-info{
        margin-left: 5px;
      }

      .user {
        padding-right: 10px;
        color: grey;
      }

      .date {
        width: 100%;
        padding: 0 10px;
        color: grey;
      }

      .tweet-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
      }

      .tweet-text {
        width: 100%;
        display: flex;
        align-items: center;
        flex-grow: 1;
        overflow-y: hidden;
        margin-bottom: 25px;
      }

      .tweet-image {
        height: 200px;
        width: 100%;
        flex-grow: 1;
        border-radius: 7px;
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
      }

      @media (min-width: 550px) {
        .tweet-image {
          height: 300px;
        }
      }

      @media (min-width: 768px) {
        .tweet {
          max-width: 700px;
          font-size: 18px;
        }

        .tweet-image {
          height: 350px;
        }
      }
    `,
    ];
  }

  static get properties() {
    return {
      tweet: { type: Object },
      tweetIndex: { type: Number },
      tweetParsed: { type: Object },
    };
  }

  constructor() {
    super();
    this.tweet = {};
    this.tweetParsed = {};
  }
  
  render() {
    return html`
      <div class="tweet" id="${this.tweetIndex}">
        <a class="tweet-link" href="${this.tweetParsed.url}">
          <div class="header">
            <div class="tweet-logo">
              <img class="logo" src="../../../../assets/images/community/smarter-feed/logoSopraTwiter.png" alt="logo">
            </div>
            <div class="data-top">
              <div class="user-info">
                <p class="text name"><b>${this.tweetParsed.name}</b></p>
                <p class="text user">${this.tweetParsed.user}</p>
              </div>
              <p class="text date">${this.tweetParsed.date}</p>
            </div>
          </div>
          <div class="tweet-content">
            <div class="tweet-text">${this.tweetParsed.text}</div>
            <div class="tweet-image" style="background-image: url('${this.tweetParsed.picture}')"></div>
          </div>
        </a>
      </div>
    `;
  }

  firstUpdated() {
    this._parseTweet(this.tweet);
  }
  /* eslint-disable require-jsdoc */

  /**
   * @param {json} tweetData The Twiiter API result.
   * Parse the response of the twitter api and parses the results.
   */
  _parseTweet(tweetData) {
    const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

    const date = new Date(tweetData.created_at);
    const month = months[date.getMonth()];

    const tweetSplited = tweetData.extended_tweet.full_text.split(" ");
    let realText = '';
    tweetSplited.forEach((word)=> {
      if (!word.includes('http')) {
        realText = realText + word + " ";
      }
    });

    this.tweetParsed = {
      name: tweetData.user.name,
      user: tweetData.user.screen_name,
      date: date.getDate() + " " + month + ".",
      picture: tweetData.extended_tweet.entities.media[0].media_url_https,
      url: tweetData.extended_tweet.entities.media[0].expanded_url,
      text: realText,
    };
  }
}
customElements.define('smarter-feed-tweet', SmarterFeedTweet);
