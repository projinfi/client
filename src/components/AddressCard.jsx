import React from 'react';
import '../components/AddressCard.css'

const AddressCard = ({data}) => {
    return (
        <div className='address-card'>
              <div className='radio-section'>
                <input type='radio' />
            </div>
            <div className='address-section'>
                <div className='address-card-name'>{data.name}</div>
                <div className='address-card-data'>{data.address} | {data.phone}</div>
            </div>
         
        </div>
    )
}

export default AddressCard


