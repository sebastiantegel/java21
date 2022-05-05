import { useState } from "react";
import { Todo } from "../models/Todo";
import { AddTodo } from "./AddTodo";

export function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(newTodoText: string) {
    setTodos([...todos, new Todo(newTodoText)]);
  }

  //   function someOtherFunction(i: number): string {
  //     return "Testing";
  //   }

  console.log(todos);

  return (
    <>
      <AddTodo add={addTodo}></AddTodo>
      {/* <AddTodo add={addTodo} other={someOtherFunction}></AddTodo> */}
    </>
  );
}
