import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Arial, sans-serif',
  },

  html: {
    fontSize: '62.5%',
    scrollBehavior: 'smooth',
  },

  button: {
    cursor: 'pointer',
  },

  '@media(min-width: 1366px)': {
    html: {
    },
  },

  '@media(min-width: 1920px)': {
    html: {
    },
  },

});
