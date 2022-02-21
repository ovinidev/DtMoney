import { ThemeProvider } from "./styles";
import { globalStyles } from "./styles/global";
import { dark } from './styles/themes/dark';
import { light } from './styles/themes/light';

export function App() {

  return (
    <ThemeProvider className={light}>
      {globalStyles()}
    </ThemeProvider>
  )
}
