import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const ProductSkeleton = () => {
  return (
    <div className='product-card'>
      <div className='product-image-container'>
        {/* 325*305 */}
        <Skeleton width={325} height={305} />
      </div>
      <div className='product-details-container'>
        <Skeleton count={1} />
        <Skeleton count={1} />
        <Skeleton count={1} />
      </div>
    </div>
  )
}

export default ProductSkeleton