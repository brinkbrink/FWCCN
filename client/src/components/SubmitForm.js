// this is a form that will be used to submit a new applicant to the database
// make the button type="submit" so that it will submit the form
// it will be rendered in the App.js file
import React, { useState } from 'react';

function SubmitForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        const applicant = { firstName, lastName };
        console.log(applicant);
    }

    //insert fetch request here to send the applicant to the database
    fetch('http://localhost:3001/createApplicants', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            { firstName: firstName, lastName: lastName }
        )
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

    
    return (
        <div className="submit-form">
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <label>Last Name</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />

                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default SubmitForm;

