import { useEffect, useState } from "react";

export function ShowingEffect() {
  const [show, setShow] = useState(true);
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    if (show) {
      document.title = "Hej";
    } else {
      document.title = "då";
    }

    console.log("Running useEffect when show change:", show);
  }, [show]);

  useEffect(() => {
    console.log("Running useEffect when data change:", data);
  }, [data]);

  function handleTitleChange() {
    setShow(!show);
  }

  return (
    <>
      Showing Effects work
      <button onClick={handleTitleChange}>Ändra titel</button>
    </>
  );
}
