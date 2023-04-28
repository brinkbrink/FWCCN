const mongoose = require('mongoose')

const ApplicantSchema = new mongoose.Schema({
    lastName: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    middleInitial: {
        type: String, 
        required: true,
    },
}, {
	timestamps: true,
});

const ApplicantModel = mongoose.model("applicants", ApplicantSchema)
module.exports = ApplicantModel