import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react';
import "./step3.css";
import { NavLink } from 'react-router-dom';

let cities = [ "Electronic City","iKoramangala","Jayanagar","Indranagar","JP nagar","Banashankari","iKoramangala","iKoramangala"]

const Step3 = () => {
    return (
        <div className='step3'>
            <div className='step3_container'>
                <label htmlFor="Consultaion">Consultation</label>
                <div className="consultation_container">
                    <button>in-Person</button>
                </div>
            </div>

            <div className='step3_container'>
                <label htmlFor="location">Location</label>
                <div >
                    <ToggleButtonGroup

                        // color="primary"
                        // value={alignment}
                        exclusive
                        // onChange={handleChange}
                        aria-label="Platform"
                    >
                        <ToggleButton value="bangalore">Bangalore</ToggleButton>
                        <ToggleButton value="hydrabad">Hydrabad</ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </div>

            <div className='step3_container'>
                <label htmlFor="centers">Centers</label>
                <div >
                    {cities.map((city, i)=>(
                <NavLink to="/step4" key={i} >
                     <button >{city}</button>
                </NavLink>
                     ))}
                </div>
            </div>

        </div>
    )
}

export default Step3