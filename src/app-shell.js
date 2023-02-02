import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';
import { arrowDown, heartIcon } from './components/my-icons.js';

import './components/lit-i18n';
import { get as i18n } from './components/lit-i18n';

// This element is connected to the Redux store.
import { store } from './store.js';

import { SharedStyles } from './components/shared-styles.js';
import './components/lit-i18n';

import './components/hero-element';
import './components/snack-bar.js';
import './components/smartup-brand.js';
// These are the actions needed by this element.
import {
  navigate,
  updateOffline,
  updateDrawerState,
} from './actions/app.js';

import './components/snack-bar.js';
import './components/smartup-brand.js';

import { initRouter } from './router';

class AppShell extends connect(store)(LitElement) {
  /* eslint-disable require-jsdoc */
  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          height: 100%;
          --app-primary-color: #CC0033;
          --app-secondary-color: #4A4A4A;
          --app-background-color: #fff;
          --app-font-weight-light: 300;
          --app-font-weight-normal: 400;
          --app-font-weight-bold: 700;
          --app-font-weight-extrabold: 800;

          --app-mobile-menu-btn-color: white;
          --app-dark-text-color: var(--app-secondary-color);
          --app-light-text-color: white;

          --app-paragraph-font-size-mobile: 16px;
          --app-title-font-size-mobile: 18px;
          --app-subtitle-font-size: 24px;
          --app-image-text-font-size-mobile: 36px;
          --app-title-font-size-desktop: 32px;
          
          --app-section-padding-desktop: 75px 120px;
          --app-section-padding-mobile: 36px 16px;
          --app-section-tags-container-background-color: lightgrey;

          --app-header-background-color: black;
          --app-header-text-color: var(--app-light-text-color);
          --app-header-selected-color: var(--app-primary-color);

          --app-drawer-background-color: black;
          --app-drawer-text-color: var(--app-light-text-color);
          --app-drawer-selected-color: #78909C;

          --app-button-primary-color: #B3002D;

          --app-smarters-reviews-background: rgb(179, 79, 92);

