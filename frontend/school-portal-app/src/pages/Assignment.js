import React from 'react';

const Assignment = () => {
 return( 
 <div className='py-4'>
   <div className="grid grid-cols-6 grid-rows-6 gap-4 ml-4">
    <div className="col-span-4 row-span-3 bg-white rounded-xl">
     <div >
      <ul className='flex justify-around py-4'>
       <li className='flex flex-col content-center align-middle my-auto '>
        <h1>School</h1>
        <p className='flex content-center'>
         <span className='text-purple-700'>50</span>
         <span className='text-[10px] align-middle'> This month <span className='text-green-400'>+35%</span> </span>
        </p>
       </li>
       <li className='flex flex-col content-center align-middle my-auto border-l-2 py-4 px-4'>
        <h1>School</h1>
        <p className='flex content-center'>
         <span className='text-purple-700'>50</span>
         <span className='text-[10px] align-middle'> This month <span className='text-green-400'>+35%</span> </span>
        </p>
       </li>
       <li className='flex flex-col content-center align-middle my-auto border-l-2 py-4 px-4'>
        <h1>School</h1>
        <p className='flex content-center'>
         <span className='text-purple-700'>50</span>
         <span className='text-[10px] align-middle'> This month <span className='text-green-400'>+35%</span> </span>
        </p>
       </li>
       <li className='flex flex-col content-center align-middle my-auto border-l-2 py-4 px-8'>
        <h1>School</h1>
        <p className='flex content-center'>
         <span className='text-purple-700'>50</span>
         <span className='text-[10px] align-middle'> This month <span className='text-green-400'>+35%</span> </span>
        </p>
       </li>

      </ul>
     </div>
     <div className='p-6'>
      <div className='flex'>
       <h1>Subscription Trend</h1>
       {/* <label for="month">Select a Month:</label> */}
       <select id="month" name="month" className=' border-none'>
        <option value="" disabled selected>Month</option>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
       </select>
      </div>
      <div className='w-auto h-48  bg-blue-400'>
       <h1>GRAPH</h1>
      </div>
     </div>
    </div>

    <div className="col-span-4 row-span-3 col-start-1 row-start-4 bg-white h-72">
     <div className='flex p-6'> 
      <h1>Subscription Trend</h1>
      {/* <label for="month">Select a Month:</label> */}
      <select id="month" name="month" className=' border-none'>
       <option value="" disabled selected>Month</option>
       <option value="January">January</option>
       <option value="February">February</option>
       <option value="March">March</option>
       <option value="April">April</option>
       <option value="May">May</option>
       <option value="June">June</option>
       <option value="July">July</option>
       <option value="August">August</option>
       <option value="September">September</option>
       <option value="October">October</option>
       <option value="November">November</option>
       <option value="December">December</option>
      </select>
     </div>
     <div>

     </div>
     <ul>
      <li>
       <h1>Sarah G.P</h1>
       <p>Started</p>
       <p>456MB</p>
       <p>09 DEC 2019</p>
       <p>05:18AM</p>
       <p></p>

      </li>
     </ul>
    </div>


    <div className="col-span-2 row-span-3 col-start-5 row-start-1">3</div>
    <div className="col-span-2 row-span-3 col-start-5 row-start-4">4</div>
   </div>
 </div>);
}

export default Assignment;