import React from 'react';
import { NavLink } from 'react-router-dom';
import "./step2.css"

const Step2 = () => {
  return (
    <div className='step2'>
        <div className="container">
            <label htmlFor="mobile">Phone Number</label>
            <div className="phone_container">
            <input type="text" placeholder='Enter Phone Number' name="mobile" id="mobile" />
            <button>Send OTP</button>
            </div>
        </div>
        <div className="container">
            <label htmlFor="otp">OTP</label>
            <div className="otp_container">
            <input type="otp" size ="1" name="otp" id="otp" />
            <input type="otp" size ="1" name="otp" id="otp" />
            <input type="otp" size ="1" name="otp" id="otp" />
            </div>
        </div>
        <div className="container">
            <label htmlFor="type">Consultation Type</label>
            <div className="type_container">
                <NavLink to = "/step3">
                <button>Online</button>
                </NavLink>
                <NavLink to = "/step3">
                <button>in-Person</button>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Step2;