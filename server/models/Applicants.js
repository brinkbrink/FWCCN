// This file is used to create the schema for the data that is being sent to the server
const mongoose = require("mongoose");

const ApplicantSchema = new mongoose.Schema({

  // start applicant
  appDate: {
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
  phone: {
    type: String,
  },
  otherLastName: {
    otherLastName2: String,
    otherLastName3: String,
    otherLastName4: String,
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
    busTicket: String,
    food: String,
  },
  IdSource: {
    license: String,
    expDate: Date,
    ssn: Number,
  },
  singleMale: { 
    type: String
   },
  singleFemale: { 
    type: String
   },
   // end applicant

  // start children
  children: { 
    isChildren: String,
    boyNumber: Number,
    boyAge: String,
    girlNumber: Number,
    girlAge: String,
    childrenRel: String,
    schoolDistrict: String, 
    schoolName: String,
    },
    // end children

    // start adults
   adults: {
    isAdults: String,
    numberOfAdults: Number,
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
      interviewerCheck: String,
      street: String,
      city: String,
      zip: String,
      phone: String,
    },
    // end apartment/landlord

    // start income
    income: {
      totalIncome: Number, 
      monthlyIncome: Number,
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
    // interviewer section
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
    //end interviewer section
    //start action taken
    actionTaken: {
      amountPromised: Number,
      amountGivenToday: Number,
      CheckNum: Number,
      bringLease: Number,
      leaseChecked: Number,
      owedReceipt: Number,
      incomeVerification: Number,
      nameAndAddressForCheck: {
        name: String,
        address: String,
        city: String,
        state: String,
        zip: Number
      },
      motelArr: {
        where: String,
        time: String,
        price: Number,
      },
      gasVoucherAmount: Number,
      licensePlate: String,
      busTickets1: Number,
      other: String,
      foodBagGiven: Number,
      explanationMeals: String,
      intakeWorker: Number,
      dateClientReturn: Date,
      allRentGathered: Number,
      amountGiven: Number,
      checkNum: Number,
      to: String,
      secondIntakeWorker: String

    },
  
   // end schema
  });
const ApplicantModel = mongoose.model("applicants", ApplicantSchema);
module.exports = ApplicantModel;
