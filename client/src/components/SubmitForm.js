// this is a submit form
// fetch an endpoint and insert data into the database
import React, { useState } from "react";

function SubmitCategory({ category }) {
  return (
  <label className="submit-category">
    <h3>
      <u>{ category }</u>
    </h3>
  </label>
  );
}

function YesNoSelect({ label, val, handleChange }) {
  return (
  <div>
      <label className="submit-label">{ label }</label>
          <select
            className="submit-input"
            value={ val }
            onChange={ handleChange }
          >
            <option value={null}>Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
  </div>
  );
}

function TextInput ({ label, val, handleChange, req }) {
  return (
  <div>
    <label className="submit-label">{ label }</label>
    <input
      className="submit-input"
      type="text"
      value={ val }
      onChange={ handleChange }
      required={ req }
    />
  </div>
  );
}

function NumInput ({ label, val, handleChange, req, min=0}) {
  return (
    <div>
      <label className="submit-label">{ label }</label>
      <input
        className="submit-input"
        type="number"
        min={min}
        value={ val }
        required={ req }
        onChange={ handleChange }
      />
    </div>
  )
}

function GenderSelect({ val, handleChange }){
  return(
    <div>
          <label className="submit-label">Gender (Required):</label>
            <select
              className="submit-input"
              value={ val }
              onChange={ handleChange }
            >
              <option value={null}>Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
    </div>
  )
}

