import { styled } from '../../styles/stitches.config'

export const Container = styled("div", {
  width: '22rem',
  height: '8.5rem',
  background: '#ffffff',
  color: '$title',
  borderRadius: '$1',

  display: 'flex',
  alignItems: 'left',
  flexDirection: 'column',

  padding: '1.563rem 1.292rem 0 2rem',

  '@bp3': {
    width: '20rem',
  },
  
  variants: {
    color: {
      green: {
        background: '$secondary',
        color: '#ffffff'
      }
    },
    margin: {
      true: {
        margin: '0 2rem',
        '@bp3': {
          margin: '0 1rem',
        }
      }
    }
  },

})

export const Header = styled("header", {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const Logo = styled("img", {
  
})

export const Text = styled("p", {
  fontSize: '$16',
})

export const Value = styled("strong", {
  padding: '0.4rem 0 0 0',
  fontSize: '$36',
  fontWeight: 500,


  '@bp3': {
    fontSize: '$20',

  }
})

