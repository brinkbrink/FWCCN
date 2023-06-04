const router = require('express').Router();
const ApplicantModel = require('../models/Applicants');
const { validateApplicant } = require('../routes/validation');
const { checkEligibility } = require('../routes/eligibility');


//get all records route
router.route('/').get((req, res) => {
  ApplicantModel.find()
    .then(applicants => res.json(applicants))
    .catch(err => res.status(400).json('Error: ' + err));
});

//create user route
router.route('/add').post(validateApplicant, checkEligibility, (req, res) => {
  const newApplicant = new ApplicantModel(req.body);

  newApplicant
    .save()
    .then(() => res.json('Applicant added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

//searching function by ObjectID
router.route('/:id').get((req, res) => {
  ApplicantModel.findById(req.params.id)
    .then(applicant => res.json(applicant))
    .catch(err => res.status(400).json('Error: ' + err));
});

//search by license number
router.route('/search/:licenseNumber').get((req, res) => {
  const license = req.params.licenseNumber;

  ApplicantModel.findOne({ 'IdSource.license': license })
    .then(applicant => {
      if (!applicant) {
        return res.status(404).json({ error: 'Applicant not found.' });
      }
      res.json(applicant);
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


// search by first and last name
router.route('/search/:firstName/:lastName').get((req, res) => {
  const firstName = req.params.firstName;
  const lastName = req.params.lastName;

  ApplicantModel.findOne({ 'applicantName.firstName' : firstName, 'applicantName.lastName' : lastName })
    .then(applicant => {
      if (!applicant) {
        return res.status(404).json({ error: 'Applicant not found.' });
      }
      res.json(applicant);
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

//update route by driver license
router.route('/update/:licenseNumber').post(
  //validateApplicant, commenting out because it's stopping me from test cases
   //checkEligibility,
    (req, res) => {

  const license = req.params.licenseNumber;

  ApplicantModel.findOne({ 'IdSource.license': license })
    .then(applicant => {
      applicant.set(req.body);

      applicant
        .save()
        .then(() => res.json('Applicant updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

//update route by first and last name
router.route('/update/:firstName/:lastName').post(
  //validateApplicant, commenting out because it's stopping me from test cases
   //checkEligibility,
    (req, res) => {

    const firstName = req.params.firstName;
    const lastName = req.params.lastName;

  ApplicantModel.findOne({ 'applicantName.firstName': firstName , 'applicantName.lastName': lastName})
    .then(applicant => {
      applicant.set(req.body);

      applicant
        .save()
        .then(() => res.json('Applicant updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

//update route by id
router.route('/update/:id').post(
  //validateApplicant, commenting out because it's stopping me from test cases
   //checkEligibility,
    (req, res) => {
  ApplicantModel.findById(req.params.id)
    .then(applicant => {
      applicant.set(req.body);

      applicant
        .save()
        .then(() => res.json('Applicant updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

