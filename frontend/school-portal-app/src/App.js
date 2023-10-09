import React from 'react';
// import HomeHeader from './components/HomeHeader';
// import LandingPage from './components/LandingPage';
// import HomeHeader from './components/HomeHeader';
import Home from './pages/Home';
import About from './pages/About';
import Portal from './pages/Portal';
import SideBar from './pages/SideBar';
import Register from './pages/Register';
import Login from './pages/Login';
import Test from './pages/Test';
import Layout from './Layout';
// import Home from './pages/Home';
import {
  // BrowserRouter,
  Routes,
  Route,
  // Navigate
} from "react-router-dom"
import PortalLayout from './PortalLayout';
import PortalHome from './pages/PortalHome';
import Assignment from './pages/Assignment';



function App() {


  return (<>
    <div className="bg-[url('https://dr.savee-cdn.com/things/thumbnails/6/2/2af9c6006bf7dd680b8f94.webp')] w-full h-[100%] bg-cover bg-center bg-no-repeat bg-fixed">
      {/* <HomeHeader />
      <LandingPage/> */}
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/about' element={<About />} />
        </Route>


      </Routes>
    </div>
    <div className="">
      <Routes>
        <Route path='/portal' element={<Portal />} />
        <Route path='/sidebar' element={<SideBar />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </div>

    <Routes>
      <Route path='/studentportal' element={<SideBar />}>
        <Route index element={<PortalHome />}></Route>
        <Route path='assignment' element={<Assignment />}></Route>
        {/* <Route path='/about' element={<About />} /> */}
      </Route>
    </Routes>
  </>
  );
}

export default App;

// w-full h-[100%] bg-cover bg-center bg-no-repeat bg-fixed