import React, { useState } from "react";

interface Props {
  onAddTodo: (title: string) => void;
}

const TodoForm: React.FC<Props> = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTodo(title);
      setTitle("");
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="เพิ่มรายการ"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">เพิ่ม</button>
    </form>
  );
};

export default TodoForm;
