const router = require('express').Router(); //need express router
const ApplicantModel = require('../models/Applicants');
let Applicants = require('../models/Applicants'); //require the applicant which also uses mongoose
const validationController = require('../controllers/validations'); //use validations check


router.route('/').get((req, res) => { //first route, handle incoming GET REQUEST
	Applicants.find() //mongoose method that get the list of all user from the database in json format
		.then(applicants => res.json(applicants)) //return sth in json format, which is the user form the databse
		.catch(err => res.status(400).json('Error:' + err)); //return error 
});

router.route('/add').post(validationController.validateInput, (req, res)=>{ //second route, handles incoming http post request
	const {
        lastName,
        middleInitial,
        firstName,
        gender,
        age,
        streetAddress,
        city,
        zip,
        phone,
        otherLastNames,
        isHomeless,
        isDisabled,
        helpRequested,
        idSource,
        isSingleMaleHead,
        isSingleFemaleHead,
        hasChildren,
        numberOfBoys,
        agesOfBoys,
        numberOfGirls,
        agesOfGirls,
        relationshipToChildren,
        childrenSchoolDistrict,
        schoolNames,
        hasOtherAdults,
        otherAdults,
        name,
        interviewerCheckName,
        interviewerAddress,
        interviewerPhone,
        monthlyIncomeLast12Months,
        numberOfHouseholdMembers,
        race,
      } = req.body;
    
      const newApplicant = new ApplicantModel({
        lastName,
        middleInitial,
        firstName,
        gender,
        age,
        streetAddress,
        city,
        zip,
        phone,
        otherLastNames,
        isHomeless,
        isDisabled,
        helpRequested,
        idSource,
        isSingleMaleHead,
        isSingleFemaleHead,
        hasChildren,
        numberOfBoys,
        agesOfBoys,
        numberOfGirls,
        agesOfGirls,
        relationshipToChildren,
        childrenSchoolDistrict,
        schoolNames,
        hasOtherAdults,
        otherAdults,
        name,
        interviewerCheckName,
        interviewerAddress,
        interviewerPhone,
        monthlyIncomeLast12Months,
        numberOfHouseholdMembers,
        race,
      });
	newApplicant.save() //new user saved to the databse with the save method
		.then(() => res.json('Applicant added!')) //return user added
		.catch(err => res.status(400).json('Error: ' + err)); //or else return error    
});

router.route('/:id').get((req,res) => { //get request from database
        ApplicantModel.findById(req.params.id) //get from the url
        .then(applicants => res.json(applicants))
        .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').delete((req,res) => {
    ApplicantModel.findByIdAndDelete(req.params.id) //get id from the url
    .then(() => res.json('Applicant deleted. '))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => { //post req
    ApplicantModel.findById(req.params.id)
    .then(applicants => {
        applicants.lastName = req.body.lastName;
        applicants.middleInitial = req.body.middleInitial;
        applicants.firstName = req.body.firstName;

        applicants.save()
            .then(() => res.json('Applicant updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;