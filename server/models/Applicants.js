const mongoose = require('mongoose');

const ApplicantSchema = new mongoose.Schema(
  {
    applicationDate: {
      type: Date,
      default: Date.now,
    },
    lastName: {
      type: String,
      required: true,
    },
    middleInitial: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female'],
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    streetAddress: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    otherLastNames: [String],
    isHomeless: {
      type: Boolean,
      required: true,
    },
    isDisabled: {
      type: Boolean,
      required: true,
    },
    helpRequested: {
      rent: Boolean,
      gasoline: String,
      busTicket: Boolean,
      food: Boolean,
    },
    idSource: {
      driverLicense: String,
      driverLicenseExpiration: Date,
      socialSecurity: String,
    },
    isSingleMaleHead: {
      type: Boolean,
      required: true,
    },
    isSingleFemaleHead: {
      type: Boolean,
      required: true,
    },
    hasChildren: {
      type: Boolean,
      required: true,
    },
    numberOfBoys: Number,
    agesOfBoys: [Number],
    numberOfGirls: Number,
    agesOfGirls: [Number],
    relationshipToChildren: String,
    childrenSchoolDistrict: String,
    schoolNames: [String],
    hasOtherAdults: {
      type: Boolean,
      required: true,
    },
    otherAdults: [
      {
        lastName: String,
        middleInitial: String,
        firstName: String,
        sex: String,
        age: Number,
        relationship: String,
      },
    ],
    name: String,
    interviewerCheckName: String,
    interviewerAddress: {
      street: String,
      city: String,
      zip: String,
    },
    interviewerPhone: String,
    monthlyIncomeLast12Months: Number,
    numberOfHouseholdMembers: Number,
    race: String,
  },
  {
    timestamps: true,
  }
);

const ApplicantModel = mongoose.model('applicants', ApplicantSchema);
module.exports = ApplicantModel;
