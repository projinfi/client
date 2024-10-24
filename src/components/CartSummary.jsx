import React, { useState } from 'react';
import '../components/CartSummary.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addShippingMethod } from '../slices/cartSlice';
import { addShippingMode } from '../slices/cartSlice';

const CartSummary = ({onStepChange}) => {

  const reduxTotalAmount = useSelector((state) => state.cart.totalAmount );
  const shippingMode = useSelector((state) => state.cart.shippingMode );
  const shippingCost = useSelector((state) => state.cart.shippingCost );

  console.log(reduxTotalAmount)
  const dispatch = useDispatch()

  const handleShippingMethod = (id) => {
 
    if (id === "free") {
      const value = 0;
      dispatch(addShippingMethod(value))
      dispatch(addShippingMode(id))
    } else {
      const value = 100;
      dispatch(addShippingMethod(value))
      dispatch(addShippingMode(id))
    }
  }

  return (
    <div className='cart-summary-container'>
        <div className='cart-summary-title'>Cart Summary</div>
        <div onClick={()=>handleShippingMethod("free")} className='cart-item-shipping'>
           <div className='cart-shipping-title'>
            <input id="free" checked={shippingMode==="free"} onChange={(e)=>handleShippingMethod(e.target.id)} type='radio' />
            <label className='shipping-label'  htmlFor="freeShipping" for="freeShipping">Free Shipping</label>
           </div>
        </div>
        <div  onClick={()=>handleShippingMethod("express")} className='cart-item-shipping'>
           <div className='cart-shipping-title'>
            <input id="express" checked={shippingMode ==="express"} onChange={(e)=>handleShippingMethod(e.target.id)} type='radio' />
            <label className='shipping-label' for="expressShipping">Express Shipping</label>
           </div>
           <div className='cart-shipping-price'>₹ 100</div>
        </div>
        <div className='total-amount-box'>
            <div className='total-amount-title'>Total</div>
            <div className='total-amount-number'>₹ {reduxTotalAmount + shippingCost}</div>
        </div>
        <div onClick={()=>onStepChange(2)} className='cart-checkout-btn'>Proceed To Checkout</div>
    </div>
  )
}

export default CartSummary