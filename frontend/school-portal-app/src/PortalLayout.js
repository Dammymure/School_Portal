import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from "../src/pages/SideBar"

const PortalLayout = () => {
 return (<div>
<SideBar/>
<Outlet/>

 </div>);
}


export default PortalLayout;