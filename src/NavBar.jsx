import React from 'react'
import { RiShoppingBagLine } from "react-icons/ri";

function NavBar( { productCount } ) {
  return (
    <div className='bg-gray-100'>
      <div className='max-w-6xl flex justify-between mx-auto items-center'>
        <img className='h-17'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8pBrG9wExjYtgp4jOAzj7HDGQ7AllBkYRig&s'/>
        <div className='flex flex-col items-center'>
        <RiShoppingBagLine className='text-4xl text-purple-700'/>
        <span className='-m-6'>{productCount}</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar
