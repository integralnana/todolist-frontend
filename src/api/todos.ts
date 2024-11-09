import axios from 'axios';

const API_URL = 'http://localhost:5000/api/todos';

export const getTodos = async () => await axios.get(API_URL);
export const addTodo = async (title: string) => await axios.post(API_URL, { title });
export const updateTodo = async (id: number, completed: boolean) => await axios.put(`${API_URL}/${id}`, { completed });
export const deleteTodo = async (id: number) => await axios.delete(`${API_URL}/${id}`);
