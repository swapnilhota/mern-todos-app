import express from 'express';
import { createTodos, readTodos } from '../controller/todos';

const router = express.Router();

router.get('/', readTodos);
router.post('/', createTodos);