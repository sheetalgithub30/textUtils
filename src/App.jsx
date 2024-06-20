import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
  return (
    <>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}>Home</Route>
      <Route path='/about' element={<About/>}>About Us</Route>
      <Route path='/contact' element={<Contact/>}>Contact</Route>
    </Routes>
    <Footer/>
    </>
  
  )
}

export default App