import { styled } from '../../styles/stitches.config'

export const Container = styled("div", {
  marginTop: '4rem',

  '@bp3': {
    marginTop: '2rem',
  },

  table: {
    width: '100%',
    borderSpacing: '0 0.5rem',

    th: {
      color: '$text',
      fontWeight: '400',
      padding: '1.25rem 2rem',
      textAlign: 'left',
      lineHeight: '1.5rem',

      '@bp3': {
        padding: '0 0.5rem 0 0.5rem',
        fontSize: '$14',
      }
    },

  }
});

export const Td = styled("td", {
  padding: '1.25rem 2rem',
  border: 'none',
  background: '$shape',
  borderRadius: '0.25rem',
  color: '$text',

  '&:first-child': {
    color: '$titleSecondary'
  },

  '@bp3': {
    padding: '2.5rem 0.5rem',
    fontSize: '$14'
  },

  variants: {
    state: {
      deposit: {
        color: '$secondary',
      },
      withdraw: {
        color: '$tertiary',
      }
    },

  }
})