function SubmitForm() {
  const [appDate, setAppDate] = useState("");
  const [applicantName, setApplicantName] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
  });
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState({ street: "", city: "", zip: "" });
  const [phone, setPhone] = useState("");
  const [otherLastName, setOtherLastName] = useState({
    otherLastName2: "",
    otherLastName3: "",
    otherLastName4: "",
  });
  const [homeless, setHomeless] = useState("");
  const [disabled, setDisabled] = useState("");
  const [helpRequest, setHelpRequest] = useState({
    rent: "",
    gasoline: "",
    licensePlate: "",
    busTicket: "",
    food: "",
  });
  const [IdSource, setIdSource] = useState({
    license: "",
    expDate: "",
    ssn: "",
  });
  const [singleMale, setSingleMale] = useState("");
  const [singleFemale, setSingleFemale] = useState("");
  const [children, setChildren] = useState({
    isChildren: "",
    boyNumber: "",
    boyAge: "",
    girlNumber: "",
    girlAge: "",
    childrenRel: "",
    schoolDistrict: "",
    schoolName: "",
  });
  const [adults, setAdults] = useState({
    isAdults: "",
    numberOfAdults: "",
    adultInformation1: {
      lastName1: "",
      middleName1: "",
      firstName1: "",
      adultSex1: "",
      adultAge1: "",
      adultRel1: "",
    },
    adultInformation2: {
      lastName2: "",
      middleName2: "",
      firstName2: "",
      adultSex2: "",
      adultAge2: "",
      adultRel2: "",
    },
    adultInformation3: {
      lastName3: "",
      middleName3: "",
      firstName3: "",
      adultSex3: "",
      adultAge3: "",
      adultRel3: "",
    },
    adultInformation4: {
      lastName4: "",
      middleName4: "",
      firstName4: "",
      adultSex4: "",
      adultAge4: "",
      adultRel4: "",
    },
  });
  const [landlord, setLandlord] = useState({
    landlordName: "",
    interviewerCheck: "",
    street: "",
    city: "",
    zip: "",
    phone: "",
  });
  const [income, setIncome] = useState({
    totalIncome: "",
    monthlyIncome: "",
    numberMembers: "",
  });
  const [demographics, setDemographics] = useState({
    numAmericanIndian: 0,
    numAsian: 0,
    numBlack: 0,
    numLatinx: 0,
    numNative: 0,
    numWhite: 0,
    numOther: 0,
    numMulti: 0,
    numUnknown: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Submitting Name ${applicantName.firstName} ${applicantName.middleName} ${applicantName.lastName}`
    );
    fetch("http://localhost:3001/createApplicants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        appDate: appDate,
        applicantName: {
          firstName: applicantName.firstName,
          middleName: applicantName.middleName,
          lastName: applicantName.lastName,
        },
        gender: gender,
        age: age,
        address: {
          street: address.street,
          city: address.city,
          zip: address.zip,
        },
        phone: phone,
        otherLastName: {
          otherLastName2: otherLastName.otherLastName2,
          otherLastName3: otherLastName.otherLastName3,
          otherLastName4: otherLastName.otherLastName4,
        },
        homeless: homeless,
        disabled: disabled,
        helpRequest: {
          rent: helpRequest.rent,
          gasoline: helpRequest.gasoline,
          licensePlate: helpRequest.licensePlate,
          busTicket: helpRequest.busTicket,
          food: helpRequest.food,
        },
        IdSource: {
          license: IdSource.license,
          expDate: IdSource.expDate,
          ssn: IdSource.ssn,
        },
        singleMale: singleMale,
        singleFemale: singleFemale,
        children: {
          isChildren: children.isChildren,
          boyNumber: children.boyNumber,
          boyAge: children.boyAge,
          girlNumber: children.girlNumber,
          girlAge: children.girlAge,
          childrenRel: children.childrenRel,
          schoolDistrict: children.schoolDistrict,
          schoolName: children.schoolName,
        },
        adults: {
          isAdults: adults.isAdults,
          numberOfAdults: adults.numberOfAdults,
          adultInformation1: {
            lastName1: adults.adultInformation1.lastName1,
            middleName1: adults.adultInformation1.middleName1,
            firstName1: adults.adultInformation1.firstName1,
            adultSex1: adults.adultInformation1.adultSex1,
            adultAge1: adults.adultInformation1.adultAge1,
            adultRel1: adults.adultInformation1.adultRel1,
          },
          adultInformation2: {
            lastName2: adults.adultInformation2.lastName2,
            middleName2: adults.adultInformation2.middleName2,
            firstName2: adults.adultInformation2.firstName2,
            adultSex2: adults.adultInformation2.adultSex2,
            adultAge2: adults.adultInformation2.adultAge2,
            adultRel2: adults.adultInformation2.adultRel2,
          },
          adultInformation3: {
            lastName3: adults.adultInformation3.lastName3,
            middleName3: adults.adultInformation3.middleName3,
            firstName3: adults.adultInformation3.firstName3,
            adultSex3: adults.adultInformation3.adultSex3,
            adultAge3: adults.adultInformation3.adultAge3,
            adultRel3: adults.adultInformation3.adultRel3,
          },
          adultInformation4: {
            lastName4: adults.adultInformation4.lastName4,
            middleName4: adults.adultInformation4.middleName4,
            firstName4: adults.adultInformation4.firstName4,
            adultSex4: adults.adultInformation4.adultSex4,
            adultAge4: adults.adultInformation4.adultAge4,
            adultRel4: adults.adultInformation4.adultRel4,
          },
        },
        landlord: {
          landlordName: landlord.landlordName,
          interviewerCheck: landlord.interviewerCheck,
          street: landlord.street,
          city: landlord.city,
          zip: landlord.zip,
          phone: landlord.phone,
        },
        income: {
          totalIncome: income.totalIncome,
          monthlyIncome: income.monthlyIncome,
          numberMembers: income.numberMembers,
        },
        demographics: {
          numAmericanIndian: demographics.numAmericanIndian,
          numAsian: demographics.numAsian,
          numBlack: demographics.numBlack,
          numLatinx: demographics.numLatinx,
          numNative: demographics.numNative,
          numWhite: demographics.numWhite,
          numOther: demographics.numOther,
          numMulti: demographics.numMulti,
          numUnknown: demographics.numUnknown,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="form">
      <form className="submit-form" onSubmit={handleSubmit}>
        {/* Primary Applicant Section */}
        <div className="form-section">
          <SubmitCategory category="Primary Applicant" />
            <label className="submit-label">Application Date (Required):</label>
            <input
              className="submit-input"
              type="date"
              value={appDate}
              onChange={(e) => setAppDate(e.target.value)}
            />
          <TextInput 
          label="Last Name (Required):" 
          val={applicantName.lastName} req={ true }
          handleChange={(e) => setApplicantName({ ...applicantName, lastName: e.target.value })} 
          />
          <TextInput 
          label="Middle Name (Optional):" 
          val={applicantName.middleName} req={ false }
          handleChange={(e) => setApplicantName({ ...applicantName, middleName: e.target.value })} 
          />
          <TextInput 
          label="First Name (Required):" 
          val={applicantName.firstName} req={ true }
          handleChange={(e) => setApplicantName({ ...applicantName, firstName: e.target.value })} 
          />
          <YesNoSelect label="Do you have other last names used? (Required)"
          val={ otherLastName.isOtherLastName } 
          handleChange={(e) => setOtherLastName({
              ...otherLastName, isOtherLastName: e.target.value,})}
          />
          {otherLastName.isOtherLastName === "Yes" ? (
            <div>
              <TextInput 
              label="Last Name 1 (Optional):" 
              val={ otherLastName.otherLastName2 } req={ false }
              handleChange={(e) => setOtherLastName({ ...otherLastName, otherLastName2: e.target.value })} 
              />
              <TextInput 
              label="Last Name 2 (Optional):" 
              val={ otherLastName.otherLastName3 } req={ false }
              handleChange={(e) => setOtherLastName({ ...otherLastName, otherLastName3: e.target.value })} 
              />
              <TextInput 
              label="Last Name 3 (Optional):" 
              val={ otherLastName.otherLastName4 } req={ false }
              handleChange={(e) => setOtherLastName({ ...otherLastName, otherLastName4: e.target.value })} 
              />
            </div>
          ) : null}
          {/* End name section */}
          <GenderSelect val={ gender } 
          handleChange={(e) => setGender(e.target.value)}
          />{" "}
          {/* End gender section */}
          <NumInput label="Age (Required):" val={ age } req={ true }
          handleChange={(e) => setAge(e.target.value)} min={18}
          />{" "}
          {/* End age section */}
          <YesNoSelect label="Disabled (Required):" val={ disabled } handleChange={(e) => setDisabled(e.target.value)} />
          <YesNoSelect label="Single Male (Required):" val={ singleMale } handleChange={(e) => setSingleMale(e.target.value)} />
          <YesNoSelect label="Single Female (Required):" val={ singleFemale } handleChange={(e) => setSingleFemale(e.target.value)} />
        </div>
        <div className="form-section">
          <SubmitCategory category={"Contact"} />
          <YesNoSelect label="Homeless (Required):" val={ homeless } handleChange={(e) => setHomeless(e.target.value)}/>
          {homeless === "No" ? (
          <div>
            <TextInput 
            label="Address (Required):" 
            val={ address.street } req={ true }
            handleChange={(e) => setAddress({ ...address, street: e.target.value })}
            />
            <TextInput 
            label="City (Required):" 
            val={ address.city } req={ true }
            handleChange={(e) => setAddress({ ...address, city: e.target.value })}
            />
            <TextInput 
            label="Zip (Required):" 
            val={ address.zip } req={ true }
            handleChange={(e) => setAddress({ ...address, zip: e.target.value })}
            />
          </div>
          ) : null}
          <TextInput 
          label="Phone (Required):" 
          val={ phone } req={ true }
          handleChange={(e) => setPhone(e.target.value)}
          />
        </div>
        {/* End Primary Applicant Section */}

        {/* Start Help Request Section */}
        <div className="form-section">
          <SubmitCategory category={"Help Request"} />
          <YesNoSelect label="Rent (Required):" val={ helpRequest.rent }
          handleChange={ (e) => setHelpRequest({ ...helpRequest, rent: e.target.value }) }
          />
          <YesNoSelect label="Gasoline (Required):" val={ helpRequest.gasoline }
          handleChange={ (e) => setHelpRequest({ ...helpRequest, gasoline: e.target.value }) }
          />
          {helpRequest.gasoline === "Yes" ? (
            <div>
              <TextInput label="License Plate # (Required):" val={ helpRequest.licensePlate } req={ true }
              handleChange={(e) => setHelpRequest({ ...helpRequest, licensePlate: e.target.value })}
              />
            </div>
             ) : null }
          <YesNoSelect label="Bus Ticket (Required):" val={ helpRequest.busTicket }
          handleChange={ (e) => setHelpRequest({ ...helpRequest, busTicket: e.target.value }) }
          />
          <YesNoSelect label="Food (Required):" val={ helpRequest.food }
          handleChange={ (e) => setHelpRequest({ ...helpRequest, food: e.target.value }) }
          />
        </div>
        {/* ID Source Section */}
        <div className="form-section">
          <SubmitCategory category={"ID Source"} />
          <TextInput 
          label="Driver's License (Required):" 
          val={ IdSource.license } req={ true }
          handleChange={(e) => setIdSource({ ...IdSource, license: e.target.value })}
          />
          <label className="submit-label">Expiration Date (Required):</label>
          <input
            className="submit-input"
            type="date"
            value={IdSource.expDate}
            onChange={(e) =>
              setIdSource({ ...IdSource, expDate: e.target.value })
            }
          />
          <label className="submit-label">
            Social Security: (Last 4 digits) (Required)
          </label>
          <input
            className="submit-input"
            type="number"
            value={IdSource.ssn}
            onChange={(e) => {
              if (e.target.value.length <= 4) {
                setIdSource({ ...IdSource, ssn: e.target.value });
              }
            }}
          />
        </div>
        {/* End Applicant Section */}

        {/* Start Children Section */}
        <div className="form-section">
          <SubmitCategory category="Children" />
          <YesNoSelect label="Do you have children, under the age of 18, permanently living with you? (Required)" 
          value={ children.isChildren } req={ true }
          handleChange={(e) => setChildren({ ...children, isChildren: e.target.value })}
          />
          {children.isChildren === "Yes" ? (
            <div>
              <div>
                <NumInput label="How many boys? (Required):" 
                  val={children.boyNumber} req={true} 
                  handleChange={(e) => setChildren({ ...children, boyNumber: e.target.value })} 
                  />
                {/* 
                TODO: return age inputs for num of children parseInt(children.boyNumber) 
                ..also apply this logic to other adults section
                and use components to do this.
                */}
                  <NumInput label="Age (Required):" 
                  val={children.boyAge} req={true} 
                  handleChange={(e) => setChildren({ ...children, boyAge: e.target.value })} 
                  />
              </div>
              <div>
                  <NumInput label="How many girls? (Required):" 
                  val={children.girlNumber} req={true} 
                  handleChange={(e) => setChildren({ ...children, girlNumber: e.target.value })} 
                  />
                  <NumInput label="Age (Required):" 
                  val={children.girlAge} req={true} 
                  handleChange={(e) => setChildren({ ...children, girlAge: e.target.value })} 
                  />
              </div>
              <TextInput 
              label="What is your relationship to the children? (Required):" 
              val={ children.childrenRel } req={ true }
              handleChange={(e) => setChildren({ ...children, childrenRel: e.target.value })} 
              />
              <TextInput 
              label="Children's School District (Required):" 
              val={ children.schoolDistrict } req={ true }
              handleChange={(e) => setChildren({ ...children, schoolDistrict: e.target.value })} 
              />
              <TextInput 
              label="Children's School Name (Required):" 
              val={ children.schoolName } req={ true }
              handleChange={(e) => setChildren({ ...children, schoolName: e.target.value })} 
              />
            </div>
          ) : null}
        </div>
        {/* End Children Section */}

        {/* Start Other Adults Section */}
        <div className="form-section">
          <SubmitCategory category="Other Adults" />
          <YesNoSelect label="Do you have other adults (18 and over) living in the home? (Required)" 
          val={ adults.isAdults } req={ true }
          handleChange={(e) => setAdults({ ...adults, isAdults: e.target.value })}
          />
          {adults.isAdults === "Yes" ? (
            <div>
              <label className="submit-label">
                Number of Adults (including you) (Required):
              </label>
              <select
                className="submit-input"
                min={2}
                value={adults.numberOfAdults}
                required={true}
                onChange={(e) =>
                  setAdults({ ...adults, numberOfAdults: e.target.value })
                }
              >
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              {adults.numberOfAdults >= "2" ? (
              <div>
                {/* TODO: style h4 */}
                <h4>Other Adult 1</h4>
                <TextInput label="Last Name (Required):"
                val={adults.adultInformation1.lastName1} req={true}
                handleChange={(e) =>
                  setAdults({...adults, adultInformation1: {
                      ...adults.adultInformation1, lastName1: e.target.value,
                    },
                  })} 
                />
                <TextInput label="Middle Name (Required):"
                val={adults.adultInformation1.middleName1} req={true}
                handleChange={(e) =>
                  setAdults({...adults, adultInformation1: {
                      ...adults.adultInformation1, middleName1: e.target.value,
                    },
                  })} 
                />
                <TextInput label="First Name (Required):"
                val={adults.adultInformation1.firstName1} req={true}
                handleChange={(e) =>
                  setAdults({...adults, adultInformation1: {
                      ...adults.adultInformation1, firstName1: e.target.value,
                    },
                  })} 
                />
                <GenderSelect val={ adults.adultInformation1.adultSex1 } 
                  handleChange={(e) => setAdults({...adults, 
                    adultInformation1: {
                        ...adults.adultInformation1,
                        adultSex1: e.target.value,
                      },
                    })}
                />
                <NumInput label="Age (Required):"
                  val={adults.adultInformation1.adultAge1} req={true}
                  handleChange={(e) =>
                  setAdults({
                    ...adults,
                    adultInformation1: {
                      ...adults.adultInformation1,
                      adultAge1: e.target.value,
                    },
                  })} 
                />
                <TextInput label="Relationship (Required):"
                val={adults.adultInformation1.adultRel1} req={true}
                handleChange={(e) =>
                  setAdults({...adults, adultInformation1: {
                      ...adults.adultInformation1, adultRel1: e.target.value,
                    },
                  })} 
                />
              </div>
              ): null }
              {adults.numberOfAdults >= "3" ? (
              <div>
                <h4>Other Adult 2</h4>
                <TextInput label="Last Name (Required):"
                val={adults.adultInformation2.lastName2} req={true}
                handleChange={(e) =>
                  setAdults({...adults, adultInformation2: {
                      ...adults.adultInformation2, lastName2: e.target.value,
                    },
                  })} 
                />
                <TextInput label="Middle Name (Required):"
                val={adults.adultInformation2.middleName2} req={true}
                handleChange={(e) =>
                  setAdults({...adults, adultInformation2: {
                      ...adults.adultInformation2, middleName2: e.target.value,
                    },
                  })} 
                />
                <TextInput label="First Name (Required):"
                val={adults.adultInformation2.firstName2} req={true}
                handleChange={(e) =>
                  setAdults({...adults, adultInformation2: {
                      ...adults.adultInformation2, firstName2: e.target.value,
                    },
                  })} 
                />
                <GenderSelect val={ adults.adultInformation2.adultSex2 } 
                  handleChange={(e) => setAdults({...adults, 
                    adultInformation2: {
                        ...adults.adultInformation2,
                        adultSex2: e.target.value,
                      },
                    })}
                />
                  <NumInput label="Age (Required):"
                  val={adults.adultInformation2.adultAge2} req={true}
                  handleChange={(e) =>
                  setAdults({
                    ...adults,
                    adultInformation2: {
                      ...adults.adultInformation2,
                      adultAge2: e.target.value,
                    },
                  })} 
                />
                <TextInput label="Relationship (Required):"
                val={adults.adultInformation2.adultRel2} req={true}
                handleChange={(e) =>
                  setAdults({...adults, adultInformation2: {
                      ...adults.adultInformation2, adultRel2: e.target.value,
                    },
                  })} 
                />
              </div>
              ): null }
                {adults.numberOfAdults >= "4" ? (
                  <div>
                    <h4>Other Adult 3</h4>
                    <TextInput label="Last Name (Required):"
                    val={adults.adultInformation3.lastName3} req={true}
                    handleChange={(e) =>
                      setAdults({...adults, adultInformation3: {
                        ...adults.adultInformation3, lastName3: e.target.value,
                      },
                    })} 
                    />
                    <TextInput label="Middle Name (Required):"
                    val={adults.adultInformation3.middleName3} req={true}
                    handleChange={(e) =>
                      setAdults({...adults, adultInformation3: {
                          ...adults.adultInformation3, middleName3: e.target.value,
                        },
                      })} 
                    />
                    <TextInput label="First Name (Required):"
                    val={adults.adultInformation3.firstName3} req={true}
                    handleChange={(e) =>
                      setAdults({...adults, adultInformation3: {
                          ...adults.adultInformation3, firstName3: e.target.value,
                        },
                      })} 
                    />
                    <GenderSelect val={ adults.adultInformation3.adultSex3 } 
                      handleChange={(e) => setAdults({...adults, 
                        adultInformation3: {
                            ...adults.adultInformation3,
                            adultSex3: e.target.value,
                          },
                        })}
                    />
                    <NumInput label="Age (Required):"
                      val={adults.adultInformation3.adultAge3} req={true}
                      handleChange={(e) =>
                      setAdults({...adults, adultInformation3: {
                          ...adults.adultInformation3,
                          adultAge3: e.target.value,},})} 
                    />
                    <TextInput label="Relationship (Required):"
                      val={adults.adultInformation3.adultRel3} req={true}
                      handleChange={(e) =>
                        setAdults({...adults, adultInformation3: {
                            ...adults.adultInformation3, adultRel3: e.target.value,},})} 
                    />
                </div>
                ) : null}
                {adults.numberOfAdults === "5" ? (
                  <div>
                  <h4>Other Adult 4</h4>
                  <TextInput label="Last Name (Required):"
                  val={adults.adultInformation4.lastName4} req={true}
                  handleChange={(e) =>
                    setAdults({...adults, adultInformation4: {
                      ...adults.adultInformation4, lastName4: e.target.value,},})} 
                  />
                  <TextInput label="Middle Name (Required):"
                  val={adults.adultInformation4.middleName4} req={true}
                  handleChange={(e) =>
                    setAdults({...adults, adultInformation4: {
                        ...adults.adultInformation4, middleName4: e.target.value,},})} 
                  />
                  <TextInput label="First Name (Required):"
                  val={adults.adultInformation4.firstName4} req={true}
                  handleChange={(e) =>
                    setAdults({...adults, adultInformation4: {
                        ...adults.adultInformation4, firstName4: e.target.value,},})} 
                  />
                  <GenderSelect val={ adults.adultInformation4.adultSex4 } 
                    handleChange={(e) => setAdults({...adults, 
                      adultInformation4: {
                          ...adults.adultInformation4,
                          adultSex4: e.target.value,
                        },
                      })}
                  />
                  <NumInput label="Age (Required):"
                    val={adults.adultInformation4.adultAge4} req={true}
                    handleChange={(e) =>
                    setAdults({
                      ...adults,
                      adultInformation4: {
                        ...adults.adultInformation4,
                        adultAge4: e.target.value,
                      },
                    })} 
                  />
                  <TextInput label="Relationship (Required):"
                  val={adults.adultInformation4.adultRel4} req={true}
                  handleChange={(e) =>
                    setAdults({...adults, adultInformation4: {
                        ...adults.adultInformation4, adultRel4: e.target.value,
                      },
                    })} 
                  />
              </div>
                ) : null}
              </div>
          ) : null}
        </div>
        {/* End Adults Section */}

        {/* Start Apartment / Landlord Section */}
        <div className="form-section">
          <SubmitCategory category="Apartment/Landlord" />
          <TextInput label="Apartment/Landlord Name (Required):" 
          val={ landlord.landlordName } req={ true }
          handleChange={(e) => setLandlord({ ...landlord, landlordName: e.target.value })}
          />
          <YesNoSelect label="Interviewer Check Name (Required):"
          val={ landlord.interviewerCheck } req={ true }
          handleChange={(e) => setLandlord({ ...landlord, interviewerCheck: e.target.value })}
          />
          <TextInput label="Street Address (Required):" 
          val={ landlord.street } req={ true }
          handleChange={(e) => setLandlord({ ...landlord, street: e.target.value })}
          />
          <TextInput label="City (Required):" 
          val={ landlord.city } req={ true }
          handleChange={(e) => setLandlord({ ...landlord, city: e.target.value })}
          />
          <TextInput label="Zip (Required):" 
          val={ landlord.zip } req={ true }
          handleChange={(e) => setLandlord({ ...landlord, zip: e.target.value })}
          />
          <TextInput label="Phone (Required):" 
          val={ landlord.phone } req={ true }
          handleChange={(e) => setLandlord({ ...landlord, phone: e.target.value })}
          />
        </div>
        {/* End Apartment / Landlord Section */}

        {/* Start Income Section */}
        <div className="form-section">
          <SubmitCategory category="Income" />
            <label className="submit-label">Total Income (Required):</label>
            <input
              className="submit-input"
              type="text"
              value={income.totalIncome.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
              })}
              required={true}
              onChange={(e) => {
                setIncome({
                  ...income,
                  totalIncome: Number(e.target.value.replace(/[^0-9.-]+/g, "")),
                });
              }}
            />

            <label className="submit-label">Monthly Income (Required): </label>
            <input
              className="submit-input"
              type="text"
              value={income.monthlyIncome.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
              })}
              required={true}
              onChange={(e) =>
                setIncome({
                  ...income,
                  monthlyIncome: Number(
                    e.target.value.replace(/[^0-9.-]+/g, "")
                  ),
                })
              }
            />
            <NumInput label="Number of members supported by this income (Required):"
            val={ income.numberMembers } req={ true }
            handleChange={(e) => setIncome({ ...income, numberMembers: e.target.value })}
            />
        </div>
        {/* End Income Section */}

        {/* Start Demographics Section */}
        <div className="form-section">
          <SubmitCategory category="Demographics" />
          Please put the number of people next to the appropriate category. The
          total of all numbers should equal the number of people living in the
          household (Required)
          <div className="demographics-container">
            <div className="demographics-column">
              <label className="submit-input">
                American Indian/Alaska Native
              </label>
              <input
                className="submit-input"
                type="number"
                value={demographics.numAmericanIndian}
                min={0}
                onChange={(e) =>
                  setDemographics({
                    ...demographics,
                    numAmericanIndian: e.target.value,
                  })
                }
              />
              <label className="submit-input">Asian/Asian American </label>
              <input
                className="submit-input"
                type="number"
                value={demographics.numAsian}
                min={0}
                onChange={(e) =>
                  setDemographics({ ...demographics, numAsian: e.target.value })
                }
              />
              <label className="submit-input">Black/African American </label>
              <input
                className="submit-input"
                type="number"
                value={demographics.numBlack}
                min={0}
                onChange={(e) =>
                  setDemographics({ ...demographics, numBlack: e.target.value })
                }
              />
              <label className="submit-input">
                Latino, Latino American, Hispanic
              </label>
              <input
                className="submit-input"
                type="number"
                value={demographics.numLatinx}
                min={0}
                onChange={(e) =>
                  setDemographics({
                    ...demographics,
                    numLatinx: e.target.value,
                  })
                }
              />
            </div>
            <div className="demographics-column">
              <label className="submit-input">
                Native American/Pacific Islander
              </label>
              <input
                className="submit-input"
                type="number"
                value={demographics.numNative}
                min={0}
                onChange={(e) =>
                  setDemographics({
                    ...demographics,
                    numNative: e.target.value,
                  })
                }
              />

              <label className="submit-input">White or Caucasian </label>
              <input
                className="submit-input"
                type="number"
                value={demographics.numWhite}
                min={0}
                onChange={(e) =>
                  setDemographics({ ...demographics, numWhite: e.target.value })
                }
              />
              <label className="submit-input">Other Race </label>
              <input
                className="submit-input"
                type="number"
                value={demographics.numOther}
                min={0}
                onChange={(e) =>
                  setDemographics({ ...demographics, numOther: e.target.value })
                }
              />

              <label className="submit-input">Multi Racial </label>
              <input
                className="submit-input"
                type="number"
                value={demographics.numMulti}
                min={0}
                onChange={(e) =>
                  setDemographics({ ...demographics, numMulti: e.target.value })
                }
              />
              <label className="submit-input">Unknown </label>
              <input
                className="submit-input"
                type="number"
                value={demographics.numUnknown}
                min={0}
                onChange={(e) =>
                  setDemographics({
                    ...demographics,
                    numUnknown: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
        {/* End Demographics Section */}
        <button className="submit-button">Submit</button>
        <button className="submit-button">Save</button>
        <button className="submit-button">Cancel</button>
      </form>
    </div>
  );
}


export default SubmitForm;
