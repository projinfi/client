import React, { useState } from 'react';
import '../components/ProductCard.css';
import productimg from '../assets/products/product1.png'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useDispatch } from 'react-redux';
import { addToReduxCart } from '../slices/cartSlice';


const ProductCard = ({ id, name, description, image, price, quantity }) => {

    const [addQuantity,setAddQuantity] = useState(0)
    const dispatch = useDispatch()

    const addToCart = (id, name, description, image, price, quantity) => {

        const nextQuantity = addQuantity + 1;

        console.log(id, name, description, image, price, quantity)

        setAddQuantity(nextQuantity)
   
        dispatch(addToReduxCart({ id, product_name:name, product_des:description, product_price:price, product_image:image, stock_quantity:quantity, order_quantity:nextQuantity}))
    }

    return (
        <div id={id} className='product-card'>
            <div className='product-image-container'>
                {/* 325*305 */}
                <img className='product-image' src={image} />
                <div className='product-shop-button' onClick={() => {addToCart(id, name, description, image, price, quantity)}}>Add to cart</div>
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