const router = require('express').Router(); //need express router
let Applicants = require('../models/Applicants'); //require the applicant which also uses mongoose


router.route('/').get((req, res) => { //first route, handle incoming GET REQUEST
	Applicants.find() //mongoose method that get the list of all user from the database in json format
		.then(applicants => res.json(applicants)) //return sth in json format, which is the user form the databse
		.catch(err => res.status(400).json('Error:' + err)); //return error 
});

router.route('/add').post((req,res)=>{ //second route, handles incoming http post request
	const applicantName = req.body.applicantName; //the applicant's name is part of the request body

	const newApplicant = new User({applicantName}); //create a new instant of applicant using their name

	newApplicant.save() //new user saved to the databse with the save method
		.then(() => res.json('Applicant added!')) //return user added
		.catch(err => res.status(400).josn('Error: ' + err)); //or else return error    
});

module.exports = router;