import { createContext } from "react";

type ThemeContextType = {
  themes: string[];
  setThemes: (themes: string[]) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  themes: [],
  setThemes: () => {},
});