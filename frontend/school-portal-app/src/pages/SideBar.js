import React from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import { RiDashboardFill } from 'react-icons/ri';
import { FaPeopleGroup } from 'react-icons/fa6';
import { FaTasks } from 'react-icons/fa';
import { CgNotes } from 'react-icons/cg';
import { TbReportAnalytics, TbReportMoney } from 'react-icons/tb';
import { AiOutlineMessage } from 'react-icons/ai';
import { useState } from 'react';
import Logo from '../images/exam.png';

import Message from '../images/icons/message.png'
import Assignment from '../images/icons/assignment.png'
import Home from '../images/icons/home.png'
import Notification from '../images/icons/notification.png'
import { Link, Outlet } from 'react-router-dom';

const SideNavbar = () => {
  const [open, setOpen] = useState(true);
  // const menus = [
  //   { title: 'Workspace', icon: <RiDashboardFill />, link: '/workspace' },
  //   { title: 'Clients', icon: <FaPeopleGroup />, link: '/clients' },
  //   { title: 'Schedule Appointments', icon: <CgNotes />, link: '/other' },
  //   { title: 'Payment', icon: <TbReportMoney />, link: '/other2' },
  //   { title: 'Task', icon: <FaTasks />, link: '/other3' },
  //   { title: 'Message', icon: <AiOutlineMessage />, link: '/other4' },
  //   { title: 'Report', icon: <TbReportAnalytics />, link: '/other5' },
  // ];

  return (
    <div className='flex flex-co flex-[2] '>
      <div
        className={`bg-[#cabff8] h-screen ${open ? 'w-72' : 'w-14 md:w-20'} duration-200 py-2 relative justify-center`}
      >
        <BsArrowLeftShort
          className={`bg-white text-black text-3xl rounded-full absolute -right-4 border border-black cursor-pointer ${!open && 'rotate-180'
            }`}
          onClick={() => setOpen(!open)}
        />
        <div>
          <img
            src={Logo}
            alt=""
            className={` md:h-12 mx-auto duration-200 ${!open && 'w-12 h-12 md:w-12'}`}
          />
        </div>
        <ul className=''>
          <span className={`${!open && 'px-auto'} pl-2 md:pl-6 m-auto text-sm text-gray-500`}>Menu</span>
          <Link className={({ isActive }) => { return (' py-2 rounded-md' + (!isActive ? 'hover:bg-[#e6ac00]' : 'bg-[#f9f4e1] text-[#e6ac00]')); }}>
            <li className="font-bold text-sm flex items-center gap-x-4 cursor-pointer py-4 border-l-4 border-white   justify-center hover:border-blue-500 hover:border-l-4 hover:bg-[#f9fafb]">
              <span className={`${open && ' pl-4'} text-2xl`}><img src={Home} className='w-6' /></span>
              <span className={`text-sm text-gray-600 font-normal flex-1 ${!open && 'hidden'}`}>Home</span>
            </li>
          </Link>
          <Link className={({ isActive }) => { return (' py-2 rounded-md' + (!isActive ? 'hover:bg-[#e6ac00]' : 'bg-[#f9f4e1] text-[#e6ac00]')); }}>
            <li className="font-bold text-sm flex items-center gap-x-4 cursor-pointer py-4 border-l-4 border-white  justify-center hover:border-blue-500 hover:border-l-4 hover:bg-[#f9fafb]">
              <span className={`${open && ' pl-4'} text-2xl`}><img src={Notification} className='w-6' /></span>
              <span className={`text-sm text-gray-600 font-normal flex-1 ${!open && 'hidden'}`}>Notification</span>
            </li>

          </Link>
          <Link className={({ isActive }) => { return (' py-2 rounded-md' + (!isActive ? 'hover:bg-[#e6ac00]' : 'bg-[#f9f4e1] text-[#e6ac00]')); }}>
            <li className="font-bold text-sm flex items-center gap-x-4 cursor-pointer py-4 border-l-4 border-white justify-center hover:border-blue-500 hover:border-l-4 hover:bg-[#f9fafb]">
              <span className={`${open && ' pl-4'} text-2xl text-white`}><img src={Assignment} className='w-6' /></span>
              <span className={`text-sm text-gray-600 font-normal flex-1 ${!open && 'hidden'}`}>Assignment</span>
            </li>

          </Link>
          <Link className={({ isActive }) => { return (' py-2 rounded-md' + (!isActive ? 'hover:bg-[#e6ac00]' : 'bg-[#f9f4e1] text-[#e6ac00]')); }}>
            <li className="font-bold text-sm flex items-center gap-x-4 cursor-pointer py-4 border-l-4 border-white  justify-center hover:border-blue-500 hover:border-l-4 hover:bg-[#f9fafb]">
              <span className={`${open && ' pl-4'} text-xl`}><img src={Message} className='w-6' /></span>
              <span className={`text-sm text-gray-600 font-normal flex-1 ${!open && 'hidden'}`}>Message</span>
            </li>


          </Link>
          <span className='pl-2 md:pl-6 text-sm text-gray-500'>Task</span>
          <Link className={({ isActive }) => { return (' py-2 rounded-md' + (!isActive ? 'hover:bg-[#e6ac00]' : 'bg-[#f9f4e1] text-[#e6ac00]')); }}>
            <li className="font-bold text-sm flex items-center gap-x-4 cursor-pointer py-4 border-l-4 border-white  justify-center hover:border-blue-500 hover:border-l-4 hover:bg-[#f9fafb]">
              <span className={`${open && ' pl-4'} text-xl`}><img src={Message} className='w-6' /></span>
              <span className={`text-sm text-gray-600 font-normal flex-1 ${!open && 'hidden'}`}>Message</span>
            </li>
          </Link>
          <Link className={({ isActive }) => { return (' py-2 rounded-md' + (!isActive ? 'hover:bg-[#e6ac00]' : 'bg-[#f9f4e1] text-[#e6ac00]')); }}>
            <li className="font-bold text-sm flex items-center gap-x-4 cursor-pointer py-4 border-l-4 border-white  justify-center hover:border-blue-500 hover:border-l-4 hover:bg-[#f9fafb]">
              <span className={`${open && ' pl-4'} text-xl`}><img src={Message} className='w-6' /></span>
              <span className={`text-sm text-gray-600 font-normal flex-1 ${!open && 'hidden'}`}>Message</span>
            </li>
          </Link>
        </ul>
        <div className={`${!open && 'w-9 h-9 md:w-12 md:h-12 md:rounded-full m-auto mt-[100%] mt-[55%]'} flex mt-[45%] bg-red-500 w-16 h-16 rounded-full `}>
          <img src="" className="flex" />
        </div>
        {/* <ul className="pt-2 mt-3">
        {menus.map((menu, index) => (
          <NavLink to={menu.link} className={({ isActive }) =>  {
                    return (' py-2 rounded-md' 
                    + (!isActive
                     ? 'hover:bg-[#e6ac00]' 
                     : 'bg-[#f9f4e1] text-[#e6ac00]'));
                }}>
            <li
              key={index}
              className="font-bold text-sm flex items-center gap-x-4 cursor-pointer p-2  rounded-md mt-5"
            >
              <span className="text-2l ">
                {menu.icon ? menu.icon : <RiDashboardFill />}
              </span>
              <span
                className={`text-base font-medium flex-1 ${!open && 'hidden'}`}
              >
                {menu.title}
              </span>
            </li>
          </NavLink>
        ))}
      </ul> */}
      </div>

      <div className=" text-black overflow-x-hidden bg-[#e9e5f8] h-screen w-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default SideNavbar;