import React, { useState} from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./landingPage.css";
import "./Subscription.css";
import axios from 'axios';

function Subscription(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    function handleclick(){
        const url = "http://localhost:5000/";
        const data = {
        firstName: firstName,
        lastName: lastName,
        email: email
        };
        axios
        .post(url, data)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error.message);
        });
    }
    return(
        <div className="subscription">
            <div className="waveUp" />
            <Navbar className="navBar" />
            <div className="subscription-form">
                <div className="subscription-form-heading">
                    <h1>Subscribe for the newsletter</h1>
                </div>
                <input type="text" className="subscription-form-input" placeholder="First Name" value={firstName} onChange={handleFirstNameChange} required autoFocus /> <br />
                <input type="text" className="subscription-form-input" placeholder="Last Name" value={lastName} onChange={handleLastNameChange} required /> <br />
                <input type="email" className="subscription-form-input" placeholder="Email Address" value={email} onChange={handleEmailChange} required /> <br />
                <button className="subscription-form-button" type="submit" onClick={() => {
                    handleclick();
                  }}>Sign Me Up!</button>
            </div>
            <Footer className="footer"></Footer>
        </div>
    );
}   

export default Subscription;