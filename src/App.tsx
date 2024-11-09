import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { getTodos, addTodo, updateTodo, deleteTodo } from './api/todos';
import { Todo } from './types';

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
        const todo = todos.find(todo => todo.id === id);
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
        </div>
    );
};

export default App;
