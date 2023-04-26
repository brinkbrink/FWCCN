const mongoose = require("mongoose");

const ApplicantSchema = new mongoose.Schema({

  // start applicant
  applicationDate: {
    type: Date,
  },
  applicantName: {
    firstName: String,
    middleName: String,
    lastName: String,
  },
  gender: {
    type: String,
  },
  age: {
    type: Number,
  },
  address: {
    street: String,
    city: String,
    zip: String,
  },
  city: {
    type: String,
  },
  zip: {
    type: String,
  },
  phone: {
    type: String,
  },
  otherLastName: {
    lastName2: String,
    lastName3: String,
    lastName4: String,
  },
  homeless: { 
    type: String 
  },
  disabled: { 
    type: String 
  },
  helpRequest: {
    rent: String,
    gasoline: String,
    licensePlate: String,
    food: String,
  },
  IdSource: {
    license: String,
    expDate: Date,
    snn: Number,
  },
  singleMale: { 
    type: Boolean
   },
  singleFemale: { 
    type: Boolean
   },
   // end applicant

  // start children
  children: { 
    isChildren: String,
    boyNumber: Number,
    boyAge: String,
    girlNumber: Number,
    girlAge: String,
    chilRel: String,
    schoolDistrict: String, 
    schoolName: String,
    },
    // end children

    // start adults
   adults: {
    isAdult: String,
    adultNumber: Number,
    adultInformation1: {
      lastName1: String,
      middleName1: String,
      firstName1: String,
      adultSex1: String,
      adultAge1: Number,
      adultRel1: String,
    },
    adultInformation2: {
      lastName2: String,
      middleName2: String,
      firstName2: String,
      adultSex2: String,
      adultAge2: Number,
      adultRel2: String,
    },
    adultInformation3: {
      lastName3: String,
      middleName3: String,
      firstName3: String,
      adultSex3: String,
      adultAge3: Number,
      adultRel3: String,
    },
    adultInformation4: {
      lastName4: String,
      middleName4: String,
      firstName4: String,
      adultSex4: String,
      adultAge4: Number,
      adultRel4: String,
    },
   },
    // end adults

    // start apartment/landlord
    landlord: {
      landlordName: String,
      interviewerCheck: Boolean,
      street: String,
      city: String,
      zip: String,
      phone: String,
    },
    // end apartment/landlord

    // start income
    income: {
      totalIncome: String,
      monthlyIncome: String,
      numberMembers: Number,
    },
    // end income

    // start demographics
    demographics: {
      numAmericanIndian: Number,
      numAsian: Number,
      numBlack: Number,
      numLatinx: Number,
      numNative: Number,
      numWhite: Number,
      numOther: Number,
      numMulti: Number,
      numUnknown: Number,
    },
   // end schema
  });
const ApplicantModel = mongoose.model("applicants", ApplicantSchema);
module.exports = ApplicantModel;
