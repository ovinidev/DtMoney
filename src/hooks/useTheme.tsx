import { ThemeTokens } from "@stitches/react/types/stitches";
import { createContext, ReactNode, useContext, useState } from "react";

import { light } from "../styles/themes/light";
import { dark } from "../styles/themes/dark";

type ThemeContextData = {
  theme: string;
  handleThemeMode: () => void,
};

type ThemeProviderProps = {
  children: ReactNode
}

const ThemeContext = createContext({} as ThemeContextData);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>(light);

  const handleThemeMode = () => {
    setTheme(theme === light ? dark : light);
  }

  return (
    <ThemeContext.Provider
      value={{ theme, handleThemeMode }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const theme = useContext(ThemeContext);

  return theme;
}