import React from 'react';
import '../pages/Cart.css';
import Navbar from '../components/Navbar';
import CartTable from '../components/CartTable';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';


const Cart = () => {
  return (
   <div className='page'>
     <div className='navbar-section'>
        <Navbar />
      </div>
      <div className='content'>
        <div className='cart-title'>Cart</div>

        <div className='cart-navigation-space'>
          <div className='cart-navigation-btns'>
            <div className='navigation-content on-process'>
              <div className='navigation-count-btn on-process-bg'>1</div>
              <div className='navigation-btn-text'>Shopping Cart</div>
            </div>

            <div className='navigation-content off-process'>
              <div className='navigation-count-btn '>2</div>
              <div className='navigation-btn-text'>Checkout details</div>
            </div>

            <div className='navigation-content off-process'>
              <div className='navigation-count-btn'>3</div>
              <div className='navigation-btn-text'>Order complete</div>
            </div>
          </div>
        </div>

        <div className='cart-display-container'>
          <div className='cart-display-left'>
          <CartTable/>
          </div>
          <div className='cart-display-right'>
           <CartSummary/>
          </div>
        </div>

      </div>
   </div>
  )
}

export default Cart