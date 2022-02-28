import { styled } from '../../styles/stitches.config'

export const Container = styled("div", {
  marginTop: '4rem',

  table: {
    width: '100%',
    borderSpacing: '0 0.5rem',

    th: {
      color: '$text',
      fontWeight: '400',
      padding: '1.25rem 2rem',
      textAlign: 'left',
      lineHeight: '1.5rem',
    },
  }
})

export const Td = styled("td", {
  padding: '1.25rem 2rem',
  border: 'none',
  background: '$shape',
  borderRadius: '0.25rem',
  color: '$text',

  '&:first-child': {
    color: '$titleSecondary'
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


