import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div id="navbar">
       <div id="logo">
        <h2>TextUtils</h2>
        <Link to='/'>Home</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/contact'>Contact</Link>
        </div>
        <div id="mode">
            <button></button>
            <p>Switch Mode</p>
            </div> 
    </div>
  )
}

export default Navbar