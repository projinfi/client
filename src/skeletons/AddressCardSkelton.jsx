import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import loadingCat from '../assets/loadingCat.gif';
import '../skeletons/AddressCardSkelton.css';

const AddressCardSkelton = () => {
    return (
        <div className='skelton-address'>
        <div className='address-section'>
          <img style={{width:'150px'}} src={loadingCat}/>
        </div>
    </div>
    )
}

export default AddressCardSkelton