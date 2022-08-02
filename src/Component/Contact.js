import React from "react";
import { NavLink } from "react-router-dom";
import '../Css/ContactStyle.css';

const Contact = () => {
    return(
        <>
        <h1>Contact Us</h1>
        <form className="contact">
            <div>
                <label htmlForm="name">Name</label>
                <input type="text" placeholder="Enter your name"/>
            </div>
            <div>
                <label htmlForm="name">Email</label>
                <input type="email" placeholder="Enter your email"/>
            </div>
            <div>
                <label htmlForm="password">Password</label>
                <input type="password" placeholder="Enter your password"/>
            </div>
            <div>
                <label htmlForm="mobile">Mobile</label>
                <input type="number" placeholder="Enter your mobile no."/>
            </div>
            <div className="btnBox">
                <div className="btn">
                <NavLink  to ="/"
                       className="readMore"
                      >Submit Details</NavLink>
                </div>
             </div>
        </form>
        </>
    )
}

export default Contact;