import { createStitches } from '@stitches/react';

export const {
  styled,
  globalCss,
  createTheme,
} = createStitches({
  utils: {
    // Abbreviated margin properties
    m: (value: string | number) => ({
      margin: value,
    }),
    mt: (value: string | number) => ({
      marginTop: value,
    }),
    mr: (value: string | number) => ({
      marginRight: value,
    }),
    mb: (value: string | number) => ({
      marginBottom: value,
    }),
    ml: (value: string | number) => ({
      marginLeft: value,
    }),
    mx: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // A property for applying width/height together
    size: (value: string | number) => ({
      width: value,
      height: value,
    }),

    // A property to apply linear gradient
    linearGradient: (value: string | number) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    // An abbreviated property for border-radius
    br: (value: string | number) => ({
      borderRadius: value,
    }),
  },
  theme: {
    colors: {
      primary: '',
      secondary: '',
      tertiary: '',
      quaternary: '',
      black: '',
      white: '',
    },
    space: {
      1: '2rem',
      2: '4rem',
      3: '6rem',
      4: '8rem',
    },
    fontSizes: {
      1: '1.1rem',
      2: '1.4rem',
      3: '1.6rem',
      4: '2.4rem',
    },

    fonts: {
      default: 'Sans, apple-system, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    media: {},
    fontWeights: {},
    lineHeights: {
      1: '2px',
    },
    letterSpacings: {},
    sizes: {
      1: '2rem',
      2: '2rem',
    },
    borderWidths: {
      1: '5px',
    },
    borderStyles: {
      1: '5px',
    },
    radii: {
      1: '6px',
    },
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});
