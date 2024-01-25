import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import Navbar from './Navbar';
import Footer from './Footer';
import Error from './Error';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from './Service';

import { Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Service />} />
        <Route path='*' element={<Error />} />        
      </Routes>
      <Footer/>
    </>
  )
}

export default App
