import React from 'react';
import "./step5.css";
import { NavLink } from 'react-router-dom';

const Step5 = () => {
  return (
    <div className='step5'>
         <div className="step5_registration">
                <h4>New User Registration</h4>
                <div className="color">

                </div>
                <small>step2 of 3</small>
            </div>


            <div className="container">
                <label htmlFor="education">Education</label>
                <div className="phone_container">
                    <input type="text" placeholder='Enter education' name="name" id="mobile" />
                </div>
            </div>
            <div className="container">
                <label htmlFor="occupation">Occupation</label>
                <div className="phone_container">
                    <input type="text" placeholder='Enter occupation' name="mobile" id="mobile" />
                </div>
            </div>
            <div className="container">
                <label htmlFor="city">City</label>
                <div className="phone_container">
                    <input type="text" placeholder='Select Your City' name="mobile" id="mobile" />
                </div>
            </div>
            <div className="container">
                <label htmlFor="pincode">Pincode</label>
                <div className="phone_container">
                    <input type="text" placeholder='Enter Pincode' name="mobile" id="mobile" />
                </div>
            </div>

        <div className="next">
            <NavLink to ="/step6">
            <button>Next</button>
            </NavLink>
        </div>

    </div>
  )
}

export default Step5