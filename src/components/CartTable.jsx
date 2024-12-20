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
    const user_id = useSelector((state)=>state.auth.userId)
    console.log("userid cart>>>>>>>>>>",user_id)
   
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
        // <div className='cart-table-space'>
        //     <table className='products-table'>
        //         <thead>
        //             <tr>
        //                 <th>Product</th>
        //                 <th>Quantity</th>
        //                 <th>Amount</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {cartItems.map((data) => (
        //                 <tr key={data.product_id}>
        //                     <td><CartItem data={data}/></td>
        //                     <td><QuantityButton data={data} /></td>
                          
        //                     <td className='subtotal-field'>₹ {data.product_price * data.order_quantity}</td>
        //                 </tr>
        //             ))}
        //         </tbody>
        //     </table>
        // </div>
        <div class="table-container">
            <table class="products-table">
                <thead>
                    <tr>
                        <th>Products</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((data) => (
                        <tr key={data.product_id}>
                            <td><CartItem data={data} /></td>
                            <td><QuantityButton data={data} /></td>

                            <td className='subtotal-field'>₹ {data.product_price * data.order_quantity}</td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>

    );
};

export default CartTable;


