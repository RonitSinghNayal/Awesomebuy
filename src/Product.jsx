import React from 'react'
import { Link } from 'react-router-dom'

import ProductDetail from './ProductDetail'

function Product({title,price,category,thumbnail,id}) {
  return (
    <div className='bg-gray-100 p-1 max-w-xs'>
      <div className='w-full aspect-square'>
        <img className='w-full h-full object-cover' src={thumbnail}/>
      </div>
      <div>{category}</div>
      <div>{title}</div>
      <div>Rs.{price}</div>
      <Link className='text-black' to={'/products/'+id}>View Details</Link>
    </div>
  )  
}

export default Product
