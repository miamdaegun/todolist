import { useState, type FormEvent, type ChangeEvent } from "react";
import "./TodoInsert.css";

interface TodoInsertProps {
  onAdd: (text: string) => void;
}

export default function TodoInsert({ onAdd }: TodoInsertProps) {
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 페이지 새로고침 방지
    const text = value.trim();
    if (!text) return;

    onAdd(text); // 상위 컴포넌트의 handleAdd 호출
    setValue(""); // 입력창 초기화
  };

  return (
    <form className="todo-insert" onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="할 일을 입력하고 Enter"
      />
      <button type="submit">추가</button>
    </form>
  );
}