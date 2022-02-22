import { styled } from '../../styles/stitches.config'

export const Container = styled("header", {
  background: '$primary',
  position: 'relative',
})

export const Content = styled("div", {
  maxWidth: '70rem',
  margin: '0 auto',
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '2rem 0 8rem',
})

export const Logo = styled("img", {
  
})

export const Button = styled("button", {
  fontSize: '$16',
  color: '#ffffff',
  height: '3rem',
  width: '12.188rem',
  background: '#6933FF',
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '$1',
  border: 'none',
  
  transition: 'filter 0.3s ease-in',

  '&:hover': {
    filter: 'brightness(0.9)'
  }
})