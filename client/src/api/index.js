import axios from 'axios';
const url = 'http://localhost:3000/todos';

export const readTodos = () => axios.get(url);

export const createTodo = (newTodo) => axios.post(url, newTodo);

export const deleteTodo = (id) => axios.delete(`${url}/${id}`);