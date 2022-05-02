import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export function Button() {
  let theme = useContext(ThemeContext);

  return (
    <button
      style={{ color: theme.color, backgroundColor: theme.background }}
      onClick={theme.toggleTheme}
    >
      {theme.name}
    </button>
  );
}
