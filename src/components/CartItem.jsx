import React from 'react';
import '../components/CartItem.css';
import cartImg from '../assets/products/product1.png'

const CartItem = ({data}) => {
    return (
        <div className='cart-item-box'>
            <div className='cart-item-left'>
                <img className='cart-box-img' src={data.product_image}/>
            </div>
            <div className='cart-item-right'>
                <div className='cart-item-name'>{data.product_name}</div>
                <div className='cart-item-cancel'>X Remove</div>
            </div>
        </div>
    )
}

export default CartItem