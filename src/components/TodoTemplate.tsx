import React from "react";
import "./TodoTemplate.css";

export default function TodoTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="todo-template">{children}</div>;
}