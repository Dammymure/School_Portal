import React, { useState } from 'react';
import Logo from "../images/logo.png";
import { FaXmark, FaBars, } from "react-icons/fa6";
import Exam from "../images/exam.png"

const HomeHeader = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 const handleToggleMenu = () => {
  setIsMenuOpen(prevState => !prevState);
 };
 return (
  <div className=''>
   <header className='flex justify-between px-1 md:px-10 m-auto align-middle items-center top-0 left-0 w-[100%] bg-inherit'>
    <img className="w-12 md:w-14 h-[100%]" src={Logo} alt="logo" />

    <div
     className={`absolute flex backdrop-blur-[9px] bg-white/30 w-[70%] min-h-[100vh] top-[0px] left-0 left-${isMenuOpen ? '' : '[-100%]'}  duration-500 md:bg-inherit md:min-h-fit md:w-auto md:static`}
    >
      {/* left-${isMenuOpen ? '' : '[-100%]'} */}
     {/* left-${isMenuOpen ? '' : '[-100%]'} */}
     <ul className={`flex flex-col text-left px-4 gap-2 text-1xl w-[100%] md:gap-[4vw] md:flex-row md:items-center text-black`}>
      <div className='md:hidden'>
       <img src={Exam} alt='' className='w-12 h-[100%]' />
      </div>
      <div className='border-b-[1px] border-gray-400 md:hidden'>
       <p className='text-sm text-gray-600 leading-5 pb-5'>Study Life- Improve your grades and manage your academic performances </p>
       <p className='text-[12px] text-gray-600 leading-5'>&#x40;dammymure1@gmail.com</p>
       <p className='text-[12px] text-gray-600 leading-5'>&#x2706;+234-817-252-1037</p>
      </div>
      <li className='border-b-[1px] border-gray-400 pb-2 pt-3 font-semibold md:border-none md:p-0 md:text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500 hover:from-black hover:to-black'>Department</li>
      <li className='border-b-[1px] border-gray-400 pb-2 font-semibold md:border-none md:p-0 md:text-sm  bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500 hover:from-black hover:to-black'>About Us</li>
      <li className='border-b-[1px] border-gray-400 pb-2 font-semibold md:border-none md:p-0 md:text-sm  bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500 hover:from-black hover:to-black'>Contact</li>
      <li className='font-semibold md:text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500 hover:from-black hover:to-black '>School Life</li>
      <div className="flex flex-col mx-auto gap-3 w-[100%] md:gap-5 md:hidden">
       <button className="bg-orange-400 rounded-3xl px-5 py-2 md:text-sm ">Register</button>
       <button className="bg-orange-400 rounded-3xl px-5 py-2 md:text-sm ">Sign in</button>
      </div>
     </ul>
    </div>

    <div className={`hidden md:gap-5 md:flex  ${isMenuOpen ? 'hidden' : ''}`}>
     <button className="border-grey-400 border-2 px-5 py-1 rounded-[6px] hover:bg-blue-500 hover:border-blue-500 ease-in-out duration-300 hover:text-white">Register</button>
     <button className="border-grey-400 border-2 px-5 py-1 rounded-[6px] hover:bg-blue-500 hover:border-blue-500 hover:text-white ease-in-out duration-300">Sign in</button>
    </div>
    <div className="flex md:hidden">
     <button className="" onClick={handleToggleMenu}>
      {isMenuOpen ? <FaXmark className='text-blue-600 text-2xl' /> : <FaBars className='text-blue-600 text-2xl' />}
     </button>
    </div>
   </header>
    
  </div>);
}


export default HomeHeader;