import { css } from 'lit-element';

export const SharedStyles = css`
  :host {
    display: block;
    box-sizing: border-box;

    --app-drawer-width: 256px;

    --app-primary-color: #CC0033;
    --app-secondary-color: #4A4A4A;
    --app-dark-text-color: var(--app-secondary-color);
    --app-light-text-color: white;
    --app-section-even-color: #f7f7f7;
    --app-section-odd-color: white;
    --app-section-border: 1px solid lightgray;

    --app-header-background-color: white;
    --app-header-text-color: var(--app-dark-text-color);
    --app-header-selected-color: var(--app-primary-color);

    --app-drawer-background-color: var(--app-secondary-color);
    --app-drawer-text-color: var(--app-light-text-color);
    --app-drawer-selected-color: #78909C;

    --app-ecosystem-background-color-primary: #B3002D;
    --app-ecosystem-light-text-color-button: #54565A;

    --app-frequent-questions-secondary-color: #484848;
    --app-frequent-questions-border-color: #969696;
    --app-frequent-questions-background-color: #F8F9F9;
  }

  section {
    background: var(--app-background-color, #fff);
    padding:0;
    font-size: var(--app-paragraph-font-size-mobile, 16px);
  }

  section h1.title.section-header {
    text-transform: uppercase;
    font-size: var(--app-title-font-size-mobile, 18px);
    white-space: nowrap;
    margin: 0;
    padding: 15px 18px;
    box-sizing: border-box;
  }

  section h1.section-header::before {
    content: "/";
    color: var(--app-primary-color, #CC0033);
    font-weight: var(--app-font-weight-extrabold, 900);
  }

  section > * {
    margin-right: auto;
    margin-left: auto;
  }

  h2 {
    font-size: var(--app-subtitle-font-size, 24px);
    text-align: center;
    color: var(--app-dark-text-color);
  }

  h1 {
    font-size: var(--app-subtitle-font-size, 24px);
  }

  .primary-button {
    background: var(--app-button-primary-color, red);
    border-radius: 6px;
    padding: 8px;
    border: none;
    color: var(--app-light-text-color, white);
    letter-spacing: 0;
    text-align: center;
    cursor: pointer;
    font-family: inherit;
    text-decoration: none;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, .5);
  }

  .primary-button:active {
    background-color: var(--app-primary-color, red);
  }

  .primary-button.big {
    height: 48px;
    width: 275px;
    font-weight: var(--app-font-weight-bold, 700);
    font-size: 16px;
    text-decoration: none;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }

  .toggle-bar {
    text-align: initial;
    width: 24px;
    height: 2px;
    background: #fff;
    position: relative;
    top: 10px;
    margin: 0 auto;
  }

  .toggle-bar:before,
  .toggle-bar:after {
    width: 24px;
    height: 2px;
    background: #fff;
    content: '';
    position: absolute;
  }

  .toggle-bar:before {
    top: -9px;
  }

  .toggle-bar:after {
    top: 9px;
  }
          
  .toggle-bar,
  .toggle-bar:before,
  .toggle-bar:after {
    transition: all 0.35s;
  }

  h1:focus,
  h2:focus,
  h3:focus,
  h4:focus,
  h5:focus,
  h6:focus,
  section:focus,
  p:focus,
  div:focus
  {
    outline: none;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: var(--app-title-font-size-desktop, 32px);
    }

    h2 {
      font-size: 36px;
    }

    .primary-button:hover {
      background-color: var(--app-primary-color, red);
    }
    
    section h1.title.section-header {
      font-size: var(--app-title-font-size-desktop, 32px);
      padding: 26px 120px;
    }
  }
`;
