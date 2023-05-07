 import React, { Component } from 'react';
 import { Link } from 'react-router-dom';
 import { useRef } from "react";

 export default class Navbar extends Component {
    render(){
        return (
            <nav className= "navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to = "/" className = "navbar-brand">FWCCN</Link>
                <div className = "collpase navbar-collapse">
                    <ul className = "navbar-nav mr-auto">
                        <li className = "navbar-item">
                            <Link to = "/" className = "nav-link"> FWCCN</Link>
                        </li>
                        <li className = "navbar-item">
                            <Link to = "/create" className="nav-link"> createApplicant </Link>
                        </li>
                        <li className = "navbar-item">
                            <Link to = "/user" className="nav-link"> create applicant</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
 }