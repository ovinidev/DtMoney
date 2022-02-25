import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsContextProvider } from "./contexts/TransactionsContext";
import { ThemeProvider } from "./styles";
import { globalStyles } from "./styles/global";

import { dark } from './styles/themes/dark';
import { light } from './styles/themes/light';

export function App() {

  return (
    <TransactionsContextProvider>
      <ThemeProvider className={light}>
        {globalStyles()}
        <Header />
        <Dashboard />
        <NewTransactionModal />
      </ThemeProvider>
    </TransactionsContextProvider>
  )
}
