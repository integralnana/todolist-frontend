
import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../types';

interface Props {
    todos: Todo[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoList: React.FC<Props> = ({ todos, onToggle, onDelete }) => (
    <ul className="todo-list">
        {todos.map(todo => (
            <TodoItem 
                key={todo.id} 
                todo={todo} 
                onToggle={onToggle} 
                onDelete={onDelete}
            />
        ))}
    </ul>
);

export default TodoList;
