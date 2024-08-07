import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import img from '../../assets/image/GmailLogo.jpg'
import { IoIoSearch} from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className='fliex items-center justify-between mx-3 h-16'>
        <div className='flex items-center gap-10'>
            <div className='flex items-center gap-2'>
                <div className='p-3 rounded-full hover:bg-gray-200 cursor-pointer'>
                    <RxHamburgerMenu size={"20px"} />
                </div>
                <img className='w-8' src={img} alt="gmail logo" />
                <h2 className='text-2xl font-medium text-gray-500'>Gmail</h2>
            </div>
        </div>
        <div className='md:block hidden w-[50%] mr-60'>
          <div className='flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full'>
            <IoIoSearch size={"24px"} className='text-gray-700'/>
            <input type="text" placeholder='search mail' className='rounded-full items-center w-full bg-transparent outline-none px-1'/>
          </div>
        </div>
        <div className='md-block hidden'>
          <div className='flex items-center gap-2'>
            <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
            <CiCircleQuestion size={"20px"}/>
            </div>

            <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
            <CiCircleQuestion size={"20px"}/>
            </div>

            <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
            <CiCircleQuestion size={"20px"}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar