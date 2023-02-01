import React from 'react';
import "./header.css";
import AssignmentIcon from '@mui/icons-material/Assignment';


const Header = () => {
  return (
    <div className="header">

      <div className="header_section">
        <AssignmentIcon  style={{color:"#3278ff", fontSize:"50px"}}/>
        <h1 className='header_title'> Pick your slot</h1>

        <div className="header_description">
          <p>Our team of certified profesionals are determined to have your back throught your recovery journey.</p>
        </div>

      </div>
    </div>
  )
}

export default Header;