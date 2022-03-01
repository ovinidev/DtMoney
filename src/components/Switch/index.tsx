import { Switch } from 'antd';
import { useTheme } from '../../hooks/useTheme';
import { Container } from './styles';

export const SwitchTheme = () => {
  const { handleThemeMode } = useTheme();
  
  return (
    <Container>
      <Switch onChange={handleThemeMode} />
    </Container>
  )
};