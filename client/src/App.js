import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component";
import ApplicantList from "./components/applicant-list.component";
import UpdateApplicant from "./components/update-applicant.component";
import CreateApplicant from "./components/create-applicant.component";


function App() {
   return( 

    <Router>
        <div className = "container">
            <Navbar/>
            <br/>
            <Route path="/" exact component = {ApplicantList} />
            <Route path="/edit/:id" component= {UpdateApplicant}/>
            <Route path= "/create" component={CreateApplicant}/> 
        </div>
    </Router>
  
   /** 
        <div className = "container">
            Hello World!
        </div>
        */
    );
}

export default App;
