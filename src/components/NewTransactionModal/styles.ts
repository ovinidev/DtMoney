import { styled } from '../../styles/stitches.config'

export const Container = styled('form', {
  h2: {
    width: '100%',
    fontSize: '$24',
    color: '#363F5F',
    marginBottom: '32px',
  },

});

export const Input = styled('input', {
  height: '64px',
  width: '100%',
  background: '#E7E9EE',
  border: '1px solid #D7D7D7',
  borderRadius: '$1',
  marginBottom: '1rem',
  padding: '0 1.5rem',

  color: '#969CB2',

  '&:focus': {
    outline: 'none',
  },

  '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
  }

});

export const Button = styled('button', {
  width: '100%',
  height: '64px',
  border: '1.8px solid #D7D7D7',
  borderRadius: '$1',
  background: '#F0F2F5',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  transition: 'filter 0.3s ease-in',

  '&:hover': {
    filter: 'brightness(0.9)'
  },

  span: {
    marginLeft: '18px',
    color: '#363F5F',
    fontSize: '$16',
    fontWeight: 'normal'
  },

  variants: {
    register: {
      true: {
        background: '#33CC95',
        color: '#FFFFFF',
        fontSize: '$16',
        fontWeight: 600
      }
    },
    margin: {
      true: {
        marginRight: 8,
      }
    },
    close: {
      true: {
        position: 'absolute',
        top: '1.5rem',
        right: '1.5rem',

        width: '14px',
        height: '14px',
        background: 'none',
        border: 'none',

        '&:hover': {
          filter: 'brightness(0.4)'
        },
      }
    },
    color: {
      green: {
        '&:focus': {
          background: '#12A454',
          opacity: 0.1,
        }
      },
      red: {
        '&:focus': {
          background: '#E62E4D',
          opacity: 0.1,
        }
      },
    }
  }

});

export const ButtonContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',

  marginBottom: '16px',

  button: {
    '&:hover': {
      borderColor: '#969CB3',
      background: '#F0F2F5',
      filter: 'none',
      transition: '0.5s ease-in',
    },
  },
});
