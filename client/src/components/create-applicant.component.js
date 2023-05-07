import React, { Component } from 'react';
import { useRef } from "react";

export default class CreateApplicant extends Component{
    constructor(props){
        super(props);

        this.onChangeApplicantname = this.onChangeApplicantname.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);


        this.state = {
            applicantName : '',
            age: '',
            gender: '',
            users: []
        }
    }

    componentDidMount(){
        this.setState({
            users: ['test user'],
            applicantName: 'test user'
        })
    }

    onChangeApplicantname(e){ //function
        this.setState({
            applicantName: e.target.value //get applicant name element from the text box

        })
    }

    onChangeAge(e){ 
        this.setState({
          age: e.target.value //get applicant age element from the text box

        })
    }

    onChangeGender(e){ 
        this.setState({
            gender: e.target.value //get applicant name element from the text box

        })
    }

    onSubmit(e){
        e.preventDefault();

        const fwccn = {
            applicantName: this.state.applicantName,
            age: this.state.age,
            gender: this.state.gender 
        }
        console.log(fwccn)

        window.location = "/"
    }

    render(){
        return(
            <div>
                <p>You are on the Create applicant component</p>
            </div>
        )
    }
}