import React from 'react';
import '../components/ProductCard.css';
import productimg from '../assets/products/product1.png'

const ProductCard = () => {
  return (
    <div className='product-card'>
        <div className='product-image-container'>
            {/* 325*305 */}
            <img className='product-image' src={productimg}/>
        </div>
        <div className='product-details-container'>
            <div className='product-rating'>*****</div>
            <div className='product-name'>Sony - WH-1000XM5 Wireless Noise Canceling</div>
            <div className='product-price'>$ 22</div>
        </div>
    </div>
  )
}

export default ProductCard