import { ChangeEvent, useState } from "react";

interface IAddTodoProps {
  add(text: string): void;
  //   other(n: number): string;
}

export function AddTodo(props: IAddTodoProps) {
  const [todoText, setTodoText] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setTodoText(e.target.value);
  }

  function handleClick() {
    props.add(todoText);
    // const result = props.other(4711);
    // console.log(result);
  }

  return (
    <>
      <input value={todoText} onChange={handleChange} />
      <button onClick={handleClick}>Spara</button>
    </>
  );
}
