
import React, { useState } from 'react';
import '../pages/CheckOutPage.css';
import CartTable from '../components/CartTable';
import ContactInfo from '../components/ContactInfo';
import ShippingAddress from '../components/ShippingAddress';
import PaymentInfo from '../components/PaymentInfo';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const CheckOutPage = () => {
  const [pageStatus, setPageStatus] = useState(1);
  const userId = parseInt(localStorage.getItem('userId'), 10);
  const [loading, setLoading] = useState(false);

  const [shippingAddress, setShippingAddress] = useState({
    user_id: userId,
    name: "",
    phone: null,
    zipcode: null,
    locality: "",
    deladdress: "",
    city: "",
    state: "",
    landmark: "",
    alternatephone: ""
  });

  const goToNextPage = async () => {
    if (pageStatus < 2) {
      try {
        setLoading(true);
        const response = await axios.post("https://server-orcin-delta.vercel.app/address/addDeliveryAddress", shippingAddress, {
          headers: {
            'Content-Type': "application/json"
          }
        });
        console.log(response);
        setPageStatus(pageStatus + 1);
      } catch (error) {
        console.log("Can't post address details");
      } finally {
        setLoading(false);
      }
    }
  };

  const goToPrevPage = () => {
    if (pageStatus > 1) {
      setPageStatus(pageStatus - 1);
    }
  };

  return (
    <div className='checkout-page'>
      <div className='checkout-page-content'>
        <div className='checkout-page-left'>
          {pageStatus === 1 && <ShippingAddress shippingAddress={shippingAddress} setShippingAddress={setShippingAddress} />}
          {pageStatus === 2 && <PaymentInfo />}
          <div className='checkout-btn-space'>
            {pageStatus === 2 && (
              <div onClick={goToPrevPage} className='checkout-prev-btn'>Prev</div>
            )}
            <div onClick={goToNextPage} className='checkout-next-btn'>
              {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <CircularProgress color='inherit' size={20} />
                </Box>
              ) : (
                "Next"
              )}
            </div>
          </div>
        </div>
        <div className='checkout-page-right'><CartTable /></div>
      </div>
    </div>
  );
};

export default CheckOutPage;
