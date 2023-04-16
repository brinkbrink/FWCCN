const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const ApplicantModel = require('./models/Applicants');
const cors = require('cors');

app.use(express.json());
app.use(cors());

dotenv.config()
// Replace the uri string with your connection string.
const db_username = process.env.MONGO_DB_USERNAME;
const db_password = process.env.MONGO_DB_PASSWORD;
const db_url = process.env.MONGO_DB_URL;
const uri = `mongodb+srv://${db_username}:${db_password}@${db_url}?retryWrites=true&w=majority`;

mongoose.connect(uri);


//can also use routes for the following
app.get("/getApplicants", (req, res) => {
    ApplicantModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
})

//TODO: test/fix endpoints...model.find no longer accepts a callback error

app.post("/createApplicants", async (req, res) => {
    const applicant = req.body;
    const newApplicant = new ApplicantModel(applicant);
    await newApplicant.save();
})


app.get("/getApplicants", async (req,res) => {
    try {
        await client.connect();
        const result = await ApplicantModel.find({});
        res.type('json');
        res.status(200);
        res.json(result);
    } catch (error) {
      console.log(error)  
    } finally {
        await client.close();
    }
});

app.get("/", async (req,res) => {
    res.send("hello")
});

app.listen(3001, () => {
    console.log("server is running")

});