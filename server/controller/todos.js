import mongoose from 'mongoose';
import Todo from '../models/todos.js';

export const readTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

export const createTodos = async (req, res) => {
    const todo = new Todo(req.body);
    try {
        await todo.save();
        res.status(201).json(todo);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

export const deleteTodo = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`The id ${id} is not valid`);
    }

    await Todo.findByIdAndRemove(id);
    res.json({ message: 'Todo deleted successfully' });
}