          --header-height: 68px;
          --header-footer-padding: 0 1rem;
        }

        header {
          position: fixed;
          height: var(--header-height, 68px);
          z-index: 999;
          top: 0;
          left: 0;
          width: 100%;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          padding: var(--header-footer-padding, 0 1rem);
          align-items: center;
          background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
          transition: all 0.3s ease;
        }

        .toolbar-list {
          display: none;
          padding: 0;
        }

        .toolbar-list > li {
          list-style: none;
          display: inline-block;
          min-width: 100px;
          text-align: center;
        }

        .toolbar-list > li > a {
          letter-spacing: 0;
          text-align: center;
          font-weight: 300;
          font-size: 16px;
          color: var(--app-header-text-color);
          text-decoration: none;
        }

        .toolbar-list > li > a[selected],
        .toolbar-list > li > a:hover {
          font-weight: 800;
        }

        .navigation-buttons {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-grow: 1;
          padding-left: 10px;
        }

        .menu-btn {
          background: none;
          border: none;
          padding: 0;
          fill: var(--app-mobile-menu-btn-color);
          cursor: pointer;
          z-index: 1;
        }

        #want-know-btn {
          font-size: 9px;
          margin: 0;
          padding: 7px 20px;
          width: fit-content;
          height: fit-content;
          font-weight: 600;
        }

        .drawer-list {
          box-sizing: border-box;
          width: 100%;
          height: 100vh;
          background: var(--app-drawer-background-color);
          position: absolute;
          top: 0;
          left:0;
          padding-top: var(--header-height, 68px);
          text-align: right;
          opacity: 0.84;
          transition: all 0.5s ease;
          transform: translateX(100%);
        }

        .drawer-list[opened] {
          transform: translateX(0);
        }

        .drawer-list > a {
          display: block;
          text-decoration: none;
          color: var(--app-drawer-text-color);
          line-height: 40px;
          padding: 0 16px;
        }

        .drawer-list > a[selected] {
          font-weight: 800;
        }

        main {
          display: block;
          min-height: calc(100vh - var(--header-height, 68px));
        }

        .page {
          display: none;
        }

        .page[active] {
          display: block;
        }

        footer {
          height: var(--header-height, 68px);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 8px;
          font-weight: 300;
          padding: var(--header-footer-padding, 0 1rem);
          background: var(--app-drawer-background-color);
          color: var(--app-drawer-text-color);
          position: relative;
        }

        footer:after {
          content: '';
          display: block;
          height: 100%;
          width: 100%;
          position: fixed;
          left: 0;
          bottom: 0;
          transform: translateY(100%);
          background: var(--app-drawer-background-color);
        }

        footer p {
          font-weight: bold;
          text-align: center;
          font-size: 11px;
          padding: 0 1rem;
        }

        .toggle-btn {
          width: 24px;
          height: 24px;
          cursor: pointer;
          z-index: 10;
        }

        .toggle-btn[clicked] .toggle-bar {
          background: inherit;
        }

        .toggle-btn[clicked] .toggle-bar:before,
        .toggle-btn[clicked] .toggle-bar:after {
          top: 0;
        }

        .toggle-btn[clicked] .toggle-bar:before {
          transform: rotate(45deg);
        }

        .toggle-btn[clicked] .toggle-bar:after {
          transform: rotate(-45deg);
        }

        #want-know-btn, .toggle-btn {
          margin-left: 20px;
        }

        [hidden] {
          display: none !important;
        }

        .back-to-top {
            position:fixed;
            width:40px;
            height:40px;
            bottom:50px;
            right:6px;
            background-color:#0C9;
            color:#FFF;
            cursor: pointer;
            border-radius:50px;
            text-align:center;
            box-shadow: -1px -1px 5px #999;
            z-index: 999;
            opacity: 0;
            transition: opacity 0.5s;
            background: var(--app-button-primary-color);
            transform: rotate(180deg);
            padding-top: 8px;
            border: 0;
        } 

        .back-to-top.active {
            opacity: 1;
        }
        
        footer .made-with-love svg {
          width: 20px;
          position: relative;
          top: 5px;
          margin: 0 3px;
        }

        @media (min-width: 768px) {
          :host {
            --header-height: 100px;
            --header-footer-padding: 0 120px;
          }

          header{
            padding: 0 25px;
          }

          .toolbar-list {
            display: flex;
            justify-content: space-between;
            width: 100%;
          }

          .toggle-btn {
            display: none;
          }

          #want-know-btn {
            font-size: 1rem;
            font-weight: 700;
            padding: 1rem;
            height: 48px;
            width: 275px;
            margin-left: 0;
          }

          .main {
            padding-top: 107px;
          }

          .back-to-top.active {
            right: 11px;
            bottom: 80px;
          }
          
          footer {
            font-size: 16px;
          }

          footer p {
            padding: 0;
            font-size: 1rem;
          }
        }

        @media (min-width: 1024px) {
          header{
            padding: 0 120px;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      appTitle: { type: String },
      _page: { type: String },
      _drawerOpened: { type: Boolean },
      _snackbarOpened: { type: Boolean },
      _offline: { type: Boolean },
      _isViewScrolled: { type: Boolean },
    };
  }

  constructor() {
    super();
    this._isViewScrolled = false;
    window.addEventListener('scroll', () => {
      this.shadowRoot.querySelector('header').style.background =
        `rgba(1, 1, 1, ${window.scrollY / 100})`;
      this._isViewScrolled = window.scrollY / 100 > 0.5;
      this.shadowRoot.querySelector('.back-to-top').classList.toggle('active', (window.scrollY / 100 > 5));
    });
    this._setIntersectionObserversListeners();
  }

  render() {
    return html`
      <header ?solid=${this._isViewScrolled}>
        <smartup-brand></smartup-brand>
        <div class="navigation-buttons">
          <nav>
            <ul class="toolbar-list">
              <li><a ?selected="${this._page === 'training'}" href="./training"><lit-i18n>TRAINING</lit-i18n></a></li>
              <li><a ?selected="${this._page === 'community'}" href="./community"><lit-i18n>COMMUNITY</lit-i18n></a></li>
              <li><a ?selected="${this._page === 'career'}" href="./career"><lit-i18n>CAREER</lit-i18n></a></li>
            </ul>
          </nav>
          <a class="primary-button big" id="want-know-btn" href="mailto:bedigital@soprasteria.com?subject=SmartUp+Xperience"><lit-i18n raw>WANT_TO_BE_SMARTER_BTN</lit-i18n></a>
        </div>
        <div ?clicked="${this._drawerOpened}" class="toggle-btn" @click="${this._menuButtonClicked}">
          <div class="toggle-bar" title="Menu" tabindex="3"></div>
        </div>
        <div ?opened="${this._drawerOpened}" class="drawer-list">
          <a ?selected="${this._page === 'home'}" href="/home"><lit-i18n>HOME</lit-i18n></a>
          <a ?selected="${this._page === 'training'}" href="./training"><lit-i18n>SMARTUP_TRAINING</lit-i18n></a>
          <a ?selected="${this._page === 'community'}" href="./community"><lit-i18n>SMARTUP_COMMUNITY</lit-i18n></a>
          <a ?selected="${this._page === 'career'}" href="./career"><lit-i18n>SMARTUP_CAREER</lit-i18n></a>
        </div>
      </header>
      
      <main></main>
      
      <footer>
        <p class="made-with-love" tabindex="0" aria-label="${i18n('MADE_WITH_LOVE_A11Y', true)}"><lit-i18n>MADE_WITH_LOVE_1</lit-i18n>${heartIcon}<lit-i18n>MADE_WITH_LOVE_2</lit-i18n></p>
        <smartup-brand></smartup-brand>
      </footer>
      <button class="back-to-top" aria-label="${i18n('BACK_TO_TOP_BUTTOM', true)}" @click="${this._backToTopButtonClicked}"> ${arrowDown}</button>
    `;
  }

  firstUpdated() {
    installRouter((location, event) => {
      store.dispatch(navigate(decodeURIComponent(location.pathname)));
      if (event && event.type === 'click') {
        window.scrollTo(0, 0);
      }
    });
    installOfflineWatcher((offline) => store.dispatch(updateOffline(offline)));
    installMediaQueryWatcher(`(min-width: 768px)`, () => store.dispatch(updateDrawerState(false)));
  }

  updated(changedProps) {
    if (changedProps.has('_page')) {
      initRouter(this.shadowRoot.querySelector('main'));
      const pageTitle = this.appTitle + ' - ' + this._page;
      updateMetadata({
        title: pageTitle,
        description: pageTitle,
        // This object also takes an image property, that points to an img src.
      });
    }
  }

  stateChanged(state) {
    this._page = state.app.page;
    this._offline = state.app.offline;
    this._snackbarOpened = state.app.snackbarOpened;
    this._drawerOpened = state.app.drawerOpened;
  }

  /* eslint-enable require-jsdoc */
  /**
   * Update the redux state for menu (opened/closed).
   */
  _menuButtonClicked() {
    store.dispatch(updateDrawerState(!this._drawerOpened));
  }

  /* eslint-enable require-jsdoc */
  /**
   * Pressing the button, there is a displacement to the hero.
   */
  _backToTopButtonClicked() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  /**
   * Starts all IntersectionObservers and listens to events from children to start/stop observing
   */
  _setIntersectionObserversListeners() {
    this.addEventListener('start-observing-intersection', (e) => {
      const io = this._getOrCreateIntersectionObserverObject(e.detail.threshold);
      io.observer.observe(e.detail.element);
      io.fnMap.set(e.detail.element, e.detail.callback);
    });
    this.addEventListener('stop-observing-intersection', (e) => {
      const io = this._getOrCreateIntersectionObserverObject(e.detail.threshold);
      io.observer.unobserve(e.detail.element);
      io.fnMap.delete(e.detail.element);
    });
  }

  /**
   * Returns one object containing the intersectionObserver and callback map. Creates it if not exist
   *
   * @param {number} [threshold=99] threshold of the interesectionObserver
   * @return {{observer: IntersectionObserver, fnMap: Map<HTMLElement, Function>}} an object containing the observer and the fnMap
   */
  _getOrCreateIntersectionObserverObject(threshold = 0.99) {
    const name = '_intersectionObserver' + (threshold * 100);
    if (!this[name]) {
      this[name] = {
        observer: new IntersectionObserver((event) => {
          event.forEach((observerEntry) => {
            this[name].fnMap.get(observerEntry.target)([observerEntry]);
          });
        }, { threshold: threshold }),
        fnMap: new Map(),
      };
    }
    return this[name];
  }

  /**
  * @param {Component} component (this)
  * @param {String} element element reference
  */
  doScroll(component, element) {
    if (element) {
      const headerHeight = parseInt(getComputedStyle(component).getPropertyValue('--header-height'));
      window.scrollTo({
        left: 0,
        top: element.offsetTop - headerHeight,
        behavior: 'smooth',
      });
      setTimeout(() => element.focus());
    }
  }
}
window.customElements.define('app-shell', AppShell);
