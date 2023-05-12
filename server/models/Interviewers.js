const mongoose = require('mongoose');

const InterviewerSchema = new mongoose.Schema(
  {
    referredBy: String,
    giveNoticeOnceInTwoYears: Boolean,
    lastNoticeGiven: Date,
    explanation: String,
    estimatedAnnualIncome: Number,
    veryLowIncome: Boolean,
    lowIncome: Boolean,
    incomeSources: {
      job: Number,
      unemployment: Number,
      dshs: Number,
      ss: Number,
      pension: Number,
      childSupport: Number,
      childTaxCreditPayments: Number,
      foodCupons: Number,
      stateMed: Number,
      other: Number,
    },
    rent: {
      totalMonthlyRent: Number,
      section8: Boolean,
      section8Payments: Number,
      otherRentAssistanceProgram: Boolean,
      otherRentAssistanceAmountPaid: Number,
    },
    helpReceivedForRent: {
      received: Boolean,
      agencies: [
        {
          agencyName: String,
          amount: Number,
        },
      ],
    },
    homeless: {
      howLong: Number,
      why: String,
      recentStays: String,
    },
    gasolineVoucher: {
      driversLicenseNumber: String,
      reasonForNeed: String,
    },
    busTickets: {
      reasonForNeed: String,
    },
  },
  {
    timestamps: true,
  }
);

const InterviewerModel = mongoose.model('interviewers', InterviewerSchema);
module.exports = InterviewerModel;
