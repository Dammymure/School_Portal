import React from 'react';

import HomeHeader from './components/HomeHeader';
import LandingPage from './pages/LandingPage';

function App() {


  return (
    <div className="bg-[url('https://dr.savee-cdn.com/things/thumbnails/6/2/2af9c6006bf7dd680b8f94.webp')] w-full h-[100%] bg-cover bg-center bg-no-repeat bg-fixed">
      <div>
      <HomeHeader />
      </div>
      <div>
      <LandingPage/>
      </div>
    </div>
  );
}

export default App;
