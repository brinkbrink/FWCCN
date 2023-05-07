// this is a submit form
// fetch an endpoint and insert data into the database
import React, { useState } from "react";

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
    childRel: "",
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
          childRel: children.childRel,
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
          <label className="submit-category">
            <h3>
              <u>Primary Applicant</u>
            </h3>
          </label>

          <div>
            <label className="submit-label">Application Date (Required):</label>
            <input
              className="submit-input"
              type="date"
              value={appDate}
              onChange={(e) => setAppDate(e.target.value)}
            />
          </div>

          <label className="submit-label">Last Name (Required):</label>
          <input
            className="submit-input"
            type="text"
            value={applicantName.lastName}
            onChange={(e) =>
              setApplicantName({ ...applicantName, lastName: e.target.value })
            }
            required={true}
          />

          <label className="submit-label">Middle Name (Optional):</label>
          <input
            className="submit-input"
            type="text"
            value={applicantName.middleName}
            onChange={(e) =>
              setApplicantName({ ...applicantName, middleName: e.target.value })
            }
          />

          <label className="submit-label">First Name (Required):</label>
          <input
            className="submit-input"
            type="text"
            value={applicantName.firstName}
            onChange={(e) =>
              setApplicantName({ ...applicantName, firstName: e.target.value })
            }
            required={true}
          />

          <div>
            <label className="submit-label">
              Do you have other last names used? (Optional)
            </label>
            <select
              className="submit-input"
              value={otherLastName.isOtherLastName}
              onChange={(e) =>
                setOtherLastName({
                  ...otherLastName,
                  isOtherLastName: e.target.value,
                })
              }
            >
              <option value={null}>Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {otherLastName.isOtherLastName === "Yes" ? (
              <div>
                <div>
                  <label className="submit-label">Last Name 1:</label>
                  <input
                    className="submit-input"
                    type="text"
                    value={otherLastName.otherLastName2}
                    onChange={(e) =>
                      setOtherLastName({
                        ...otherLastName,
                        otherLastName2: e.target.value,
                      })
                    }
                  />

                  <label className="submit-label">Last Name 2:</label>
                  <input
                    className="submit-input"
                    type="text"
                    value={otherLastName.otherLastName3}
                    onChange={(e) =>
                      setOtherLastName({
                        ...otherLastName,
                        otherLastName3: e.target.value,
                      })
                    }
                  />

                  <label className="submit-label">Last Name 3:</label>
                  <input
                    className="submit-input"
                    type="text"
                    value={otherLastName.otherLastName4}
                    onChange={(e) =>
                      setOtherLastName({
                        ...otherLastName,
                        otherLastName4: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            ) : null}
          </div>
        
        {/* End name section */}
        <div>
          <label className="submit-label">Gender (Required):</label>
          <select
            className="submit-input"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value={null}>Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div> {/* End gender section */}
        <div>
          <label className="submit-label">Age (Required):</label>
          <input
            className="submit-input"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required={true}
            min={18}
          />
        </div> {/* End age section */}
        </div>
        <div className="form-section">
          <label className="submit-label">Address (Required):</label>
          <input
            className="submit-input"
            type="text"
            value={address.street}
            onChange={(e) => setAddress({ ...address, street: e.target.value })}
            required={true}
          />

          <label className="submit-label">City (Required):</label>
          <input
            className="submit-input"
            type="text"
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
            required={true}
          />

          <label className="submit-label">Zip (Required): </label>
          <input
            className="submit-input"
            type="text"
            value={address.zip}
            onChange={(e) => setAddress({ ...address, zip: e.target.value })}
            required={true}
          />

          <label className="submit-label">Phone (Required):</label>
          <input
            className="submit-input"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required={true}
          />
        </div>
        {/* TODO: Maybe add the functionality for "Other adults" here so address only pops up if No is selected */}
        <div className="form-section">
          <label className="submit-label">Homeless (Required):</label>
          <select
            className="submit-input"
            value={homeless}
            onChange={(e) => setHomeless(e.target.value)}
          >
            <option value={null}>Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <label className="submit-label">Disabled (Required):</label>
          <select
            className="submit-input"
            value={disabled}
            onChange={(e) => setDisabled(e.target.value)}
          >
            <option value={null}>Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        {/* End Primary Applicant Section */}

        {/* Start Help Request Section */} 
        <div className="form-section">
          <p>Help Request:</p>
          <label className="submit-label">Rent (Required):</label>
          <select
            className="submit-input"
            value={helpRequest.rent}
            onChange={(e) =>
              setHelpRequest({ ...helpRequest, rent: e.target.value })
            }
          >
            <option value={null}>Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <label className="submit-label">Gasoline (Required):</label>
          <select
            className="submit-input"
            value={helpRequest.gasoline}
            onChange={(e) =>
              setHelpRequest({ ...helpRequest, gasoline: e.target.value })
            }
          >
            <option value={null}>Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <label className="submit-label">License Plate # (Optional):</label>
          { /* TODO: Create logic to only have license plate # pop up if yes is selected??*/ }
          <input
            className="submit-input"
            type="text"
            value={helpRequest.licensePlate}
            onChange={(e) =>
              setHelpRequest({ ...helpRequest, licensePlate: e.target.value })
            }
          />

          <label className="submit-label">Bus Ticket (Required):</label>
          <select
            className="submit-input"
            type="text"
            value={helpRequest.busTicket}
            onChange={(e) =>
              setHelpRequest({ ...helpRequest, busTicket: e.target.value })
            }
          >
            <option value={null}>Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <label className="submit-label">Food (Required):</label>
          <select
            className="submit-input"
            value={helpRequest.food}
            onChange={(e) =>
              setHelpRequest({ ...helpRequest, food: e.target.value })
            }
          >
            <option value={null}>Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        {/* ID Source Section */}
        <div className="form-section">
          <p>ID Source:</p>
          <label className="submit-label">Driver's License (Required):</label>
          <input
            className="submit-input"
            type="text"
            value={IdSource.license}
            onChange={(e) =>
              setIdSource({ ...IdSource, license: e.target.value })
            }
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
        <div className="form-section">
          <label className="submit-label">Single Male (Required):</label>
          <select
            className="submit-input"
            value={singleMale}
            onChange={(e) => setSingleMale(e.target.value)}
          >
            <option value={null}>Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <label className="submit-label">Single Female (Required):</label>
          <select
            className="submit-input"
            value={singleFemale}
            onChange={(e) => setSingleFemale(e.target.value)}
          >
            <option value={null}>Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        {/* End Applicant Section */}

        {/* Start Children Section */}
        <div className="form-section">
          <div>
            <label className="submit-category">
              <h3>
                <u>Children:</u>
              </h3>
            </label>
            <label className="submit-label">
              Do you have children, under the age of 18, permanently living with
              you? (Required)
            </label>
            <select
              className="submit-input"
              value={children.isChildren}
              required={true}
              onChange={(e) =>
                setChildren({ ...children, isChildren: e.target.value })
              }
            >
              <option value={null}>Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
        </div>

        <div>
          <label className="submit-label">How many boys? (Required):</label>
          <input
            className="submit-input"
            type="number"
            min={0}
            value={children.boyNumber}
            onChange={(e) =>
              setChildren({ ...children, boyNumber: e.target.value })
            }
          />
          <label className="submit-label">
          <label className="submit-label">Age (Required):</label>
            <input
              className="submit-input"
              type="text"
              value={children.boyAge}
              onChange={(e) =>
                setChildren({ ...children, boyAge: e.target.value })
              }
            />
          </label>
        </div>
        <div>
          <label className="submit-label">How many girls? (Required):</label>
          <input
            className="submit-input"
            type="number"
            min={0}
            value={children.girlNumber}
            onChange={(e) =>
              setChildren({ ...children, girlNumber: e.target.value })
            }
          />
          <label className="submit-label">Age (Required):</label>
          <input
            className="submit-input"
            type="text"
            value={children.girlAge}
            onChange={(e) =>
              setChildren({ ...children, girlAge: e.target.value })
            }
          />
        </div>
        <div>
          <label className="submit-label">
            What is your relationship to the children? (Required)
          </label>
          <input
            type="text"
            value={children.childRel}
            onChange={(e) =>
              setChildren({ ...children, childRel: e.target.value })
            }
          />
        </div>
        <div>
          <label className="submit-label">Children's School District (Required):</label>
          <input
            type="text"
            value={children.schoolDistrict}
            onChange={(e) =>
              setChildren({ ...children, schoolDistrict: e.target.value })
            }
          />

          <label className="submit-label">School Name (Required):</label>
          <input
            type="text"
            value={children.schoolName}
            onChange={(e) =>
              setChildren({ ...children, schoolName: e.target.value })
            }
          />
        </div>
        </div> {/* End Children Section */}



        {/* Start Other Adults Section */}
        <div className="form-section">
          <div>
            <label className="submit-category">
              <h3>
                <u>Other Adults:</u>
              </h3>
            </label>
            <label className="submit-label">
              Do you have other adults (18 and over) living in the home?
              (Required)
            </label>
            <select
              className="submit-input"
              value={adults.isAdults}
              required={true}
              onChange={(e) =>
                setAdults({ ...adults, isAdults: e.target.value })
              }
            >
              <option value={null}>Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          {adults.isAdults === "Yes" ? (
            <div>
              <div>
                <label className="submit-label">
                  Number of Adults (including you) (Required):
                </label>
                <select
                  className="submit-input"
                  min={1}
                  value={adults.numberOfAdults}
                  required={true}
                  onChange={(e) =>
                    setAdults({ ...adults, numberOfAdults: e.target.value })
                  }
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div>
                <p>Other Adult 1</p>
                <label className="submit-label">Last Name (Required):</label>
                <input
                  type="text"
                  value={adults.adultInformation1.lastName1}
                  required={true}
                  onChange={(e) =>
                    setAdults({
                      ...adults,
                      adultInformation1: {
                        ...adults.adultInformation1,
                        lastName1: e.target.value,
                      },
                    })
                  }
                />

                <label className="submit-label">Middle Name (Optional):</label>
                <input
                  type="text"
                  value={adults.adultInformation1.middleName1}
                  onChange={(e) =>
                    setAdults({
                      ...adults,
                      adultInformation1: {
                        ...adults.adultInformation1,
                        middleName1: e.target.value,
                      },
                    })
                  }
                />

                <label className="submit-label">First Name (Required):</label>
                <input
                  type="text"
                  value={adults.adultInformation1.firstName1}
                  required={true}
                  onChange={(e) =>
                    setAdults({
                      ...adults,
                      adultInformation1: {
                        ...adults.adultInformation1,
                        firstName1: e.target.value,
                      },
                    })
                  }
                />
                <div>
                  <label className="submit-label">Sex (Required):</label>
                  <select
                    className="submit-input"
                    value={adults.adultInformation1.adultSex1}
                    required={true}
                    onChange={(e) =>
                      setAdults({
                        ...adults,
                        adultInformation1: {
                          ...adults.adultInformation1,
                          adultSex1: e.target.value,
                        },
                      })
                    }
                  >
                    <option value={null}>Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>

                  <label className="submit-label">Age (Required):</label>
                  <input
                    type="number"
                    value={adults.adultInformation1.adultAge1}
                    required={true}
                    onChange={(e) =>
                      setAdults({
                        ...adults,
                        adultInformation1: {
                          ...adults.adultInformation1,
                          adultAge1: e.target.value,
                        },
                      })
                    }
                  />

                  <label className="submit-label">
                    Relationship (Required):
                  </label>
                  <input
                    type="text"
                    value={adults.adultInformation1.adultRel1}
                    required={true}
                    onChange={(e) =>
                      setAdults({
                        ...adults,
                        adultInformation1: {
                          ...adults.adultInformation1,
                          adultRel1: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </div>
              <div>
                <p>Other Adult 2</p>
                <label className="submit-label">Last Name (Required):</label>
                <input
                  type="text"
                  value={adults.adultInformation2.lastName2}
                  required={true}
                  onChange={(e) =>
                    setAdults({
                      ...adults,
                      adultInformation2: {
                        ...adults.adultInformation2,
                        lastName2: e.target.value,
                      },
                    })
                  }
                />

                <label className="submit-label">Middle Name (Required):</label>
                <input
                  type="text"
                  value={adults.adultInformation2.middleName2}
                  onChange={(e) =>
                    setAdults({
                      ...adults,
                      adultInformation2: {
                        ...adults.adultInformation2,
                        middleName2: e.target.value,
                      },
                    })
                  }
                />

                <label className="submit-label">First Name (Required):</label>
                <input
                  type="text"
                  value={adults.adultInformation2.firstName2}
                  required={true}
                  onChange={(e) =>
                    setAdults({
                      ...adults,
                      adultInformation2: {
                        ...adults.adultInformation2,
                        firstName2: e.target.value,
                      },
                    })
                  }
                />
                <div>
                  <label className="submit-label">Sex (Required):</label>
                  <select
                    className="submit-input"
                    value={adults.adultInformation2.adultSex2}
                    required={true}
                    onChange={(e) =>
                      setAdults({
                        ...adults,
                        adultInformation2: {
                          ...adults.adultInformation2,
                          adultSex2: e.target.value,
                        },
                      })
                    }
                  >
                    <option value={null}>Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>

                  <label className="submit-label">Age (Required):</label>
                  <input
                    type="number"
                    value={adults.adultInformation2.adultAge2}
                    required={true}
                    onChange={(e) =>
                      setAdults({
                        ...adults,
                        adultInformation2: {
                          ...adults.adultInformation2,
                          adultAge2: e.target.value,
                        },
                      })
                    }
                  />

                  <label className="submit-label">
                    Relationship (Required):
                  </label>
                  <input
                    type="text"
                    value={adults.adultInformation2.adultRel2}
                    required={true}
                    onChange={(e) =>
                      setAdults({
                        ...adults,
                        adultInformation2: {
                          ...adults.adultInformation2,
                          adultRel2: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                {adults.numberOfAdults > 2 && (
                  <div>
                    <p>Other Adult 3</p>
                    <label className="submit-label">
                      Last Name (Required):
                    </label>
                    <input
                      type="text"
                      value={adults.adultInformation3.lastName3}
                      required={true}
                      onChange={(e) =>
                        setAdults({
                          ...adults,
                          adultInformation3: {
                            ...adults.adultInformation3,
                            lastName3: e.target.value,
                          },
                        })
                      }
                    />

                    <label className="submit-label">
                      Middle Name (Required):
                    </label>
                    <input
                      type="text"
                      value={adults.adultInformation3.middleName3}
                      onChange={(e) =>
                        setAdults({
                          ...adults,
                          adultInformation3: {
                            ...adults.adultInformation3,
                            middleName3: e.target.value,
                          },
                        })
                      }
                    />

                    <label className="submit-label">
                      First Name (Required):
                    </label>
                    <input
                      type="text"
                      value={adults.adultInformation3.firstName3}
                      required={true}
                      onChange={(e) =>
                        setAdults({
                          ...adults,
                          adultInformation3: {
                            ...adults.adultInformation3,
                            firstName3: e.target.value,
                          },
                        })
                      }
                    />
                    <div>
                      <label className="submit-label">Sex (Required):</label>
                      <select
                        className="submit-input"
                        value={adults.adultInformation3.adultSex3}
                        required={true}
                        onChange={(e) =>
                          setAdults({
                            ...adults,
                            adultInformation3: {
                              ...adults.adultInformation3,
                              adultSex3: e.target.value,
                            },
                          })
                        }
                      >
                        <option value={null}>Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>

                      <label className="submit-label">Age (Required):</label>
                      <input
                        type="number"
                        value={adults.adultInformation3.adultAge3}
                        required={true}
                        onChange={(e) =>
                          setAdults({
                            ...adults,
                            adultInformation3: {
                              ...adults.adultInformation3,
                              adultAge3: e.target.value,
                            },
                          })
                        }
                      />

                      <label className="submit-label">
                        Relationship (Required):
                      </label>
                      <input
                        type="text"
                        value={adults.adultInformation3.adultRel3}
                        required={true}
                        onChange={(e) =>
                          setAdults({
                            ...adults,
                            adultInformation3: {
                              ...adults.adultInformation3,
                              adultRel3: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                  </div>
                )}
                {adults.numberOfAdults === "4" && (
                  <div>
                    <p>Other Adult 4</p>
                    <label className="submit-label">
                      Last Name (Required):
                    </label>
                    <input
                      type="text"
                      value={adults.adultInformation4.lastName4}
                      required={true}
                      onChange={(e) =>
                        setAdults({
                          ...adults,
                          adultInformation4: {
                            ...adults.adultInformation4,
                            lastName4: e.target.value,
                          },
                        })
                      }
                    />

                    <label className="submit-label">
                      Middle Name (Required):
                    </label>
                    <input
                      type="text"
                      value={adults.adultInformation4.middleName4}
                      onChange={(e) =>
                        setAdults({
                          ...adults,
                          adultInformation4: {
                            ...adults.adultInformation4,
                            middleName4: e.target.value,
                          },
                        })
                      }
                    />

                    <label className="submit-label">
                      First Name (Required):
                    </label>
                    <input
                      type="text"
                      value={adults.adultInformation4.firstName4}
                      required={true}
                      onChange={(e) =>
                        setAdults({
                          ...adults,
                          adultInformation4: {
                            ...adults.adultInformation4,
                            firstName4: e.target.value,
                          },
                        })
                      }
                    />
                    <div>
                      <label className="submit-label">Sex (Required):</label>
                      <select
                        className="submit-input"
                        value={adults.adultInformation4.adultSex4}
                        required={true}
                        onChange={(e) =>
                          setAdults({
                            ...adults,
                            adultInformation4: {
                              ...adults.adultInformation4,
                              adultSex4: e.target.value,
                            },
                          })
                        }
                      >
                        <option value={null}>Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>

                      <label className="submit-label">Age (Required):</label>
                      <input
                        type="number"
                        value={adults.adultInformation4.adultAge4}
                        required={true}
                        onChange={(e) =>
                          setAdults({
                            ...adults,
                            adultInformation4: {
                              ...adults.adultInformation4,
                              adultAge4: e.target.value,
                            },
                          })
                        }
                      />

                      <label className="submit-label">
                        Relationship (Required):
                      </label>
                      <input
                        type="text"
                        value={adults.adultInformation4.adultRel4}
                        required={true}
                        onChange={(e) =>
                          setAdults({
                            ...adults,
                            adultInformation4: {
                              ...adults.adultInformation4,
                              adultRel4: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </div>
        {/* End Adults Section */}

        {/* Start Apartment / Landlord Section */}
        <div className="form-section">
          <div>
            <label className="submit-category">
              <h3>
                <u>Apartment/Landlord</u>
              </h3>
            </label>
          </div>
          <div>
            <label className="submit-label">
              Apartment/Landlord Name (Required):
            </label>
            <input
              className="submit-input"
              type="text"
              value={landlord.landlordName}
              required={true}
              onChange={(e) =>
                setLandlord({ ...landlord, landlordName: e.target.value })
              }
            />
            <label className="submit-label">
              Interviewer Check Name (Required):
            </label>
            <select
              className="submit-input"
              value={landlord.checkName}
              required={true}
              onChange={(e) =>
                setLandlord({ ...landlord, checkName: e.target.value })
              }
            >
              <option value={null}>Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div>
            <label className="submit-label">Street Address (Required):</label>
            <input
              className="submit-input"
              type="text"
              value={landlord.street}
              required={true}
              onChange={(e) =>
                setLandlord({ ...landlord, street: e.target.value })
              }
            />
            <label className="submit-label">City (Required): </label>
            <input
              className="submit-input"
              type="text"
              value={landlord.city}
              required={true}
              onChange={(e) =>
                setLandlord({ ...landlord, city: e.target.value })
              }
            />
            <label className="submit-label">Zip (Required): </label>
            <input
              className="submit-input"
              type="text"
              value={landlord.zip}
              required={true}
              onChange={(e) =>
                setLandlord({ ...landlord, zip: e.target.value })
              }
            />
            <label className="submit-label">Phone (Required): </label>
            <input
              className="submit-input"
              type="text"
              value={landlord.phone}
              required={true}
              onChange={(e) =>
                setLandlord({ ...landlord, phone: e.target.value })
              }
            />
          </div>
        </div>
        {/* End Apartment / Landlord Section */}

        {/* Start Income Section */}
        <div className="form-section">
          <div>
            <label className="submit-category">
              <h3>
                <u>Income</u>
              </h3>
            </label>
          </div>
          <div>
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
            <div>
              <label className="submit-label">
                Number of members supported by this income (Required):
              </label>
              <input
                className="submit-input"
                type="number"
                value={income.numberMembers}
                required={true}
                min={1}
                onChange={(e) =>
                  setIncome({ ...income, numberMembers: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        {/* End Income Section */}

        {/* Start Demographics Section */}
        <div className="form-section">
          <div>
            <label className="submit-category">
              <h3>
                <u>Demographics</u>
              </h3>
            </label>
          </div>
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
