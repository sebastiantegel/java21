import { Todo } from "../models/Todo";
import "./PrintTodo.css";

interface ITodoProps {
  todo: Todo;
  toggle(todo: Todo): void;
  remove(i: number): void;
  i: number;
}

export const PrintTodo = (props: ITodoProps) => {
  function handleToggle() {
    props.toggle(props.todo);
  }

  let liHtml = <></>;
  if (props.todo.done) {
    liHtml = (
      <li className="done">
        <span onClick={handleToggle}>{props.todo.text}</span> -{" "}
        <button
          onClick={() => {
            props.remove(props.i);
          }}
        >
          Ta bort
        </button>
      </li>
    );
  } else {
    liHtml = (
      <li>
        <span onClick={handleToggle}>{props.todo.text}</span> -{" "}
        <button
          onClick={() => {
            props.remove(props.i);
          }}
        >
          Ta bort
        </button>
      </li>
    );
  }

  return liHtml;
};
