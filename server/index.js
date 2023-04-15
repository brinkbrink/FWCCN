const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/users');
app.use(express.json());
const cors = require('cors');
app.use(cors());

// Connect to MongoDB
const uri = `mongodb+srv://tinpham5614:Washington5614@cluster0.redefo6.mongodb.net/FWCCN?retryWrites=true&w=majority`;
mongoose.connect(uri);

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


//MongooseError: Model.find() no longer accepts a callback

app.listen(3001, () => {
    console.log('Server is running on 3001');
});