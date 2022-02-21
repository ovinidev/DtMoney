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

  'body, input, textarea, button' : {
    fontFamily: '$primary',
    fontWeight: 400
  },

  'h1, h2, h3, h4, h5, h6, strong': {
    fontWeight: 600
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
