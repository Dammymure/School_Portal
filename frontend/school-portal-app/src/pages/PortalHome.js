import React from 'react';
import studImg from "../images/portal-img/student-img.svg"
// import { CalendarComponent } from '@syncfusion/ej2-react-calendars'
import Calendar from '../components/Calender';
import English from "../images/icons/subjectIcons/englishIcon.png"
import Chemistry from "../images/icons/subjectIcons/chemistryIcon.png"
import Physics from "../images/icons/subjectIcons/icons8-physics-48.png"
import Mathematics from "../images/icons/subjectIcons/mathematicsIcon.png"
import Social from "../images/icons/subjectIcons/socialNetworkIcon.png"

const PortalHome = () => {
  return (
    <div className=''>
      <div className='px-2 py-2 md:px-5 md:py-5 '>
        <div class="md:grid md:grid-rows-3 md:grid-flow-col md:gap-3 gap-2 h-screen">
          <div class="md:col-span-2 py-5 md:py-0 bg-white flex justify-between bg-gradient-to-r from-pink-500 to-violet-500 rounded-md md:pl-5 text-white mb-2 md:mb-0">
            <div className='align-middle my-auto p-2'>
              <h1 className='text-sm md:text-2xl font-extrabold'>Welcome Back!, Damilola</h1>
              <p className='text-xs md:text-sm md:pt-1 md:pb-6 text-gray-100'>Lorem ipsum, dolor sit amet consectetur <br />elit. Molestias autem exercitationem architecto</p>
              <button className='text-[10px] p-1 bg-black text-white rounded-md md:text-sm md:px-2 md:py-2 hover:bg-white hover:text-black'>Check Updates</button>
            </div>
            <div className='flex justify-center align-middle content-center bg-purple-400 rounded-tl-full rounded-r-full'>
              <img class="flex w-48 my-[auto] align-middle py-[auto]" src={studImg} alt="" />
            </div>
          </div>
          <div className="md:row-span-2 md:col-span-2  flex min-w-max ">

            <div class=" grid md:grid-cols-6 md:grid-rows-6 md:gap-4 gap-2 w-[100%] mx-auto">
              <div className='md:col-span-3 md:row-span-3 bg-white flex justify-between  rounded-md md:pl-5 md:mb-0 p-2 '>
                <div className='flex flex-col w-[100%]'>
                  <h2 className='text-center'>Courses</h2>
                  <ul className='flex flex-col my-auto gap-y-3'>
                    <li className='flex items-center justify-between font-medium md:px-4 md:text-sm'>
                      <div className='flex items-center gap-2'>
                        <img className='w-6 h-6' src={English} alt="" />
                      <p className='text-sm'>English</p>
                      </div>
                      <span className='text-sm'>00%</span>
                    </li>
                    <li className='flex items-center justify-between font-medium md:px-4 md:text-sm'>
                      <div className='flex items-center gap-2'>
                        <img className='w-6 h-6' src={Mathematics} alt="" />
                        <p className='text-sm'>Mathematics</p>
                      </div>
                      <span className='text-sm'>00%</span>
                    </li>
                    <li className='flex items-center justify-between font-medium md:px-4 md:text-sm'>
                      <div className='flex items-center gap-2'>
                        <img className='w-6 h-6' src={Chemistry} alt="" />
                        <p className='text-sm'>Chemistry</p>
                      </div>
                      <span className='text-sm'>00%</span>
                    </li>
                    <li className='flex items-center justify-between font-medium md:px-4 md:text-sm'>
                      <div className='flex items-center gap-2'>
                        <img className='w-6 h-6' src={Physics} alt="" />
                        <p className='text-sm'>Physics</p>
                      </div>
                      <span className='text-sm'>00%</span>
                    </li>
                    <li className='flex items-center justify-between font-medium md:px-4 md:text-sm'>
                      <div className='flex items-center gap-2'>
                        <img className='w-6 h-6' src={Social} alt="" />
                        <p className='text-sm'>Social Studies</p>
                      </div>
                      <span className='text-sm'>00%</span>
                    </li>
                  </ul>

                </div>
              </div>
              <div class="rounded-md md:col-span-3 md:row-span-3 md:col-start-4 bg-white flex min-w-0 bg-blue-300 ">
              <div className='p-3'>
                <h2 className='flex'>Assignment</h2>
                <ul className=''>
                    <li className='flex content-center py-2'>
                    <input className='' type='checkbox' value="true"/>
                    <div className='pl-2'>
                      <label className='text-xs'>Mathematics Assignment</label>
                  
                      <div className='flex gap-20'>
                        <p className='text-[10px] text-gray-400'>August 29</p>
                          <p className='text-[10px]  text-red-600'>Due in 3days</p>
                      </div>
                    </div>
                  </li>
                    <li className='flex content-center py-2'>
                    <input className='' type='checkbox' value="true"/>
                    <div className='pl-2'>
                      <label className='text-xs'>Mathematics Assignment</label>
                  
                      <div className='flex gap-20'>
                        <p className='text-[10px] text-gray-400'>August 29</p>
                          <p className='text-[10px]  text-red-600'>Due in 3days</p>
                      </div>
                    </div>
                  </li>
                    <li className='flex content-center py-2'>
                    <input className='' type='checkbox' value="true"/>
                    <div className='pl-2'>
                      <label className='text-xs'>Mathematics Assignment</label>
                  
                      <div className='flex gap-20'>
                        <p className='text-[10px] text-gray-400'>August 29</p>
                          <p className='text-[10px]  text-red-600'>Due in 3days</p>
                      </div>
                    </div>
                  </li>

                </ul>
              </div>
              </div>
              <div className='md:col-span-6 md:row-span-3 md:row-start-4 border-none rounded-md bg-black flex py-2'>
                {/* <ul className='grid grid-cols-2 md:grid-cols-4 text-white gap-2 w-80  mx-auto px-2'>
                  <li className='justify-center flex flex-col bg-[#ffb84c] md:w-36 md:px-4 md:py-12 px-5 py-12 rounded-3xl '>
                      <div><img src="" alt=""/></div>
                      <div>
                      <h3 className='text-xs text-[14px] md:text-[12px] font-medium'>Counselling</h3>
                        <p className='w-28 text-xs md:text-[10px]'>Get a counsellor to help your learning process</p>
                      </div>
                  </li>
                  <li className='flex flex-col bg-[#72fa93] md:w-36 md:px-4 md:py-12 px-5 py-12 rounded-3xl'>
                      <div><img src="" alt=""/></div>
                      <div>
                      <h3 className='text-xs text-[14px] md:text-[12px] font-medium'>Set targets</h3>
                      <p className='w-28 text-xs md:text-[10px]'>Get a counsellor to help your learning process</p>
                      </div>
                  </li>
                  <li className='justify-center flex flex-col bg-[#ffb84c] md:w-36 md:px-4 md:py-12 px-5 py-12 rounded-3xl '>
                      <div><img src="" alt=""/></div>
                      <div>
                      <h3 className='text-xs text-[14px] md:text-[12px] font-medium'>Counselling</h3>
                        <p className='w-28 text-xs md:text-[10px]'>Get a counsellor to help your learning process</p>
                      </div>
                  </li>
                  <li className='flex flex-col bg-[#72fa93] md:w-36 md:px-4 md:py-12 px-5 py-12 rounded-3xl'>
                      <div><img src="" alt=""/></div>
                      <div>
                      <h3 className='text-xs text-[14px] md:text-[12px] font-medium'>Set targets</h3>
                      <p className='w-28 text-xs md:text-[10px]'>Get a counsellor to help your learning process</p>
                      </div>
                  </li>
                  </ul> */}
                <ul className='grid grid-cols-2 md:grid-cols-4 justify-center my-auto mx-auto text-white gap-3 w-[200px] md:w-auto'>
                  <li className='py-4 px-2 md:w-40 md:py-8 md:px-2 rounded-3xl bg-[#ffb84c]'>
                    <div><img src="" alt="" /></div>
                    <div>
                      <h3 className='text-xs'>Counselling</h3>
                      <p className=' text-[10px]'>Get a counsellor to help your learning process</p>
                    </div>
                  </li>
                  <li className='py-4 px-2 md:w-40 md:py-8 md:px-2 rounded-3xl bg-[#72fa93] '>
                    <div><img src="" alt="" /></div>
                    <div>
                      <h3 className='text-xs'>Counselling</h3>
                      <p className='text-[10px]'>Get a counsellor to help your learning process</p>
                    </div>
                  </li>
                  <li className='py-4 px-2 md:w-40 md:py-8 md:px-2 rounded-3xl bg-[#ffb84c]'>
                    <div><img src="" alt="" /></div>
                    <div>
                      <h3 className='text-xs'>Counselling</h3>
                      <p className=' text-[10px]'>Get a counsellor to help your learning process</p>
                    </div>
                  </li>
                  <li className='py-4 px-2 md:w-40 md:py-8 md:px-2 rounded-3xl bg-[#72fa93] '>
                    <div><img src="" alt="" /></div>
                    <div>
                      <h3 className='text-xs'>Counselling</h3>
                      <p className='text-[10px]'>Get a counsellor to help your learning process</p>
                    </div>
                  </li>


                  </ul>
              </div>
            </div>

          </div>

          <div class="md:row-span-3 md:col-span-1 bg-white flex border-none mt-2 md:mt-0 flex-col ">
            <div className='bg-black h-fit w-fit flex justify-center border-none align-middle mx-auto p-0'>
              {/* <CalendarComponent className='w-[100%]'/> */}
              </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>);
}



export default PortalHome;