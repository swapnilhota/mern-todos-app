import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
dotenv.config();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const mongodb = "mongodb+srv://first-user:mongodb@cluster0.t01a9.mongodb.net/mern-todo-app?retryWrites=true&w=majority";

app.get('/', (req, res) => {
    res.send("Welcome to the Server");
})

const PORT = process.env.PORT || 3000;

mongoose.connect(mongodb, { useUnifiedTopology: true }, { useNewUrlParser: true })
    .then(() => {
        console.log(`server is running on port ${PORT}`);
    })
    .catch((err) => {
        console.log(err);
    })

app.listen(PORT);