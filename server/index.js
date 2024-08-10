import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import { UserModel } from "./models/User.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true
}));

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("connected to database"))
.catch(err => console.log(err));


app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        UserModel.create({
            name, 
            email,
            password: hash
        })
        .then(user => res.json({status: 200}))
        .catch(err => res.json(err));
    })
    .catch(err => res.json(err));
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
    .then(user => {
        if(user) {
            bcrypt.compare(password, user.password, (err, response) => {
                if(response) {
                    const token = jwt.sign({email: user.email, role: user.role},
                        "get-better-secfret-key", {expiresIn: '1d'})
                    res.cookie('token', token);
                    return res.json({status: 200, role: user.role});
                    
                } else {
                    return res.json("The password is incorrect");
                }
            });
        } else {
            return res.json("No record exists");
        }
    })
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

