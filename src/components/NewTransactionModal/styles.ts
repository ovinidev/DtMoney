import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$primary',

  width: '480px',
  margin: '0 auto',

  h2: {
    width: '100%',
    fontSize: '$24',
    color: '#363F5F',
    margin: '44px 0 32px 0',
  }
});

export const ModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',

    background: '#F0F2F5',
    
    height: '588px',
    width: '576px',
  },
};

export const Input = styled('input', {
  height: '64px',
  width: '100%',
  background: '#E7E9EE',
  border: '1px solid #D7D7D7',
  borderRadius: '$1',
  marginBottom: '16px',
  paddingLeft: '24px',
  
  color: '#969CB2',

  '&:focus': {
    outline: 'none',
  },

  '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
  }

});

export const Form = styled('form', {

});

export const Button = styled('button', {
  width: '236px',
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

  h3: {
    marginLeft: '18px',
    color: '#363F5F',
    fontSize: '$16',
    fontWeight: 'normal'
  },

  variants: {
    register: {
      true: {
        width: '100%',
        background: '#33CC95',
        color: '#FFFFFF',
        fontSize: '$16',
        fontWeight: 600
      }
    }
  }

});

export const ButtonContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',

  marginBottom: '16px',

});