import React from 'react';
import '../components/CartItem.css';
import cartImg from '../assets/products/product1.png'

const CartItem = () => {
    return (
        <div className='cart-item-box'>
            <div className='cart-item-left'>
                <img className='cart-box-img' src={cartImg}/>
            </div>
            <div className='cart-item-right'>
                <div className='cart-item-name'>name of the cart item</div>
                <div className='cart-item-cancel'>X Remove</div>
            </div>
        </div>
    )
}

export default CartItem