import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { useTheme } from "./hooks/useTheme";
import { ThemeProvider } from "./styles";
import { globalStyles } from "./styles/global";

import { light } from './styles/themes/light';

export function App() {
  const { theme } = useTheme();

  var $body = document.querySelector('body') as HTMLBodyElement;

  if (theme === light) {
    $body.style.background = '#F0F2F5'
  } else {

    $body.style.background = '#0F0235'
  };

  return (
    <ThemeProvider className={theme}>
      {globalStyles()}
      <Header />
      <Dashboard />
      <NewTransactionModal />
    </ThemeProvider>
  )
}
