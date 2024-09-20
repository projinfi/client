import React from 'react';
import '../components/QuantityButton.css';

const QuantityButton = () => {
  return (
    <div className='product-quantity-btn'>
        <div className='quantity-button-space'>
            <div className='button-partition btn-minus'>-</div>
            <div className='button-partition btn-points'>100</div>
            <div className='button-partition btn-plus'>+</div>
        </div>
    </div>
  )
}

export default QuantityButton