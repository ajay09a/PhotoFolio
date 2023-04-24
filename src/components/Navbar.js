import React from 'react'
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <header>
        <div className="navbar">
          <img src={logo} alt="logo" />
          <text>PhotoFolio</text>
        </div>
      </header>
  )
}

export default Navbar