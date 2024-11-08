
import React, { useEffect, useState } from 'react';
import '../pages/CheckOutPage.css';
import CartTable from '../components/CartTable';
import ContactInfo from '../components/ContactInfo';
import ShippingAddress from '../components/ShippingAddress';
import PaymentInfo from '../components/PaymentInfo';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import CartSummary from '../components/CartSummary';
import { useSelector } from 'react-redux';
import AddressCard from '../components/AddressCard';
import addIcon from '../assets/add.png';
import AddressCardSkelton from '../skeletons/AddressCardSkelton';

const CheckOutPage = ({onStepChange}) => {
  const [pageStatus, setPageStatus] = useState(1);
  // const userId = parseInt(localStorage.getItem('userId'), 10);
  const [loading, setLoading] = useState(false);
  const reduxTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = useSelector((state) => state.cart.shippingCost);
  const [isFieldsValid, setIsFieldsValid] = useState(false)
  const [addNewAddress, setAddNewAddress] = useState(false)
  const [getAddressLoader, setGetAddressLoader] = useState(true)

  const userId = useSelector((state)=>state.auth.userId)

  console.log("userId>>>>>>>>>>>>>>>",userId)

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

  const [userAddress, setUserAddress] = useState([{
    user_id: userId,
    name: "",
    address: "",
  }])

  const addAddress = async () => {
    try {
      setLoading(true);
      const response = await axios.post("https://server-orcin-delta.vercel.app/address/addDeliveryAddress", shippingAddress, {
        headers: {
          'Content-Type': "application/json"
        }
      });
      console.log(response);

      // Fetch the updated address list
      await getDeliveryAddress();
    } catch (error) {
      console.log("Can't post address details");
    } finally {
      setLoading(false);
    }
  };

  const getDeliveryAddress = async () => {
    try {
      const resAddress = await axios.post("https://server-orcin-delta.vercel.app/address/getDeliveryAddress", { "user_id": userId }, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (resAddress.data.length > 0) {
        setAddNewAddress(false)
      } else {
        setAddNewAddress(true)
      }
      console.log(resAddress)
      setUserAddress(resAddress.data)
      setGetAddressLoader(false)

    } catch (error) {
      console.log("can't get delivery address")
      setGetAddressLoader(false)
    }
  }

  const goToPrevPage = () => {
    if (pageStatus > 1) {
      setPageStatus(pageStatus - 1);
    }
  };

  useEffect(() => {
    getDeliveryAddress()
  }, [])

  return (
    <div className='checkout-page'>
      <div className='checkout-page-content'>
        <div className='checkout-page-left'>
          {getAddressLoader ? (<AddressCardSkelton />) : (<div style={{width:"100%"}}>
            {userAddress.length > 0 && (<div className='delivery-address-section'>
              <div className='delivering-to-section'>
                Delivering to :
              </div>
              {userAddress.map((data) => (
                <AddressCard data={data} />
              )
              )}
             {userAddress.length < 3 && (    <div className='del-btn-space'>
                <div className='add-del-address'>
                  <span> <img className='add-icon' src={addIcon} /></span>
                  <span onClick={() => setAddNewAddress(true)}> Add New Address</span>
                </div>
              </div>)}
            </div>)}
            {
              addNewAddress && (
                <div>
                  {pageStatus === 1 && <ShippingAddress shippingAddress={shippingAddress} setShippingAddress={setShippingAddress} isFieldsValid={setIsFieldsValid} />}
                  {/* {pageStatus === 2 && <PaymentInfo />} */}
                  <div className='checkout-btn-space'>
                    {pageStatus === 2 && (
                      <div onClick={goToPrevPage} className='checkout-prev-btn'>Prev</div>
                    )}
                    <div onClick={addAddress} className={`checkout-next-btn ${!isFieldsValid && ('disabled')}`}>
                      {loading ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <CircularProgress color='inherit' size={20} />
                        </Box>
                      ) : (
                        <div>Add</div>
                      )}
                    </div>
                  </div>
                </div>
              )
            }
          </div>)}
        </div>
        <div className='checkout-page-right'>
          <CartTable />
          <div className='overall-total-price'>
            <div className='sub-total-price'>Sub Total : ₹ {reduxTotalAmount + shippingCost}</div>
            <div onClick={()=>onStepChange(3)} className='cart-checkout-btn cart-check-btn'>Proceed To Payment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
