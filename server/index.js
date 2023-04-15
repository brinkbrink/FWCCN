const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/users');
const dotenv = require('dotenv');
dotenv.config();

// Middleware
app.use(express.json());
const cors = require('cors');
app.use(cors());

// Connect to MongoDB
const db_username = process.env.MONGO_DB_USERNAME;
const db_password = process.env.MONGO_DB_PASSWORD;
const db_url = process.env.MONGO_DB_URL;
const uri = `mongodb+srv://${db_username}:${db_password}@${db_url}/FWCCN?retryWrites=true&w=majority`;
mongoose.connect(uri);
//TODO: change code here
app.get("/getUsers", (req, res) => {
    UserModel.find({})
        .then((data) => {
            res.json(data);
        }
    );
});

app.post("/createUser", async (req, res) => {
    const newUser = new UserModel(req.body);
    await newUser.save()
        .then((data) => {
            res.json(data);
        }
    );
});

// Do not change code below
app.listen(3001, () => {
    console.log('Server is running on 3001');
});