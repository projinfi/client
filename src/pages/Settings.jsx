import React from 'react';
import '../pages/Settings.css';
import Navbar from '../components/Navbar';
import ContactInfo from '../components/ContactInfo';
import YourAddress from '../components/YourAddress';

const Settings = () => {
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
                    <YourAddress />
                </div>
                <div className='setting-btnpage-space'>
                <div className='Settings-Button'>Save Changes</div>
            </div>
            </div>
         
        </div>
    )
}

export default Settings