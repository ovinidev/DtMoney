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
      shape: '',
      title: '',
      text: '',
      background: '#F0F2F5',
    },
    space: {
    },
    fontSizes: {
      12: '0.75rem',
      14: '0.875rem',
      16: '1rem', 
      20: '1.25rem',
      24: '1.5rem', 
      30: '1.875rem',
      36: '2.25rem'
    },

    fonts: {

    },
    media: {},
    fontWeights: {},
    lineHeights: {
      1: '2px',
    },
    letterSpacings: {},
    sizes: {

    },
    borderWidths: {
    },
    borderStyles: {
    },
    radii: {
      1: '5px',
    },
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});
