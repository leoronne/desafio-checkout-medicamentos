import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-primary: #00b9d8;
    --color-primary-lighter: #6cdcef;
    --color-primary-dark: #00aac6;

    --color-secondary: #00d39c;

    --font-family: 'Roboto', sans-serif;
    --transition: 0.3s ease-in-out !important;
    --transition-slow: 0.6s ease-in-out !important;
    --body-background: linear-gradient(to top left, var(--color-primary-dark) 0%, var(--color-primary-lighter) 135%);
    --body-background-secondary: var(--color-secondary);

    --grey: #ffe5e5;

    --scrol-thumb: #333;
    --scrol-bg: #89777a;

    --placeholder-color: #a7a8a9;
    --border-color: #a7a8a9;

    --disabled: #9e9e9e;
    --text-color: #707070;
    --text-color-dark: #222;


    --menu-hover: #787777;
    --menu-background: #35373a;
    --box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.16);

    --card-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);

    --border-radius: 8px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    outline: none !important;
    /* transition: all var(--transition); */
  }

  html, body, #root {
    scroll-behavior: smooth;
    font-family: var(--font-family);
    background: var(--body-background);
  }

  #root {
    height: 100vh;
    overflow-y: auto;
  }

  hr {
    margin: 15px 0;
    border: 1px solid var(--color-primary-lighter);
    width: 100%;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--scrol-bg);
    border-radius: var(--border-radius);
    transition: var(--transition);
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--scrol-thumb);
    transition: var(--transition);
  }

  a {
    transition: filter var(--transition);
    outline: none;
  }

  a:hover{
    transition: filter var(--transition);
    filter: brightness(1.01);
    outline: none;
  }


  .CookieConsent{
    border-radius: var(--border-radius);
    bottom: 25px !important;
    width: 80% !important;
    left: 10% !important;
    box-shadow: var(--card-box-shadow);

    background-color: #fff !important;
    color: var(--text-color) !important;

    align-items: center !important;

    h2 {
      font-size: 16px;
      font-weight: 600;
      margin: 0 !important;
      padding: 0 !important;
    }

    .cookie-subtitle {
      font-size: 12px !important;
      line-height: 14px !important;
    }

    #rcc-confirm-button{
      background-color: transparent !important;
      border: 1px solid var(--color-primary) !important;
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      background: transparent !important;
      outline: 0 !important;
      border-radius: var(--border-radius) !important;
      font-family: var(--font-family) !important;
      font-size: 14px !important;
      color: var(--color-primary) !important;
      height: 40px !important;
      cursor: pointer !important;
      font-weight: 500 !important;
      transition: var(--transition-slow) !important;
      &:hover {
        transition: var(--transition-slow) !important;
        background: var(--color-primary) !important;
        color: white !important;
      }
    }
  }

    .navigation-links {
      text-decoration: none;
      color: var(--color-primary-dark);
      text-decoration: none;
      font-weight: 500;
      transition: var(--transition);
      position: relative;
    }

    .navigation-links:before {
      content: '';
      position: absolute;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--color-primary-dark);
      visibility: hidden;
      transition: all var(--transition);
      width: 0;
    }

    .navigation-links:hover:before {
      visibility: visible;
      width: 100%;
    }

    .navigation-links:hover {
      transition: var(--transition);
    }
`;
