import React from 'react';

const Carousel = () => {
 return(
 <div className="mt-24"> 
 <h1 className="text-center text-5xl py-3 md:text-7xl font-bold md:py-8 test">Testimonials</h1>
   <div class="hidden md:flex container m-auto">
    <div class="card">
      <h3 class="title">Anglenia Cole</h3>
      <div class="bar">
        <div class="emptybar"></div>
        <div class="filledbar"></div>
      </div>
      <div class="circle">
      <p className="text-white">"I struggled with math, but the portal's personalized approach helped me grasp difficult concepts, and now I feel much more confident."</p>
      </div>
    </div>
    <div class="card">
      <h3 class="title">John D.</h3>
      <div class="bar">
        <div class="emptybar"></div>
        <div class="filledbar"></div>
      </div>
      <div class="circle">
        <p className="text-white">"The support team was amazing! They promptly addressed all my queries, making my learning journey smooth and hassle-free"</p>
      </div>
    </div>
    <div class="card">
      <h3 class="title">Sarah M.</h3>
      <div class="bar">
        <div class="emptybar"></div>
        <div class="filledbar"></div>
      </div>
      <div class="circle">
        <p className="text-white">"Join our community of enthusiastic learners and embark on a journey of knowledge and growth with [Company Name] Student Portal!"</p>
      </div>
    </div>
    <div class="card">
      <h3 class="title">David L.</h3>
      <div class="bar">
        <div class="emptybar"></div>
        <div class="filledbar"></div>
      </div>
      <div class="circle">
       <p className="text-white">"The student portal has been a game-changer for me. The interactive courses made learning enjoyable, and I could track my progress effortlessly."</p>
      </div>
    </div>
   </div>
  <div className="flex mt-12">
   <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 md:hidden m-auto ">
    <li className="w-[300px] h-[280px] bg-[#0e0c14] p-10 text-white rounded-xl">
     <h2 className="pb-6">Anglenia Cole</h2>
     <p>"I struggled with math, but the portal's personalized approach helped me grasp difficult concepts, and now I feel much more confident."</p>
    </li>
    <li className="w-[300px] h-[280px] bg-[#0e0c14] p-10 text-white rounded-xl">
     <h2 className="pb-6">John D.</h2>
     <p>"The support team was amazing! They promptly addressed all my queries, making my learning journey smooth and hassle-free"</p>
    </li>
    <li className="w-[300px] h-[280px] bg-[#0e0c14] p-10 text-white rounded-xl">
     <h2 className="pb-6">Sarah M.</h2>
     <p>"Join our community of enthusiastic learners and embark on a journey of knowledge and growth with [Company Name] Student Portal!"</p>
    </li>
    <li className="w-[300px] h-[280px] bg-[#0e0c14] p-10 text-white rounded-xl">
     <h2 className="pb-6">David L.</h2>
     <p>"The student portal has been a game-changer for me. The interactive courses made learning enjoyable, and I could track my progress effortlessly".</p>
    </li>
   </ul>
  </div>
</div>
 );
}


export default Carousel;
