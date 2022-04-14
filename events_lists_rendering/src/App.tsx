import React from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { ListOfNumbers } from "./components/ListOfNumbers";
import { Loader } from "./components/Loader";
import { Register } from "./components/Register";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Register></Register>
      <Loader></Loader>
      <ListOfNumbers></ListOfNumbers>
    </div>
  );
}

export default App;
