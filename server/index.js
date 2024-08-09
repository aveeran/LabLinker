import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();
const app = express();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("connected to database"))
.catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

