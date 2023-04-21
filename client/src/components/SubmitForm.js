// this is a submit form
// fetch an endpoint and insert data into the database
import React, { useState } from "react";

function SubmitForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting Name ${firstName} ${lastName}`);
    fetch("http://localhost:3001/createApplicants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
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
        <div>
          <label className="submit-label">
            First Name:
            <input
              className="submit-input"
              type="text"
              placeholder="Enter first name here..."
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required={true}
            />
          </label>

          <label className="submit-label">
            Last Name:
            <input
              className="submit-input"
              type="text"
              placeholder="Enter last name here..."
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required={true}
            />
          </label>

          <button className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SubmitForm;
