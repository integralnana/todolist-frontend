// src/components/TodoItem.tsx

import React from 'react';
import { Todo } from '../types';

interface Props {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete }) => {
    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span onClick={() => onToggle(todo.id)} style={{ cursor: 'pointer' }}>
                {todo.title}
            </span>
            <button onClick={() => onDelete(todo.id)}>ลบ</button>
        </li>
    );
};

export default TodoItem;
