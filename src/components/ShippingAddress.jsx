import React from 'react';
import '../components/ShippingAddress.css';

const ShippingAddress = () => {
  return (
    <div className='info-box'>
        <div className='info-title'>Shipping Address</div>
          <div className='info-field-box'>
              <div className='info-name-text'>STREET ADDRESS *</div>
              <div className='info-input'>
                  <input className='info-input-field' placeholder='Phone' />
              </div>
          </div>
          <div className='info-field-box'>
              <div className='info-name-text'>COUNTRY *</div>
              <div className='info-input'>
                  <input className='info-input-field' placeholder='Your Email' />
              </div>
          </div>
          <div className='info-field-box'>
              <div className='info-name-text'>TOWN / CITY *</div>
              <div className='info-input'>
                  <input className='info-input-field' placeholder='Your Email' />
              </div>
          </div>
          <div className='info-field-box'>
              <div className='info-name-text'>EMAIL*</div>
              <div className='info-input'>
                  <input className='info-input-field' placeholder='Your Email' />
              </div>
          </div>
          <div className='info-field-box'>
              <div className='info-name-text'>PHONE *</div>
              <div className='info-input'>
                  <input className='info-input-field' placeholder='Your Email' />
              </div>
          </div>
          <div className='info-first-lastname'>
            <div className='info-first-name'>
                <div className='info-name-text'>STATE</div>
                <div className='info-input'>
                    <input className='info-input-field' placeholder='State'/>
                </div>
            </div>
            <div className='info-first-name'>
                <div className='info-name-text'>ZIP CODE</div>
                <div className='info-input'>
                    <input className='info-input-field' placeholder='Zip Code'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShippingAddress