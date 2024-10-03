import React, { useState, useEffect } from 'react';
import '../components/CartTable.css';
import CartItem from './CartItem';
import QuantityButton from './QuantityButton';
import { useSelector } from 'react-redux';
import axios from 'axios'

const CartTable = () => {
    const reduxCartData = useSelector((state) => state.cart);
    const [cartItems, setCartItems] = useState([]);
    const [cartData, setCartData] = useState([]);
    const user_id = localStorage.getItem("userId")

    // Update cartItems only when reduxCartData changes
    useEffect(() => {
        setCartItems(reduxCartData);
    }, [reduxCartData]);

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
                        <th>Price</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cartData.map((data) => (
                        <tr key={data.id}>
                            <td><CartItem data={data}/></td>
                            <td><QuantityButton data={data} /></td>
                            <td>₹{data.product_price}</td>
                            <td className='subtotal-field'>₹ {data.product_price * data.order_quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CartTable;


