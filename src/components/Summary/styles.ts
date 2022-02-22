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

  padding: '1.563rem 0 0 2rem',
  
  variants: {
    color: {
      green: {
        background: '$secondary',
        color: '#ffffff'
      }
    },
    margin: {
      true: {
        margin: '0 2rem'
      }
    }
  }
})

export const Text = styled("p", {
  fontSize: '$16',
})

export const Value = styled("strong", {
  padding: '0.875rem 0 0 0',
  fontSize: '$36',
  fontWeight: 500,
})

