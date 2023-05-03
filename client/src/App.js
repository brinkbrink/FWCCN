// import './App.css';
// import SubmitForm from './components/SubmitForm';
// import "./SubmitForm.css"
// import "./navbar.css"
// import { Link, Events } from 'react-scroll';


// function App() {
//     return (
//         <div className="App">
//           <nav className="navbar">
//             <a href="/">Home</a>
//             <a href="/rent">Rent</a>
//             <a href="/bus-tickets">Bus Tickets</a>
//             <a href="/gas-vouchers">Gas Vouchers</a>
//           </nav>
//           <div className="organization-display">
//             <h1>Federal Way Community Caregiving Networking</h1>
//           </div>
//           <SubmitForm />

//           <div className="rent-info">
//   <h2>Rent Assistance Programs</h2>
// <p> Federal Way Community Caregiving Networking is committed to providing affordable housing options to our community members. Our Rent program offers a variety of resources and services to assist individuals and families with securing safe and affordable housing. We offer rental assistance programs, landlord-tenant mediation services, and connections to housing resources throughout the region. Our goal is to help individuals and families maintain stable housing and prevent homelessness. Contact us today to learn more about how we can assist you with your housing needs.</p>

// </div>
//         </div>
//       );
// }
// export default App;

import './App.css';
import SubmitForm from './components/SubmitForm';
import "./SubmitForm.css"
import "./navbar.css"
import { Link } from 'react-scroll';


function App() {
    return (
        <div className="App">
            <div className="organization-display">
                <h1>Federal Way Community Caregiving Networking</h1>
            </div>
            <SubmitForm />   
        </div>
    );
}

export default App;



