const router = require('express').Router();
const ApplicantModel = require('../models/Applicants');
const { validateApplicant } = require('../routes/validation');

router.route('/').get((req, res) => {
    ApplicantModel.find() //get the list of all users in mongodb
      .then(applicants => res.json(applicants))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  

  router.route('/add').post(validateApplicant, (req, res) => {
    const newApplicant = new ApplicantModel(req.body);
  
    newApplicant
      .save()
      .then(() => res.json('Applicant added!'))
      .catch((err) => res.status(400).json('Error: ' + err));
  });

// router.route('/add').post( validationApplicant,(req, res) => {
//   const {
//     appDate,
//     applicantName,
//     gender,
//     age,
//     address,
//     phone,
//     otherLastName,
//     homeless,
//     disabled,
//     helpRequest,
//     IdSource,
//     singleMale,
//     singleFemale,
//     children,
//     adults,
//     landlord,
//     income,
//     demographics,
//     referredBy,
//     giveNoticeOnceInTwoYears,
//     lastNoticeGiven,
//     explanation,
//     estimatedAnnualIncome,
//     veryLowIncome,
//     lowIncome,
//     incomeSources,
//     rent,
//     helpReceivedForRent,
//     homelessDetails,
//     gasolineVoucher,
//     busTickets,
//     actionTaken,
//   } = req.body;

//   const newApplicant = new ApplicantModel({
//     appDate,
//     applicantName,
//     gender,
//     age,
//     address,
//     phone,
//     otherLastName,
//     homeless,
//     disabled,
//     helpRequest,
//     IdSource,
//     singleMale,
//     singleFemale,
//     children,
//     adults,
//     landlord,
//     income,
//     demographics,
//     referredBy,
//     giveNoticeOnceInTwoYears,
//     lastNoticeGiven,
//     explanation,
//     estimatedAnnualIncome,
//     veryLowIncome,
//     lowIncome,
//     incomeSources,
//     rent,
//     helpReceivedForRent,
//     homelessDetails,
//     gasolineVoucher,
//     busTickets,
//     actionTaken,
//   });

//   newApplicant.save()
//     .then(() => res.json('Applicant added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/:id')
  .get((req, res) => {
    ApplicantModel.findById(req.params.id)
      .then(applicant => res.json(applicant))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/update/:id').post(validateApplicant, (req, res) => {
    ApplicantModel.findById(req.params.id)
      .then((applicant) => {
        applicant.set(req.body);
  
        applicant
          .save()
          .then(() => res.json('Applicant updated!'))
          .catch((err) => res.status(400).json('Error: ' + err));
      })
      .catch((err) => res.status(400).json('Error: ' + err));
  });

// router.route('/update/:id').post((req, res) => {
//   ApplicantModel.findById(req.params.id)
//     .then(applicant => {
//       applicant.appDate = req.body.appDate;
//       applicant.applicantName = req.body.applicantName;
//       applicant.gender = req.body.gender;
//       applicant.age = req.body.age;
//       applicant.address = req.body.address;
//       applicant.phone = req.body.phone;
//       applicant.otherLastName = req.body.otherLastName;
//       applicant.homeless = req.body.homeless;
//       applicant.disabled = req.body.disabled;
//       applicant.helpRequest = req.body.helpRequest;
//       applicant.IdSource = req.body.IdSource;
//       applicant.singleMale = req.body.singleMale;
//       applicant.singleFemale = req.body.singleFemale;
//       applicant.children = req.body.children;
//       applicant.adults = req.body.adults;
//       applicant.landlord = req.body.landlord;
//       applicant.income = req.body.income;
//       applicant.demographics = req.body.demographics;
//       applicant.referredBy = req.body.referredBy;
//       applicant.giveNoticeOnceInTwoYears = req.body.giveNoticeOnceInTwoYears;
//       applicant.lastNoticeGiven = req.body.lastNoticeGiven;
//       applicant.explanation = req.body.explanation;
//       applicant.estimatedAnnualIncome = req.body.estimatedAnnualIncome;
//       applicant.veryLowIncome = req.body.veryLowIncome;
//       applicant.lowIncome = req.body.lowIncome;
//       applicant.incomeSources = req.body.incomeSources;
//       applicant.rent = req.body.rent;
//       applicant.helpReceivedForRent = req.body.helpReceivedForRent;
//       applicant.homelessDetails = req.body.homelessDetails;
//       applicant.gasolineVoucher = req.body.gasolineVoucher;
//       applicant.busTickets = req.body.busTickets;
//       applicant.actionTaken = req.body.actionTaken;

//       applicant.save()
//         .then(() => res.json('Applicant updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });


module.exports = router;
