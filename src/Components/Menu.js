import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/NavbarStyle.css'

const Menu = () =>{
  return(
    <ul className="navigation">
    <NavLink to="/Projects" className="navigation-link">
        Projects
    </NavLink>
      <NavLink to="/AboutMe" className="navigation-link">
          AboutMe
      </NavLink>
      <NavLink to="/" className="navigation-link">
          Home
      </NavLink>
      <NavLink to="/Resume"className="navigation-link">
          Resume
      </NavLink>
      <NavLink to="/Contact" className="navigation-link">
          Contact
      </NavLink>
    </ul>
  )
}

export default Menu
