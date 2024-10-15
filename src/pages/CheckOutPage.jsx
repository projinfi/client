import React, { useState } from 'react';
import '../pages/CheckOutPage.css';
import CartTable from '../components/CartTable';
import ContactInfo from '../components/ContactInfo';
import ShippingAddress from '../components/ShippingAddress';
import PaymentInfo from '../components/PaymentInfo';

const CheckOutPage = () => {
  const [pageStatus, setPageStatus] = useState(1)

  const goToNextPage = () => {
    if(pageStatus < 2) {
      setPageStatus(pageStatus + 1)
    }
  }
  const goToPrevPage = () => {
    if(pageStatus > 1) {
      setPageStatus(pageStatus - 1)
    }
  }

  return (
    <div className='checkout-page'>
      <div className='checkout-page-content'>
        <div className='checkout-page-left'>
          {pageStatus === 1 && <ShippingAddress />}
          {pageStatus === 2 && <PaymentInfo />}
          <div className='checkout-btn-space'>
            <div onClick={goToPrevPage} className='checkout-prev-btn'>Prev</div>
            <div onClick={goToNextPage} className='checkout-next-btn'>Next</div>
          </div>
        </div>
        <div className='checkout-page-right'><CartTable /></div>
      </div>
    </div>
  )
}

export default CheckOutPage