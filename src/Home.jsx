import React from 'react';
import Common from './Common';
import web from '../src/images/c3.jpg';

const Home = () => {
  return (
    <>
      <Common 
        name = "Welcome Home Page" 
        imgsrc = {web} 
        visit='/services' 
        btname="Get Started"        
      />
    </>
  )
}

export default Home;
