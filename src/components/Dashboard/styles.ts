import { styled } from '../../styles/stitches.config'

export const Container = styled("main", {
})

export const Content = styled("div", {
  maxWidth: '70rem',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',

  '@bp3': {
    maxWidth: '24rem'
  }
})

export const SummaryContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '-4.35rem',

  '@bp3': {
    overflowX: 'scroll',
    display: 'grid',
    justifyContent: 'normal',
    gridTemplateColumns: 'repeat(3, 1fr)',
  }
})

