import { useState } from "react";
import "./ListOfNumbers.css";

export function ListOfNumbers() {
  const [numbers, setNumbers] = useState<number[]>([1, 1, 2, 3, 5, 8, 13, 21]);

  let liTags = numbers.map((currentNumber, index) => {
    return <li key={index}>{currentNumber}</li>;
  });

  return <ul>{liTags}</ul>;
}
