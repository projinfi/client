import React from 'react';
import '../components/PaymentInfo.css'

const PaymentInfo = () => {
    return (
        <div className='info-box'>
            <div className='info-title'>Payment Method</div>
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
                <div className='info-name-text'>CARD NUMBER</div>
                <div className='info-input'>
                    <input className='info-input-field' placeholder='1234 1234 1234' />
                </div>
            </div>
            <div className='info-first-lastname'>
                <div className='info-first-name'>
                    <div className='info-name-text'>EXPIRATION DATE</div>
                    <div className='info-input'>
                        <input className='info-input-field' placeholder='MM/YY' />
                    </div>
                </div>
                <div className='info-first-name'>
                    <div className='info-name-text'>CVC</div>
                    <div className='info-input'>
                        <input className='info-input-field' placeholder='CVC code' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentInfo