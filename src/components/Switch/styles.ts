import { styled } from '../../styles/stitches.config'
import 'antd/dist/antd.css';

export const Container = styled("div", {
  button: {
    backgroundColor: '$secondary',
    marginRight: '1.5rem',

    '@bp3': {
      marginRight: '0.5rem'
    }
  }
})