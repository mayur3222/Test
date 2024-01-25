import React from 'react';
import Common from './Common';
import web from '../src/images/c1.jpg';
// import Sdata from './Sdata';

const About = () => {
  return (
    <>
      <Common 
        name = "About Page ............" 
        imgsrc = {web} 
        visit='/contact' 
        btname="Contact Now"        
      />
    </>
  )
}

export default About;
