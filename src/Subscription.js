import React, { lazy,Suspense, useState} from "react";
import "./landingPage.css";
import "./Subscription.css";
import axios from 'axios';
const LazyFooter = lazy(() => import('./components/footer'));

function Subscription(){
    const [showDiv, setShowDiv] = useState(false);
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
            setShowDiv(!showDiv);
        })
        .catch((error) => {
            console.error(error.message);
        });
    }
    return(
        <div className="subscription">
            <div className="subscription-heading">
                    <h1>SUBSCRIPTION</h1>
            </div>
            <div className="subscription-form">
                <div className="subscription-form-heading">
                    <h1>Subscribe for the newsletter</h1>
                </div>
                <div className="form-inputs"><label for="subscription-form-input" className="inputlabels">Enter your First Name</label><br />
                <input type="text" placeholder="" className="subscription-form-input" value={firstName} onChange={handleFirstNameChange} required autoFocus /> <br />
                <label for="subscription-form-input" className="inputlabels">Enter your Last Name</label><br />
                <input type="text" placeholder="" className="subscription-form-input" value={lastName} onChange={handleLastNameChange} required /> <br />
                <label for="subscription-form-input" className="inputlabels">Enter your Email Address</label><br />
                <input type="email" className="subscription-form-input" placeholder= "" value={email} onChange={handleEmailChange} required /> <br />
                <button className="subscription-form-button" type="submit" onClick={() => {
                    handleclick();
                  }}>Sign Me Up!</button>
                </div>
                {showDiv && <div className="submit-response" style={{ display: 'block' }}>Thank You for registering!</div>}
            </div>
            <Suspense fallback={<div>Loading...</div>}></Suspense>
            <LazyFooter className="footer"></LazyFooter>
        </div>
    );
}   

export default Subscription;