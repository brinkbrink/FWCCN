// This file is used to create the main server file
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const cors = require('cors');
app.use(express.json());
app.use(cors());

// app.use('/eligibility', require('./routes/eligibility')); //import eligibility.js
// const { validateApplicant } = require('./routes/validation');

const port = process.env.PORT || 3001;

dotenv.config()
// Replace the uri string with your connection string.
const db_username = process.env.MONGO_DB_USERNAME;
const db_password = process.env.MONGO_DB_PASSWORD;
const db_url = process.env.MONGO_DB_URL;
const uri = `mongodb+srv://${db_username}:${db_password}@${db_url}?retryWrites=true&w=majority`;

mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open',() => {
    console.log("MongoDB database connection established successfully");
})

const applicantRouter = require('./routes/applicants')
app.use('/applicants', applicantRouter)

app.get("/", async (req,res) => {
    res.send("hello")
});

app.listen(port, () => {
    console.log(`server is running on port: ${port}`)

});