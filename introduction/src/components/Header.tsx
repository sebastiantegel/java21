import React, { useState } from "react";
import { Greeting } from "./Greeting";

export function Header() {
  //   let name: string = "Sebastian";
  const [name, setName] = useState<string>("Sebastian");

  function handleChange() {
    // name = "Hanna";
    if (name === "Sebastian") {
      setName("Hanna");
    } else {
      setName("Sebastian");
    }
  }

  //   console.log(name);
  return (
    <>
      <div>Hej: {name}</div>
      <button onClick={handleChange}>Ändra namn</button>

      <Greeting name={name} />
    </>
  );
}
