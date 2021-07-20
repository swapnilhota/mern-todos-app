import mongoose from 'mongoose';
import Todo from '../models/todos';

export const readTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}