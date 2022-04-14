import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <span>{count}</span>
      <button onClick={handleClick}>Öka</button>
    </>
  );
}
