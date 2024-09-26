import React from 'react';
import '../components/QuantityButton.css';
import { useDispatch } from 'react-redux';
import { incrementQuantity } from '../slices/cartSlice';
import  {decrementQuantity}  from '../slices/cartSlice';

const QuantityButton = ({data}) => {

  const dispatch = useDispatch()

  const incrementValue = () => {
   dispatch(incrementQuantity({id:data.id}))
  }

  const decrementValue = () => {
    dispatch(decrementQuantity({id:data.id}))
   }

  return (
    <div className='product-quantity-btn'>
        <div className='quantity-button-space'>
            <div className='button-partition btn-minus' onClick={()=>{decrementValue(data)}}>-</div>
            <div className='button-partition btn-points'>{data.order_quantity}</div>
            <div className='button-partition btn-plus' onClick={()=>{incrementValue(data)}}>+</div>
        </div>
    </div>
  )
}

export default QuantityButton