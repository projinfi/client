import React from 'react'

const YourAddress = () => {
    return (
        <div className='info-box'>
            <div className='info-title'>Shipping Address 1</div>
            <div className='info-field-box'>
                <div className='info-name-text'>ADDRESS</div>
                <div className='info-input'>
                    <input className='info-input-field' placeholder='Delivery Address' />
                </div>
            </div>
            <div className='info-first-lastname'>
                <div className='info-first-name'>
                    <div className='info-name-text'>EMAIL</div>
                    <div className='info-input'>
                        <input className='info-input-field' placeholder='Email' />
                    </div>
                </div>
                <div className='info-first-name'>
                    <div className='info-name-text'>CITY</div>
                    <div className='info-input'>
                        <input className='info-input-field' placeholder='City' />
                    </div>
                </div>
            </div>
            <div className='info-first-lastname'>
                <div className='info-first-name'>
                    <div className='info-name-text'>PHONE</div>
                    <div className='info-input'>
                        <input className='info-input-field' placeholder='Phone' />
                    </div>
                </div>
                <div className='info-first-name'>
                    <div className='info-name-text'>PIN CODE</div>
                    <div className='info-input'>
                        <input className='info-input-field' placeholder='Land Mark' />
                    </div>
                </div>
            </div>
            <div className='info-field-box'>
                <div className='info-name-text'>LAND MARK</div>
                <div className='info-input'>
                    <input className='info-input-field' placeholder='Delivery Address' />
                </div>
            </div>
        </div>
    )
}

export default YourAddress