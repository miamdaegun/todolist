import { type Todo } from "../types";
import "./TodoItem.css";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  return (
    <li className="todo-item">
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />
        <span className={todo.done ? "completed" : ""}>{todo.text}</span>
      </div>
      <button className="delete-btn" onClick={() => onRemove(todo.id)}>
        ✕
      </button>
    </li>
  );
}