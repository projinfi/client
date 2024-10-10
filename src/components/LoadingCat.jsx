import React from 'react';
import '../components/LoadingCat.css';
import loadingCart from '../assets/loadingCat.gif'


const LoadingCat = () => {
  return (
    <div className='loading-cat'><img className='loading-cat-img' src={loadingCart}/></div>
  )
}

export default LoadingCat