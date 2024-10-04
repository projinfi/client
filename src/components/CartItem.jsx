import React from 'react';
import '../components/CartItem.css';
import cartImg from '../assets/products/product1.png';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../slices/cartSlice'; // Use the async thunk here

const CartItem = ({ data }) => {
  const dispatch = useDispatch();

  const removeFromCartHandler = (data) => {
    const product_id = data.product_id;
    dispatch(removeFromCart(product_id)); // Dispatch the async action to remove the item from DB
  };

  return (
    <div className='cart-item-box'>
      <div className='cart-item-left'>
        <img className='cart-box-img' src={data.product_image} />
      </div>
      <div className='cart-item-right'>
        <div className='cart-item-name'>{data.product_name}</div>
        <div onClick={() => { removeFromCartHandler(data) }} className='cart-item-cancel'>X Remove</div>
      </div>
    </div>
  );
};

export default CartItem;
