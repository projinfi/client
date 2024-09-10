import React from 'react';
import '../components/ProductCard.css';
import productimg from '../assets/products/product1.png'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


const ProductCard = () => {
  return (
      <div className='product-card'>
          <div className='product-image-container'>
              {/* 325*305 */}
              <img className='product-image' src={productimg} />
              <div className='product-shop-button'>Add to cart</div>
          </div>
          <div className='product-details-container'>
              <div className='product-rating'>
                  <Box sx={{ '& > legend': { mt: 2 } }}>
                 
                           <Rating name="read-only" value={3} readOnly />

                 
                  </Box>
              </div>
              <div className='product-name'>Sony - WH-1000XM5 Wireless Noise Canceling</div>
              <div className='product-price'>₹ 22</div>
          </div>
      </div>
  )
}

export default ProductCard