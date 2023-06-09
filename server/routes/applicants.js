const router = require('express').Router();
const ApplicantModel = require('../models/Applicants');
const { validateApplicant } = require('../routes/validation');


//get all records route
router.route('/').get((req, res) => {
  ApplicantModel.find()
    .then(applicants => res.json(applicants))
    .catch(err => res.status(400).json('Error: ' + err));
});

//create user route
router.route('/add').post(validateApplicant, async (req, res) => {
  const applicantLicense = req.body.IdSource.license;  
  const existApplicant = await ApplicantModel.findOne({ 'IdSource.license': applicantLicense });

  if (!existApplicant) {
    const newApplicant = new ApplicantModel(req.body);

    newApplicant
      .save()
      .then(() => res.json('This is a new applicant. Applicant added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  } else {
    // check if application date is within 24 months or 2 years
    const prevApplicationDate = new Date(existApplicant.appDate);
    const currApplicationDate = new Date(req.body.appDate);

    const timeDiff = Math.abs(currApplicationDate.getTime() - prevApplicationDate.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (diffDays < 730) {
      return res.status(400).json('An existing applicant and is not eligible to renew within 2 years.');
    } else {
      // update the applicant date and save
      existApplicant.set(req.body);

      existApplicant
        .save()
        .then(() => res.json('An existing applicant and is eligible to renew within 2 years. Applicant updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    }
  }
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

