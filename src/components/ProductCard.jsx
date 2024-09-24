import React from 'react';
import '../components/ProductCard.css';
import productimg from '../assets/products/product1.png'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


const ProductCard = ({id,name,description,image,price,quantity}) => {
  return (
      <div id={id} className='product-card'>
          <div className='product-image-container'>
              {/* 325*305 */}
              <img className='product-image' src={image} />
              <div className='product-shop-button'>Add to cart</div>
          </div>
          <div className='product-details-container'>
              <div className='product-rating'>
                  <Box sx={{ '& > legend': { mt: 2 } }}>
                      <Rating name="read-only" value={3} readOnly />
                  </Box>
              </div>
              <div className='product-name'>{name}</div>
              <div className='product-price'>₹ {price}</div>
          </div>
      </div>
  )
}

export default ProductCard