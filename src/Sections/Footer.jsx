import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoIosCall } from "react-icons/io";

function Footer() {
  return (
   <>
   <div>
    <div name='Footer' className=' gap-5 pt-6 pl-20 text-white mt-6 bg-slate-700'>
     <h1 className='font-bold bg-sky-400 p-10 pr-2 mr-10'>QUICK LINKS</h1>
      <ul className='font-bold flex space-x-5 mt-6 cursor-pointer'>
        <li className='hover:text-green-300'>Home</li>
        <li className='hover:text-green-300'>Skill</li>
        <li className='hover:text-green-300'>About</li>
        <li className='hover:text-green-300'>Contact</li>
      </ul><br />
      <h1 className='flex justify-between gap-5 font-bold mb-3'>Contact Us</h1>
      <div className='font-bold '>
      < FaLocationDot/>
      <span  className='hover:text-blue-400 cursor-pointer'>Ashok Chowk, Solapur, Maharashtra-413005</span><br />
      < IoIosCall />
      <span  className='hover:text-blue-400 cursor-pointer'>+123 45678909</span><br />
      <IoIosMail/>
      <span className='hover:text-blue-400 cursor-pointer'>saquibsayyed12345@gmail.com</span><br />
      </div>
      
     
     
      <ul className='flex space-x-5 mt-6 pb-6'>
        <li  className='text-2xl cursor-pointer  hover:text-blue-300 '>< FaFacebook/></li>
        <li  className='text-2xl cursor-pointer  hover:text-blue-300 '><FaInstagram/></li>
        <li  className='text-2xl cursor-pointer  hover:text-blue-300 '><FaLinkedin/></li>
        <li  className='text-2xl cursor-pointer  hover:text-blue-300'>< FaYoutube /></li>
      </ul>
      <p className='pb-6 text-center'>2024 All Copy Rights Reserved Created By Saqib Sayyed.</p>
    </div>
   </div>
   </>
  )
}

export default Footer