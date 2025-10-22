import React from 'react'
import { Phone, User, Home } from 'lucide-react'

export default function Header() {
  return (
    <div className='fixed top-0 w-full h-[68px] bg-white z-10 border-b border-gray-200 flex items-center justify-between px-[40px] shadow-sm'>
      <div className='flex items-center space-x-4'>
        <img src='/logo.png' alt='Logo' className='w-[184px] h-[46px]' />
      </div>

      <div className='flex items-center space-x-6 text-[15px] font-medium text-gray-700'>
        <div className='flex items-center space-x-2 '>
         <img src='/call.svg' alt='User Icon' className='w-[27.5px] h-[22px]' />
          <span>1-866-202-7417</span>
        </div>

        <div className='flex items-center space-x-2 cursor-pointer hover:text-blue-600'>
         <img src='/person.svg' alt='User Icon' className='w-[27.5px] h-[22px]' />
          <span>Register / Login</span>
        </div>

        <button className='flex items-center space-x-2 bg-[#0033A0] text-white px-5 py-2 rounded-lg hover:bg-[#00247a] transition'>
          <Home size={16} />
          <span>Request A Demo</span>
        </button>
      </div>
    </div>
  )
}
