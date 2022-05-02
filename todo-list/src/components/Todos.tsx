import { useEffect, useState } from "react";
import { Todo } from "../models/Todo";
import { AddTodo } from "./AddTodo";
import { PrintTodo } from "./PrintTodo";

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Handla"),
    new Todo("Träna"),
  ]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos") || "[]"));
  }, []);

  function saveToLs(todos: Todo[]) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function toggleTodo(todo: Todo) {
    todo.done = !todo.done;
    saveToLs([...todos]);
    setTodos([...todos]);
  }

  function removeTodo(i: number) {
    let todosAfterRemove = [...todos];
    todosAfterRemove.splice(i, 1);

    saveToLs([...todosAfterRemove]);
    setTodos([...todosAfterRemove]);
  }

  function addTodo(text: string) {
    saveToLs([...todos, new Todo(text)]);
    setTodos([...todos, new Todo(text)]);
  }

  return (
    <>
      <div>
        <AddTodo add={addTodo}></AddTodo>
      </div>
      <ul>
        {todos.map((todo, i) => {
          return (
            <PrintTodo
              todo={todo}
              toggle={toggleTodo}
              remove={removeTodo}
              i={i}
              key={i}
            ></PrintTodo>
          );
        })}
      </ul>
    </>
  );
};
