import React from 'react';
import '../components/PleaseLoginModal.css';
import pleaseLogin from '../assets/pleaseAddToCart.gif';
import closeIcon from '../assets/closeIcon.svg'

const PleaseLoginModal = ({onClose}) => {
  return (
    <div className='please-login-container'>
      <div className='please-login-content'>
        <img onClick={onClose} className='close-icon' src={closeIcon} />
        <div className='please-login-image'><img className='please-login-img' src={pleaseLogin} /></div>
        <div className='please-login-text'>Heyy <span className='please-login-btn'>Login</span> to Add To Cart</div>
      </div>
    </div>
  )
}

export default PleaseLoginModal