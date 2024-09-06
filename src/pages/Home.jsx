import React from 'react';
import '../pages/Home.css';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
  
    <div className='home-page'>

   {/* total navbar height is 100px and 60px goes to the navbar offer height */}
      <div className='navbar-section'>
        <Navbar />
      </div>
      
      {/* margin top 100px */}
      <div className='home-content'>

        <div className='home-slider-space'>
          slider
        </div>

      </div>

    </div>
  )
}

export default Home