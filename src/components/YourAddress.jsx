
import React, { useEffect } from 'react';
import deleteIcon from '../assets/deleteIcon.png';
import '../components/YourAddress.css';
import axios from 'axios';

const YourAddress = ({user_id,name,phone,zipcode,locality,address,address_id,email,city,state,landmark,alternatephone,index,onDelete}) => {

   

    const removeAddress = async (address_id, user_id) => {
        try {
            const response = await axios.post("https://server-orcin-delta.vercel.app/address/removeDeliveryAddress", { user_id: user_id, address_id: address_id }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            onDelete(address_id)
            console.log(response)
        } catch (error) {
            console.log("cant remove the address", error)
        }
    }

    return (
        <div className='info-box'>
            <div className='info-title'>Shipping Address {index+1}</div>
            <img onClick={()=>removeAddress(address_id,user_id)} className='deleteIcon' src={deleteIcon}/>
            <div className='info-field-box'>
                <div className='info-name-text'>ADDRESS</div>
                <div className='info-input'>
                    <input value={address} className='info-input-field' placeholder='Delivery Address' />
                </div>
            </div>
            <div className='info-first-lastname'>
                <div className='info-first-name'>
                    <div className='info-name-text'>EMAIL</div>
                    <div className='info-input'>
                        <input value={email} className='info-input-field' placeholder='Email' />
                    </div>
                </div>
                <div className='info-first-name'>
                    <div className='info-name-text'>CITY</div>
                    <div className='info-input'>
                        <input value={city} className='info-input-field' placeholder='City' />
                    </div>
                </div>
            </div>
            <div className='info-first-lastname'>
                <div className='info-first-name'>
                    <div className='info-name-text'>PHONE</div>
                    <div className='info-input'>
                        <input value={phone} className='info-input-field' placeholder='Phone' />
                    </div>
                </div>
                <div className='info-first-name'>
                    <div className='info-name-text'>PIN CODE</div>
                    <div className='info-input'>
                        <input value={zipcode} className='info-input-field' placeholder='Land Mark' />
                    </div>
                </div>
            </div>
            <div className='info-field-box'>
                <div className='info-name-text'>LAND MARK</div>
                <div className='info-input'>
                    <input value={landmark} className='info-input-field' placeholder='Delivery Address' />
                </div>
            </div>
        </div>
    )
}

export default YourAddress