import express, { json } from 'express';
import router from './Routes/index.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors'


const app = express();
dotenv.config();
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log("hi from middleware use")
    // res.send("hi from middleware use")
    next();
})

app.use("/api/v1", router)

mongoose.connect(process.env.MONGOURL).then(() => console.log("Database connected."))

app.listen(8000, () => console.log("App is running on port 8000."))

// http://localhost:8000/api/v1/auth/login

// /api/v1/


// /Auth

// /login
// /register


// /Product
// /users
// /admin 