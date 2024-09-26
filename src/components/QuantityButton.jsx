import React from 'react';
import '../components/QuantityButton.css';

const QuantityButton = ({data}) => {
  return (
    <div className='product-quantity-btn'>
        <div className='quantity-button-space'>
            <div className='button-partition btn-minus'>-</div>
            <div className='button-partition btn-points'>{data.order_quantity}</div>
            <div className='button-partition btn-plus'>+</div>
        </div>
    </div>
  )
}

export default QuantityButton