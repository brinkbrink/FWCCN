const ApplicantModel = require('../models/Applicants');

const checkEligibility = async (req, res) => {
  try {
    const applicantId = req.body.applicantId; // Assuming you have a unique identifier for the applicant

    // Fetch the applicant from the database
    const applicant = await ApplicantModel.findById(applicantId);

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant not found.' });
    }

    // Calculate the time difference in milliseconds between the current date and the last application date
    const timeDifference = Date.now() - applicant.appDate.getTime();
    const twentyFourMonthsInMilliseconds = 24 * 30 * 24 * 60 * 60 * 1000;

    // Check if the time difference is greater than or equal to 24 months (24 * 30 days)
    if (timeDifference >= twentyFourMonthsInMilliseconds) {
      res.json({ eligible: true });
    } else {
      res.json({ eligible: false });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
};

module.exports = { checkEligibility };
