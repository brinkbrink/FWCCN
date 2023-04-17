import './App.css';
import {useState, useEffect} from 'react';

function App() {
    const [applicants, setApplicants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/getApplicants')
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error('Something went wrong');
                }
            })
            .then(data => {
                setApplicants(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div className="App">
            <div className="applicant-display">
                <h1>Applicants</h1>
                <div className="applicant-list">
                    {applicants.map(applicant => (
                        <div className="applicant" key={applicant._id}>
                            <p>ID: {applicant._id}</p>
                            <p>Last Name: {applicant.lastName}</p>
                            <p>First Name: {applicant.firstName}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
