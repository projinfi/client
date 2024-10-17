import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../pages/Settings.css';
import Navbar from '../components/Navbar';
import ContactInfo from '../components/ContactInfo';
import YourAddress from '../components/YourAddress';

const Settings = () => {

    const userId = parseInt(localStorage.getItem('userId', 10));
    const [deliveryAddress, setDeliveryAddress] = useState([{
        user_id: null,
        name: "",
        phone: null,
        zipcode: null,
        locality: "",
        address: "",
        address_id: null,
        email: "",
        city: "",
        state: "",
        landmark: "",
        alternatephone: ""
    }])

    const getDeliveryAddress = async () => {
        try {
            const response = await axios.post("https://server-orcin-delta.vercel.app/address/getDeliveryAddress", {
                user_id: userId,
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(response.data)
            setDeliveryAddress(response.data)
        } catch (error) {
            console.log("error in fetching", error)
        }
    }

    const handleDeleteAddress = (address_id) => {
        setDeliveryAddress(deliveryAddress.filter((address)=> address.address_id != address_id))
    }

    useEffect(() => {
        getDeliveryAddress()
    }, [])

    return (
        <div className='page'>
            {/* total navbar height is 100px and 60px goes to the navbar offer height */}
            <div className='navbar-section'>
                <Navbar />
            </div>
            {/* margin top 100px */}
            <div className='content'>
                <div className='cart-title'>Settings</div>
                <div className='settings-contact-info'>
                    <ContactInfo />
                    {deliveryAddress.map((data, index) => (
                        <YourAddress
                            user_id={data.user_id}
                            name={data.name}
                            phone={data.phone}
                            zipcode={data.zipcode}
                            locality={data.locality}
                            address={data.address}
                            address_id={data.address_id}
                            email={data.email}
                            city={data.city}
                            state={data.state}
                            landmark={data.landmark}
                            alternatephone={data.alternatephone}
                            index={index}
                            onDelete={handleDeleteAddress}
                        />
                    ))}
                </div>
                <div className='setting-btnpage-space'>
                    <div className='Settings-Button'>Save Changes</div>
                </div>
            </div>
        </div>
    )
}

export default Settings