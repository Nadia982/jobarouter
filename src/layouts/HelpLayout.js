import React from 'react';
import {NavLink, Outlet} from 'react-router-dom'

export default function HelpLayout() {
  return (
    <div className="help-layout">
        <h2>Website help</h2>
        <p>Please contact us if you have any questions</p>
        <nav>
            <NavLink to="faq">View the FAQs</NavLink>
            <NavLink to="contact">Contact Us</NavLink>
        </nav>
        <Outlet/>
    </div>    
  )
}
