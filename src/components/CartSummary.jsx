import React from 'react';
import '../components/CartSummary.css';

const CartSummary = () => {
  return (
    <div className='cart-summary-container'>
        <div className='cart-summary-title'>Cart Summary</div>
        <div className='cart-item-shipping'>
           <div className='cart-shipping-title'>
            <input type='radio' id='freeShipping'/>
            <label className='shipping-label' for="freeShipping">Free Shipping</label>
           </div>
           <div className='cart-shipping-price'>₹ 30</div>
        </div>
        <div className='cart-item-shipping'>
           <div className='cart-shipping-title'>
            <input type='radio' id='expressShipping'/>
            <label className='shipping-label' for="expressShipping">Express Shipping</label>
           </div>
           <div className='cart-shipping-price'>₹ 30</div>
        </div>
        <div className='total-amount-box'>
            <div className='total-amount-title'>Total</div>
            <div className='total-amount-number'>₹ 200</div>
        </div>
        <div className='cart-checkout-btn'>Checkout</div>
    </div>
  )
}

export default CartSummary