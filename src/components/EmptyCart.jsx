import React from 'react';
import '../components/EmptyCart.css';
import emptyCard from '../assets/emptyCart.gif';

const EmptyCart = () => {
  return (
    <div className='empty-cart-contaner'>
       <div className='empty-cart-content'>
          <div className='empty-cart-image'>
            <img className='empty-card-img' src={emptyCard}/>
          </div>
          <div className='empty-cart-title'>Your Cart is <span className='empty-text'>Empty!</span></div>
          <div className='empty-cart-description'>Must add items on the cart before you proceed to check out</div>
       </div>
    </div>
  )
}

export default EmptyCart