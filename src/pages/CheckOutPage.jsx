import React from 'react';
import '../pages/CheckOutPage.css';
import CartTable from '../components/CartTable';
import ContactInfo from '../components/ContactInfo';
import ShippingAddress from '../components/ShippingAddress';
import PaymentInfo from '../components/PaymentInfo';

const CheckOutPage = () => {
  return (
    <div className='checkout-page'>
        <div className='checkout-page-content'>
            <div className='checkout-page-left'><ContactInfo/><ShippingAddress/><PaymentInfo/></div>
            <div className='checkout-page-right'><CartTable/></div>
        </div>
    </div>
  )
}

export default CheckOutPage