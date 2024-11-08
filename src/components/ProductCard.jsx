import React, { useEffect, useState } from 'react';
import '../components/ProductCard.css';
import productimg from '../assets/products/product1.png'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useDispatch } from 'react-redux';
import { addToReduxCart } from '../slices/cartSlice';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import PleaseLoginModal from './PleaseLoginModal';
import { useSelector } from 'react-redux';


const ProductCard = ({ product_id, name, description, image, price, quantity }) => {

    const userId = useSelector((state)=>state.auth.userId)
    console.log("user id products>>>>>>>>>>>",userId)

    const [addQuantity, setAddQuantity] = useState(0)
    const [showLoginModal, setShowLoginModal] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const token = localStorage.getItem('userToken')

    console.log(userId)

    useEffect(() => {
        if (showLoginModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        }
    }, [showLoginModal])

    const addToCart = async (product_id, name, description, image, price, quantity) => {
        
        if (token) {
            try {
                const nextQuantity = addQuantity + 1;

                console.log(product_id, name, description, image, price, quantity)

                setAddQuantity(nextQuantity)

                dispatch(addToReduxCart({ product_id, product_name: name, product_des: description, product_price: price, product_image: image, stock_quantity: quantity, order_quantity: nextQuantity }))

                const cartProduct = await axios.post("https://server-orcin-delta.vercel.app/cart/addToCart",
                    {
                        "user_id": userId,
                        "product_id": product_id,
                        "order_quantity": 1
                    }
                    , {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                console.log("added",cartProduct)

            } catch (err) {
                console.log("cannot add product to cart", err)
            }
        } else {
            setShowLoginModal(true);
        }
    }

    return (
        <div id={product_id} className='product-card'>

            <div className='product-image-container'>
                {/* 325*305 */}
                <img className='product-image' src={image} />
                <div className='product-shop-button' onClick={() => { addToCart(product_id, name, description, image, price, quantity) }}>Add to cart</div>
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
            {showLoginModal && <PleaseLoginModal onClose={()=>setShowLoginModal(false)}/>}
        </div>
    )
}

export default ProductCard