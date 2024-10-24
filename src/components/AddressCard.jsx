import React from 'react';
import '../components/AddressCard.css';
import {useNavigate} from 'react-router-dom'


const AddressCard = ({ data }) => {
   const navigate = useNavigate()
    return (
        <div className='address-card'>
            <div className='radio-section'>
                <input type='radio' />
            </div>
            <div onClick={()=>navigate("/settings")} className='address-section'>
                <div className='address-card-name'>{data.name}</div>
                <div className='address-card-data'>{data.address} | {data.phone}</div>
            </div>
        </div>
    )
}

export default AddressCard


