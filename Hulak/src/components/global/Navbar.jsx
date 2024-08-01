import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import img from '../../assets/image/gmail-logo.jpg'

const Navbar = () => {
  return (
    <div className='fliex items-center justify-between mx-3 h-16'>
        <div className='flex items-center gap-10'>
            <div className='flex items-center gap-2'>
                <div className='p-3 rounded-full hover:bg-gray-200 cursor-pointer'>
                    <RxHamburgerMenu size={20} />
                </div>
                <img src={img} alt="gmail logo" />
            </div>
        </div>
    </div>
  )
}

export default Navbar