import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    background: '$background',
    webkitFontSmoothing: 'antialiased',
  },

  html: {
    scrollBehavior: 'smooth',
  },

  button: {
    cursor: 'pointer',
  },

  ['disabled']: {
    opacity: 0.6,
    cursor: 'not-allowed'
  },

  '@media(max-width: 1080px)': {
    html: {
      fontSize: '93.75%', // 15px
    },
  },

  '@media(max-width: 720px)': {
    html: {
      fontSize: '87.5%', // 14px
    },
  },

});
