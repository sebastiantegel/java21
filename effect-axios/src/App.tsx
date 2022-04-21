import "./App.css";
import { Movies } from "./components/Movies/Movies";
import { ShowingEffect } from "./components/ShowingEffects";

function App() {
  return (
    <div className="App">
      <Movies></Movies>
      <ShowingEffect></ShowingEffect>
    </div>
  );
}

export default App;
