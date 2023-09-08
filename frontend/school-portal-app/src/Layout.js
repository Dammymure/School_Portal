import React from 'react';
import { Outlet } from 'react-router-dom';
import HomeHeader from './components/HomeHeader';
const Layout = () => {
 return (
  <main>
   <div className=''>
     <HomeHeader />
    <Outlet/>
    
   </div>
  </main>
 )
}


export default Layout;