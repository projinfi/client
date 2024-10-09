import React, { useState } from 'react';
import '../components/CartSummary.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const CartSummary = () => {

  const reduxTotalAmount = useSelector((state) => state.cart.totalAmount );
  console.log(reduxTotalAmount)

  return (
    <div className='cart-summary-container'>
        <div className='cart-summary-title'>Cart Summary</div>
        <div className='cart-item-shipping'>
           <div className='cart-shipping-title'>
            <input type='radio' id='freeShipping'/>
            <label className='shipping-label' for="freeShipping">Free Shipping</label>
           </div>
        </div>
        <div className='cart-item-shipping'>
           <div className='cart-shipping-title'>
            <input type='radio' id='expressShipping'/>
            <label className='shipping-label' for="expressShipping">Express Shipping</label>
           </div>
           <div className='cart-shipping-price'>₹ 100</div>
        </div>
        <div className='total-amount-box'>
            <div className='total-amount-title'>Total</div>
            <div className='total-amount-number'>₹ {reduxTotalAmount}</div>
        </div>
        <div className='cart-checkout-btn'>Checkout</div>
    </div>
  )
}

export default CartSummary