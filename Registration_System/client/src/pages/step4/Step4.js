import React from 'react';
import { NavLink } from 'react-router-dom';
import "./step4.css"

const Step4 = () => {
    return (

        <div className="step4">

            <div className="step4_registration">
                <h4>New User Registration</h4>
                <div className="color">

                </div>
                <small>step1 of 3</small>
            </div>


            <div className="container">
                <label htmlFor="name">Name</label>
                <div className="phone_container">
                    <input type="text" placeholder='Enter Your first & last name' name="name" id="mobile" />
                </div>
            </div>
            <div className="container">
                <label htmlFor="email">Email</label>
                <div className="phone_container">
                    <input type="text" placeholder='Enter Your Email' name="mobile" id="mobile" />
                </div>
            </div>
            <div className="container">
                <label htmlFor="gender">Gender</label>
                <div className="phone_container">
                    <input type="text" placeholder='Select Your Gender' name="mobile" id="mobile" />
                </div>
            </div>
            <div className="container">
                <label htmlFor="age">Age</label>
                <div className="phone_container">
                    <input type="text" placeholder='Select Your age' name="mobile" id="mobile" />
                </div>
            </div>

        <div className="next">
            <NavLink to ="/step5">
            <button>Next</button>
            </NavLink>
        </div>

        </div>
        

    )
}

export default Step4;