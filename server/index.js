import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
dotenv.config();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const mongodb = "mongodb+srv://first-user:swapnil123@cluster0.t01a9.mongodb.net/mern-todo-app?retryWrites=true&w=majority";