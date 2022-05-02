import { useState } from "react";
import "./App.css";
import { Page } from "./components/Page";
import { ITheme, ThemeContext, themes } from "./contexts/ThemeContext";

function App() {
  const [theme, setTheme] = useState<ITheme>(themes.light);

  theme.toggleTheme = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <Page></Page>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
