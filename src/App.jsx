import React, { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Footer from './Footer'

export const themeContext = createContext();

function App() {
  const [theme,setTheme] = useState("root");

  return (
    <>
    <themeContext.Provider value={{theme,setTheme}}>
      <Navbar/>
      <div className={theme}>
        <Routes>
      <Route path='/' element={<Home/>}>Home</Route>
      <Route path='/about' element={<About/>}>About Us</Route>
      <Route path='/contact' element={<Contact/>}>Contact</Route>
    </Routes>
      
      </div>
      </themeContext.Provider>

 
    <Footer/>
    </>
  
  )
}

export default App