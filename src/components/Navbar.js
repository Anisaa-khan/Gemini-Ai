import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
 <>
    <div className="nav">
       <span className='logo'>Gemini AI</span>
        <ul className='navbar'>
            <li><NavLink className="nav-list" to="/">Home</NavLink></li>
            <li><NavLink className="nav-list" to="/AboutUs">About us</NavLink></li>
            <li><NavLink className="nav-list" to="/Blog">Blog</NavLink></li>
            <li><NavLink className="nav-list" to="/ContactUs">Contact us</NavLink></li>
        </ul>
    </div>

 
 </>

  )
}

export default Navbar