import React from 'react'
import "./final.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { NavLink } from 'react-router-dom';

const Final = () => {
  return (
    <div className='final'>
        <div className="final_containt">
            <CheckCircleIcon className='final_confirmation' style={{fontSize:"80px"}}/>
            <h3>Your booking stands confirmed</h3>
            <p>with Dr. Mohd Atif on 34 feb 2023 at 2:30 pm</p>
        </div>
        
        <div className="next">
            <NavLink to ="/">
            <button>New Registration</button>
            </NavLink>
        </div>
    </div>
  )
}

export default Final