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
      <nav className="navbar">
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
        <Link to="rent" spy={true} smooth={true} offset={-70} duration={500}>Rent</Link>
        <Link to="bus-tickets" spy={true} smooth={true} offset={-70} duration={500}>Bus Tickets</Link>
        <Link to="gas-vouchers" spy={true} smooth={true} offset={-70} duration={500}>Gas Vouchers</Link>
      </nav>

      <div className="organization-display">
        <h1 id="home">Federal Way Community Caregiving Networking</h1>
      </div>

      <SubmitForm />


      <div className="rent-info">
        <h2 id="rent">Rent Assistance Programs</h2>
        <p> Federal Way Community Caregiving Networking is committed to providing affordable housing options to our community members. Our Rent program offers a variety of resources and services to assist individuals and families with securing safe and affordable housing. We offer rental assistance programs, landlord-tenant mediation services, and connections to housing resources throughout the region. Our goal is to help individuals and families maintain stable housing and prevent homelessness. Contact us today to learn more about how we can assist you with your housing needs.</p>
      </div>

      <div className="bus-tickets-info">
        <h2 id="bus-tickets">Bus Tickets</h2>
        <p>Federal Way Community Caregiving Networking offers a bus ticket program to help individuals and families who may be experiencing transportation barriers. Our program provides free or reduced-cost bus tickets to eligible community members, allowing them to access important services, such as medical appointments, job interviews, and grocery shopping. We understand the importance of reliable transportation for maintaining a stable life, and our goal is to remove transportation as a barrier for those who need it most. Contact us today to learn more about our bus ticket program and eligibility requirements.</p>
      </div>

      <div className="gas-vouchers-info">
        <h2 id="gas-vouchers">Gas Vouchers</h2>
        <p>Certainly! Federal Way Community Caregiving Networking offers a gas voucher program to assist community members with transportation needs. Gas vouchers are provided to eligible individuals and families to help offset the cost of fuel for personal vehicles. This program is designed to assist individuals who may be experiencing financial hardship and need assistance with transportation to work, school, or other essential appointments. Our goal is to help individuals and families maintain their independence and mobility by providing access to reliable transportation. Contact us today to learn more about how we can assist you with your transportation needs.</p>
      </div>


    </div>
    
  );
}

export default App;



