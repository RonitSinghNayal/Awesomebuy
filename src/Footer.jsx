import React from 'react';
import { RiFacebookCircleLine, RiInstagramLine, RiTwitterLine, RiMailLine, RiPhoneLine } from "react-icons/ri";

function Footer() {
  return (
    <div className='bg-gray-100 py-4 mt-10 h-24'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        <p className='text-gray-700'>&copy; 2025 YourCompany. All rights reserved.</p>
        <div className='flex space-x-4'>
          <RiFacebookCircleLine className='text-2xl text-blue-600 cursor-pointer'/>
          <RiInstagramLine className='text-2xl text-pink-500 cursor-pointer'/>
          <RiTwitterLine className='text-2xl text-blue-400 cursor-pointer'/>
          <RiMailLine className='text-2xl text-red-500 cursor-pointer' title='Email: contact@yourcompany.com'/>
          <RiPhoneLine className='text-2xl text-green-500 cursor-pointer' title='Phone: +1234567890'/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
