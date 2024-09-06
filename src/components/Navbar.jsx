import React from 'react';
import '../components/Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar-container'>

        {/* total navbar height is 100px and 60px goes to the navbar offer height */}
        <div className='navbar-offer-content'>
        Offer valid till june
        </div>

      <div className='navbar-content'>
        <div className='navbar-content-right'>right</div>
        <div className='navbar-content-left'>left</div>
      </div>

    </div>
  )
}

export default Navbar