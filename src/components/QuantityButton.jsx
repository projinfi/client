import React from 'react';
import '../components/QuantityButton.css';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../slices/cartSlice';
import { updateProductQuantity } from '../slices/cartSlice';

const QuantityButton = ({ data }) => {
  const dispatch = useDispatch();

  const incrementValue = () => {
    dispatch(incrementQuantity({ product_id: data.product_id }));
    const updatedQuantity = data.order_quantity + 1;
    dispatch(updateProductQuantity({ product_id: data.product_id, order_quantity: updatedQuantity }));
  };

  const decrementValue = () => {
    if (data.order_quantity > 1) {
      dispatch(decrementQuantity({ product_id: data.product_id }));
      const updatedQuantity = data.order_quantity - 1;
      dispatch(updateProductQuantity({ product_id: data.product_id, order_quantity: updatedQuantity }));
    }
  };

  return (
    <div className='product-quantity-btn'>
      <div className='quantity-button-space'>
        <div className='button-partition btn-minus' onClick={decrementValue}>-</div>
        <div className='button-partition btn-points'>{data.order_quantity}</div>
        <div className='button-partition btn-plus' onClick={incrementValue}>+</div>
      </div>
    </div>
  );
};

export default QuantityButton;
