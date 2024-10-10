import React from 'react';
import '../components/ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className='info-box'>
        <div className='info-title'>Contact Information</div>
        <div className='info-first-lastname'>
            <div className='info-first-name'>
                <div className='info-name-text'>FIRST NAME</div>
                <div className='info-input'>
                    <input className='info-input-field' placeholder='First Name'/>
                </div>
            </div>
            <div className='info-first-name'>
                <div className='info-name-text'>LAST NAME</div>
                <div className='info-input'>
                    <input className='info-input-field' placeholder='Last Name'/>
                </div>
            </div>
        </div>
          <div className='info-field-box'>
              <div className='info-name-text'>PHONE</div>
              <div className='info-input'>
                  <input className='info-input-field' placeholder='Phone' />
              </div>
          </div>
          <div className='info-field-box'>
              <div className='info-name-text'>EMAIL ADDRESS</div>
              <div className='info-input'>
                  <input className='info-input-field' placeholder='Your Email' />
              </div>
          </div>
    </div>
  )
}

export default ContactInfo