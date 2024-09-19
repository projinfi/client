import React from 'react';
import '../components/CartTable.css';
import CartItem from './CartItem';

const CartTable = () => {
  return (
    <div className='cart-table-space'>
        <table>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
            </tr>
            <tr>
                <td><CartItem/></td>
                <td>prd_quantity</td>
                <td>₹ 100</td>
                <td className='subtotal-field'>₹ 100</td>
            </tr>
            <tr>
                <td><CartItem/></td>
                <td>prd_quantity</td>
                <td>₹ 200</td>
                <td className='subtotal-field'>₹ 100</td>
            </tr>
            <tr>
                <td><CartItem/></td>
                <td>prd_quantity</td>
                <td>₹ 300</td>
                <td className='subtotal-field'>₹ 100</td>
            </tr>
            <tr>
                <td><CartItem/></td>
                <td>prd_quantity</td>
                <td>₹ 550</td>
                <td className='subtotal-field'>₹ 100</td>
            </tr>
        </table>
    </div>
  )
}

export default CartTable