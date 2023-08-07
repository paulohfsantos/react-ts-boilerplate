import { FC, PropsWithChildren, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { themeChange } from "theme-change";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const themeList = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
  ];

  const [themes, setThemes] = useState<string[]>(themeList);

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <ThemeContext.Provider value={{ themes, setThemes }}>
      {children}
    </ThemeContext.Provider>
  );
}