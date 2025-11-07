import { useState, useRef } from "react";
import { type Todo } from "./types";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import "./App.css";

export default function App() {
  // 초기 데이터
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "코딩 테스트 문제 연습", done: false },
    { id: 2, text: "치과 진료", done: true },
    { id: 3, text: "피아노 레슨", done: false },
    { id: 4, text: "개발 동아리 모임", done: false },
  ]);

  // useRef: 리렌더링되어도 값이 유지되는 변수
  // 새로운 할 일 추가 시 고유한 id 부여
  const nextId = useRef(5);

  // 할 일 추가 핸들러
  const handleAdd = (text: string) => {
    setTodos((prev) => [
      ...prev,
      { id: nextId.current++, text, done: false },
    ]);
  };

  // 완료 상태 토글 핸들러
  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // 할 일 삭제 핸들러
  const handleRemove = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <TodoTemplate>
      <h1>Todo List</h1>
      <TodoInsert onAdd={handleAdd} />
      <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
    </TodoTemplate>
  );
}