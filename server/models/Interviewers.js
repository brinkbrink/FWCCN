const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
	    type: String,
	    required: true,
	    unique: true,
	    trim:true,
	    minlength: 3
	},
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
        required: false,
    },
}, {
	timestamps: true,
});

const interviewer = mongoose.model('interviewers', userSchema);

module.exports = interviewer;