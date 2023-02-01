import React from 'react';
import "./step6.css";
import { NavLink } from 'react-router-dom';

const Step6 = () => {
    return (
        <div className='step6'>

            <div className="step6_registration">
                <h4>New User Registration</h4>
                <div className="color">

                </div>
                <small>step3 of 3</small>
            </div>


            <div className="container">
                <label htmlFor="address">Address Line 1</label>
                <div className="phone_container">
                    <input type="text" placeholder='Enter Address' name="name" id="mobile" />
                </div>
            </div>
            <div className="container">
                <label htmlFor="address">Address Line 2</label>
                <div className="phone_container">
                    <input type="text" placeholder='Enter Address' name="name" id="mobile" />
                </div>
            </div>
            <div className="container">
                <label htmlFor="address">Address Line 3</label>
                <div className="phone_container">
                    <input type="text" placeholder='Enter Address' name="name" id="mobile" />
                </div>
            </div>
            
            <div className="btn">
                <NavLink to="/final">
                    <button type="submit" value="submit"> Submit</button>
                </NavLink>
            </div>


        </div>
    )
}

export default Step6