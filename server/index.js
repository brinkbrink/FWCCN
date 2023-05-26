// This file is used to create the main server file
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const ApplicantModel = require('./models/Applicants');
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use('/eligibility', require('./routes/eligibility')); //import eligibility.js
const { validateApplicant } = require('./routes/validation');



dotenv.config()
// Replace the uri string with your connection string.
const db_username = process.env.MONGO_DB_USERNAME;
const db_password = process.env.MONGO_DB_PASSWORD;
const db_url = process.env.MONGO_DB_URL;
const uri = `mongodb+srv://${db_username}:${db_password}@${db_url}?retryWrites=true&w=majority`;

mongoose.connect(uri);

// This is the endpoint that will be used to create a new applicant
app.post("/createApplicants", validateApplicant, async (req,res) => {
    try {
        const applicant = new ApplicantModel(req.body);
        const result = await applicant.save();
        res.type('json');
        res.status(200);
        res.json({applicant: result});
        console.log("Applicant created successfully");
    }
    catch (error) {
        console.log(error)
    }
});

// This is the endpoint that will be used to get all applicants
app.get("/getApplicants", async (req,res) => {
    try {
        const result = await ApplicantModel.find({});
        res.type('json');
        res.status(200);
        res.json(result);
    } catch (error) {
        console.log(error)  
    }
});

app.get("/", async (req,res) => {
    res.send("hello")
});

app.listen(3001, () => {
    console.log("server is running")

});