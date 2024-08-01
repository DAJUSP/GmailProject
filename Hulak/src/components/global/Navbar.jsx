import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import img from '../../assets/image/GmailLogo.jpg'

const Navbar = () => {
  return (
    <div className='fliex items-center justify-between mx-3 h-16'>
        <div className='flex items-center gap-10'>
            <div className='flex items-center gap-2'>
                <div className='p-3 rounded-full hover:bg-gray-200 cursor-pointer'>
                    <RxHamburgerMenu size={20} />
                </div>
                <img className='w-8' src={img} alt="gmail logo" />
                <h2 className='text-2xl font-medium text-gray-500'>Gmail</h2>
            </div>
        </div>
        <div className='md:block hidden w-[50%] mr-60'>
          <div className='flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full'>
            {/* <IoIoSearch size={"20px"} className='text-gray-700'/> */}
            <input type="text" placeholder='search' className='rounded-full w-full bg-transparent outline-none px-1' />
          </div>
        </div>
    </div>
  )
}

export default Navbar