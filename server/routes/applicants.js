const router = require('express').Router();
const ApplicantModel = require('../models/Applicants');
const { validateApplicant } = require('../routes/validation');
const { checkEligibility } = require('../routes/eligibility');

router.route('/').get((req, res) => {
  ApplicantModel.find()
    .then(applicants => res.json(applicants))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(validateApplicant, checkEligibility, (req, res) => {
  const newApplicant = new ApplicantModel(req.body);

  newApplicant
    .save()
    .then(() => res.json('Applicant added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  ApplicantModel.findById(req.params.id)
    .then(applicant => res.json(applicant))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post(validateApplicant, checkEligibility, (req, res) => {
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

