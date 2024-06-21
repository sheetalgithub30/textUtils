import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { themeContext } from './App'

function Navbar() {
  const {theme,setTheme} = useContext(themeContext);

  function toggle(){
    if(theme == 'root'){
      setTheme("dark-mode");

    }
    else{
    setTheme("root");
    }
  }
  return (
    <div id="navbar">
       <div id="logo">
        <h2>TextUtils</h2>
        <Link to='/'>Home</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/contact'>Contact</Link>
        </div>
        <div id="mode">
          <button onClick={toggle}>Switch Mode</button>
        </div>
    </div>
  )
}

export default Navbar