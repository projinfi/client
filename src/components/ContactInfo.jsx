import React, { useEffect, useState } from 'react';
import '../components/ContactInfo.css';
import axios from 'axios';

const ContactInfo = () => {

    const userToken = localStorage.getItem('userToken');
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        userId: null
    });

    useEffect(() => {
        const verifyToken = async () => {
            try {
                const response = await axios.post("https://server-orcin-delta.vercel.app/users/verifyUserToken", { "usertoken": userToken }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log(response);
                
                // Split the name into first and last names
                const [firstName, lastName] = response.data.name.split(" ");
                
                // Update the state with the split names and other user info
                setUserInfo({
                    firstName: firstName || "",
                    lastName: lastName || "",
                    email: response.data.email,
                    userId: response.data.userId
                });
            } catch (error) {
                console.log("Error in validating user token", error);
            }
        };
        verifyToken();
    }, []);

    return (
        <div className='info-box'>
            <div className='info-title'>Account Details</div>
            <div className='info-first-lastname'>
                <div className='info-first-name'>
                    <div className='info-name-text'>FIRST NAME</div>
                    <div className='info-input'>
                        <input 
                            className='info-input-field' 
                            placeholder='First Name' 
                            value={userInfo.firstName} 
                            onChange={(e) => setUserInfo({ ...userInfo, firstName: e.target.value })}
                        />
                    </div>
                </div>
                <div className='info-first-name'>
                    <div className='info-name-text'>LAST NAME</div>
                    <div className='info-input'>
                        <input 
                            className='info-input-field' 
                            placeholder='Last Name' 
                            value={userInfo.lastName} 
                            onChange={(e) => setUserInfo({ ...userInfo, lastName: e.target.value })}
                        />
                    </div>
                </div>
            </div>
            <div className='info-field-box'>
                <div className='info-name-text'>EMAIL ADDRESS</div>
                <div className='info-input'>
                    <input 
                        value={userInfo.email} 
                        className='info-input-field' 
                        placeholder='Your Email' 
                        onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                    />
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
