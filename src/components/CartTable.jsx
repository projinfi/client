import React, { useState, useEffect } from 'react';
import '../components/CartTable.css';
import CartItem from './CartItem';
import QuantityButton from './QuantityButton';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { fetchCartData } from "../slices/cartSlice";
import { useDispatch } from 'react-redux';

const CartTable = () => {
    const reduxCartData = useSelector((state) => state.cart.items);
    const [cartItems, setCartItems] = useState([]);
    const [cartData, setCartData] = useState([]);
    const dispatch = useDispatch();
    const user_id = localStorage.getItem("userId")
   
console.log(reduxCartData.items)
    // Update cartItems only when reduxCartData changes
    useEffect(() => {
        setCartItems(reduxCartData);
    }, [reduxCartData]);

    useEffect(() => {
        if (user_id) {
            dispatch(fetchCartData(user_id));
        }
    }, [user_id, dispatch]);

    const getCartData = async () => {
        try {
            const response = await axios.post("https://server-orcin-delta.vercel.app/cart/getCartItems", {
                user_id: user_id
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setCartData(response.data); // Set the cart data from response
            console.log("Fetched cart data:", response.data); // Log the fetched data directly
        } catch (err) {
            console.log("Error in getting cart data:", err);
        }
    };

    useEffect(() => {
        getCartData();
    }, []);

    return (
        <div className='cart-table-space'>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th className='price-title-field'>Price</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((data) => (
                        <tr key={data.product_id}>
                            <td><CartItem data={data}/></td>
                            <td><QuantityButton data={data} /></td>
                            <td className='price-field'>₹{data.product_price}</td>
                            <td className='subtotal-field'>₹ {data.product_price * data.order_quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CartTable;


