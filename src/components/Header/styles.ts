import { styled } from '../../styles/stitches.config'

export const Container = styled("header", {
  background: '$primary',
  height: '13.25rem',
})

export const Content = styled("div", {
  maxWidth: '70rem',
  margin: '0 auto',
  paddingTop: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@bp3': {
    maxWidth: '24rem'
  }
})

export const Logo = styled("img", {
  '@bp3': {
    width: '135px'
  },
})

export const Button = styled("button", {
  fontSize: '$16',
  color: '#ffffff',
  height: '3rem',
  width: '12.188rem',
  background: '$button',
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '$1',
  border: 'none',
  
  transition: 'filter 0.3s ease-in',

  '&:hover': {
    filter: 'brightness(0.9)'
  },

  '@bp3': {
    width: '130px',
    fontSize: '$14',
    fontWeight: 600,
  }
})

export const ButtonContainer = styled("div", {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})