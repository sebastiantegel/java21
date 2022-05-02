import { createContext } from "react";

export interface ITheme {
  name: string;
  color: string;
  background: string;
  toggleTheme(): void;
}

interface IThemes {
  dark: ITheme;
  light: ITheme;
}

export const themes: IThemes = {
  dark: {
    name: "Dark",
    color: "white",
    background: "black",
    toggleTheme: () => {},
  },
  light: {
    name: "Light",
    color: "black",
    background: "white",
    toggleTheme: () => {},
  },
};

export const ThemeContext = createContext(themes.light);
