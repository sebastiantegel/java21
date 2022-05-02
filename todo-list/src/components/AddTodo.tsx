import { ChangeEvent, useState } from "react";

interface IAddTodoProps {
  add(text: string): void;
}

export const AddTodo = (props: IAddTodoProps) => {
  const [newTodo, setNewTodo] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setNewTodo(e.target.value);
  }

  function handleClick() {
    props.add(newTodo);
  }

  return (
    <div>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button onClick={handleClick}>Lägg till</button>
    </div>
  );
};
