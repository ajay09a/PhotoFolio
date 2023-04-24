import React from 'react'
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <header>
        <div className="navbar">
          <img src={logo} alt="logo" />
          <span>PhotoFolio</span>
        </div>
      </header>
  )
}

export default Navbar