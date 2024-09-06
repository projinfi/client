import React from 'react';
import '../components/Navbar.css';
import coupon from '../assets/coupon.png';
import arrow from '../assets/arrow.png';
import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className='navbar-container'>

        {/* total navbar height is 100px and 60px goes to the navbar offer height */}
      <div className='navbar-offer-content'>
        <div className='copoun-icon'><img src={coupon}/></div>

        <div className='navbar-offer-text'>30% off storewide -- Limited time!</div>

      
          <div className='navbar-shopnow-txt'>Shop Now</div>
        
       
        <div className='navbar-shopnow-arrow'><img src={arrow}/></div>

      </div>

      <div className='navbar-content'>
        <div className='navbar-content-right'>
          <img src={Logo}/>
        </div>
        <div className='navbar-content-left'>left</div>
      </div>

    </div>
  )
}

export default Navbar