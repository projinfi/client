import React, { useState, useEffect } from 'react';
import '../components/CartTable.css';
import CartItem from './CartItem';
import QuantityButton from './QuantityButton';
import { useSelector } from 'react-redux';

const CartTable = () => {
    const reduxCartData = useSelector((state) => state.cart);
    const [cartItems, setCartItems] = useState([]);

    // Update cartItems only when reduxCartData changes
    useEffect(() => {
        setCartItems(reduxCartData);
    }, [reduxCartData]);

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
                    {cartItems.map((data) => (
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


