import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
        <div className='navbar_logo'>
            <img src="../../logo/LOGO.png" alt="logo" />
        </div>
        <NavLink to = "/">
          <div>Accueil</div>
        </NavLink>
        <NavLink to = "/about">
          <div>A Propos</div>
        </NavLink>
    </nav>
  )
}

export default Navbar;