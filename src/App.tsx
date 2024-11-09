import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { getTodos, addTodo, updateTodo, deleteTodo } from "./api/todos";
import { Todo } from "./types";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const response = await getTodos();
    setTodos(response.data);
  };

  const handleAddTodo = async (title: string) => {
    await addTodo(title);
    fetchTodos();
  };

  const handleToggleTodo = async (id: number) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      await updateTodo(id, !todo.completed);
      fetchTodos();
    }
  };

  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <ul className="todo-list">
        <TodoList
          todos={todos}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
        />
      </ul>
      <div className="inst">
        <p>ระบบจะใช้ Get Method เพื่อดึงข้อมูลในตารางมาแสดงผล</p>
        <p>กดเพิ่มข้อมูลเพื่อใช้ Post Method สร้างข้อมูลในตาราง todo</p>
        <p>
          กดที่ข้อความในรายการเพื่อใช้ Put Method
          ขีดฆ่าข้อความและแก้ไขข้อมูลในตาราง(ค่า complete เป็น 1
          แสดงถึงรายการเสร็จสิ้นแล้ว)
        </p>
        <p>กดลบข้อมูลเพื่อใช้ Delete Method ลบข้อมูลในตาราง</p>
      </div>
    </div>
  );
};

export default App;
