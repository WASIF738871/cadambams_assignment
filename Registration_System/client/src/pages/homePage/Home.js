import React from 'react';
import "./home.css";
import Calender from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import { NavLink } from 'react-router-dom';

let timeSlot = ["1: 00 pm","1: 30 pm","2: 00 pm","2: 30 pm","3: 00 pm","3: 30 pm","4: 00 pm"]

const Home = () => {
    const [value, onChange] = useState();
    return (
        <div className="home_section">
            <div className="home">
                <div className="home_left">
                    <h3>Select date and time</h3>
                    <Calender className="home_calender" onChange={onChange} value={value} />
                </div>
                {value &&
                    <div className="home_right">
                        <div>
                            <h4>Thursday, October</h4>
                          {  timeSlot.map((time, i)=>(<NavLink key={i}  to = "/step2" style= {{textDecoration:"none"}} >
                            <div className="home_right_time">
                                <p>{time}</p>
                            </div>
                            </NavLink>)
                            )}

                        </div>

                    </div>
                }

            </div>
        </div>
    )
}

export default Home;