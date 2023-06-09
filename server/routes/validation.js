const Joi = require('@hapi/joi');

const addressSchema = Joi.object({
  street: Joi.string().required(),
  city: Joi.string().required(),
  zip: Joi.string().required(),
});

const childrenSchema = Joi.object({
  boyNumber: Joi.number().required(),
  boyAge: Joi.string().required(),
  girlNumber: Joi.number().required(),
  girlAge: Joi.string().required(),
  childrenRel: Joi.string().required(),
  schoolDistrict: Joi.string().required(),
  schoolName: Joi.string().required(),
});

const adultInformationSchema1 = Joi.object({
  lastName1: Joi.string().required(),
  middleName1: Joi.string().required(),
  firstName1: Joi.string().required(),
  adultSex1: Joi.string().required(),
  adultAge1: Joi.number().required(),
  adultRel1: Joi.string().required(),
});

const adultInformationSchema2 = Joi.object({
  lastName2: Joi.string().required(),
  middleName2: Joi.string().required(),
  firstName2: Joi.string().required(),
  adultSex2: Joi.string().required(),
  adultAge2: Joi.number().required(),
  adultRel2: Joi.string().required(),
});

const adultInformationSchema3 = Joi.object({
  lastName3: Joi.string().required(),
  middleName3: Joi.string().required(),
  firstName3: Joi.string().required(),
  adultSex3: Joi.string().required(),
  adultAge3: Joi.number().required(),
  adultRel3: Joi.string().required(),
});

const adultInformationSchema4 = Joi.object({
  lastName4: Joi.string().required(),
  middleName4: Joi.string().required(),
  firstName4: Joi.string().required(),
  adultSex4: Joi.string().required(),
  adultAge4: Joi.number().required(),
  adultRel4: Joi.string().required(),
});

const validateApplicant = (req, res, next) => {
  const schema = Joi.object({
    appDate: Joi.date(),
    applicantName: Joi.object({
      firstName: Joi.string()
        .required()
        .pattern(new RegExp('^[a-zA-Z]+$'))
        .messages({ 'string.pattern.base': 'First name must be letters only' }),
      middleName: Joi.string().optional().allow(''),
      lastName: Joi.string()
        .required()
        .pattern(new RegExp('^[a-zA-Z]+$'))
        .messages({ 'string.pattern.base': 'Last name must be letters only' }),
    }),
    gender: Joi.string().required(),
    age: Joi.number().required().min(18).max(100),
    address: Joi.when('homeless', {
      is: 'No',
      then: addressSchema.required(),
      otherwise: Joi.optional().allow(''),
    }),
    phone: Joi.string().required().min(10).max(10),
    otherLastName: Joi.object({
      otherLastName2: Joi.string().optional().allow(''),
      otherLastName3: Joi.string().optional().allow(''),
      otherLastName4: Joi.string().optional().allow(''),
    }),
    homeless: Joi.string().required(),
    disabled: Joi.string().required(),
    helpRequest: Joi.object({
      rent: Joi.string().required(),
      gasoline: Joi.string().required(),
      licensePlate: Joi.when('gasoline', {
        is: 'Yes',
        then: Joi.required(),
        otherwise: Joi.optional(),
      }),
      busTicket: Joi.string().required(),
      food: Joi.string().required(),
    }),
    IdSource: Joi.object({
      license: Joi.string().required(),
      expDate: Joi.date().required(),
      ssn: Joi.number().required(),
    }),
    singleMale: Joi.string().required(),
    singleFemale: Joi.string().required(),

    children: Joi.object({
      isChildren: Joi.string().required(),
    }),
    children: Joi.when('isChildren', {
      is: 'Yes',
      then: childrenSchema.required(),
      otherwise: Joi.optional(),
    }),
    adults: Joi.object({
      isAdults: Joi.string().required(),
      numberOfAdults: Joi.when('isAdults', {
        is: 'Yes',
        then: Joi.number().required(),
        otherwise: Joi.optional(),
      }),
      adultInformation1: Joi.when('numberOfAdults', {
        is: Joi.number().valid(2, 3, 4, 5),
        then: adultInformationSchema1.required(),
        otherwise: Joi.optional(),
      }),
      adultInformation2: Joi.when('numberOfAdults', {
        is: Joi.number().valid(3, 4, 5),
        then: adultInformationSchema2.required(),
        otherwise: Joi.optional(),
      }),
      adultInformation3: Joi.when('numberOfAdults', {
        is: Joi.number().valid(4, 5),
        then: adultInformationSchema3.required(),
        otherwise: Joi.optional(),
      }),
      adultInformation4: Joi.when('numberOfAdults', {
        is: 5,
        then: adultInformationSchema4.required(),
        otherwise: Joi.optional(),
      }),
    }),

    landlord: Joi.object({
      landlordName: Joi.string().required(),
      interviewerCheck: Joi.string().required(),
      street: Joi.string().required(),
      city: Joi.string()
        .required()
        .pattern(new RegExp('^[a-zA-Z]+$'))
        .messages({ 'string.pattern.base': 'City must be letters only' }),
      zip: Joi.string().required().min(5).max(5),
      phone: Joi.string().required().min(10).max(10),
    }),

    income: Joi.object({
      totalIncome: Joi.number().required(),
      monthlyIncome: Joi.number().required(),
      numberMembers: Joi.number().required(),
    }),
    demographics: Joi.object({
      numAmericanIndian: Joi.number().required(),
      numAsian: Joi.number().required(),
      numBlack: Joi.number().required(),
      numLatinx: Joi.number().required(),
      numNative: Joi.number().required(),
      numWhite: Joi.number().required(),
      numOther: Joi.number().required(),
      numMulti: Joi.number().required(),
      numUnknown: Joi.number().required(),
    }),
  });

  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    const errorMessage = error.details.map(detail => detail.message).join('\n');
    return res.status(400).send(errorMessage);
  }

  next();
};

module.exports = {
  validateApplicant
};

