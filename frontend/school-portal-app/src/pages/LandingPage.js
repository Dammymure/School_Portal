import React from 'react';
import Gif from '../images/gif.gif'
import Check from '../images/checklistgif.gif'
import Assessment from '../images/assessment.png'
import Computer from '../images/computer.png'
import ExamPaper from '../images/exam-paper.png'
import Exam from '../images/exam.png'
import Interactive from '../images/interactive.png'
import Person from '../images/person.png'
import Iphone from '../images/iphone-bg.png'

const LandingPage = () => {
 return <div>
  <section className="grid grid-cols-1 px-2 md:px-0 md:grid-cols-2  w-[92%] m-auto">

   
   <div className="align-center justify-center my-auto pt-5 md:p-0">

    <p></p>
    <p className="pb-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">[Company Name]</span> Student Portal!</p>
    <h2 className="text-xl font-bold md:text-3xl lg:text-5xl lg:w-[90%] ">Welcome to the <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">[Company Name]</span>  Student Portal, your gateway to a world of knowledge and learning opportunities. </h2>
    <p className="text-[12px] text-gray-500 md:text-[12px] lg:text-sm pt-5">Our platform is designed to empower students with the tools they need to excel in their academic journey. Whether you're a high school student, a college-goer, or someone looking to enhance their skills.</p>
    <div>
     <img src="" alt=""/>
     <img src="" alt=""/>
     <img src="" alt=""/>
    </div>

    
   </div>

   <div className="">
    <img className="item-center mx-auto" src={Gif} alt=""/>
   </div>
  </section>
  <section className="w-[92%] m-auto text-center pt-16 md:pt-32">
   <div>
    <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Discover the Power of [Company Name] Student Portal</h1>
    <p className="m-auto text-[12px] md:text-sm md:w-[80%] ">Our student portal is packed with features that enhance your learning experience and make studying a breeze. Here are some of the key benefits you'll enjoy</p>
   </div>
   <div>

   </div>
  </section>

  <section className="mt-20">
   <div>
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white rounded-xl w-[80%] m-auto">
     <li className=" rounded-xl min-h-[100%] pb-3 hover:bg-[#70d6ff] ease-in-out duration-300 hover:scale-y-[1.05] hover:drop-shadow-2xl3 hover:drop-shadow-[0_35px_35px_rgba(43,45,66,0.5)] ">
      <div className=" my-6 mx-6 md:my-8 h-[25vh]">
      <img src={Interactive} alt="" className="w-10 md:w-18 text-white"/>
      <div className="h-fit-content">
       <h2 className="text-10 py-1 md:py-3 md:text-[26px]">Interactive Courses</h2>
       <p className="text-sm text-gray-500 md:text-[16px]">Dive into engaging and interactive courses curated by industry experts and educators.</p>
      </div>
      </div>
     </li>
     <li className="rounded-xl pb-3 hover:bg-[#70d6ff] ease-in-out duration-300 hover:scale-y-[1.05] hover:drop-shadow-2xl3 hover:drop-shadow-[0_35px_35px_rgba(43,45,66,0.5)]">
      <div className="my-6 mx-6 md:my-8 h-[25vh] ">
      <img src={Assessment} alt="" className="w-10 md:w-18 text-white"/>
      <div>
       <h2 className="text-10 py-1 md:py-3 md:text-[26px]">Assessments</h2>
       <p className="text-sm text-gray-500 md:text-[16px]">Access a diverse range of assignments and assessments that challenge your skills and knowledge</p>
      </div>
      </div>
     </li>
     <li className="rounded-xl pb-3 hover:bg-[#70d6ff] ease-in-out duration-300 hover:scale-y-[1.05] hover:drop-shadow-2xl3 hover:drop-shadow-[0_35px_35px_rgba(43,45,66,0.5)]">
      <div className="my-6 mx-6 md:my-8 h-[25vh] ">
      <img src={ExamPaper} alt="" className="w-10 md:w-18 text-white"/>
      <div>
       <h2 className="text-10 py-1 md:py-3 md:text-[26px]">Grade Tracking</h2>
       <p className="text-sm text-gray-500 md:text-[16px]"> Keep a close eye on your academic performance with our intuitive grade tracking system.</p>
      </div>
      </div>
     </li>
     <li className="rounded-xl pb-3  hover:bg-[#70d6ff] ease-in-out duration-300 hover:scale-y-[1.05] hover:drop-shadow-2xl3 hover:drop-shadow-[0_35px_35px_rgba(43,45,66,0.5)]">
      <div className="my-6 mx-6 md:my-8 h-[25vh]">
      <img src={Person} alt="" className="w-10 md:w-18 text-white"/>
      <div>
       <h2 className="text-10 py-1 md:py-3 md:text-[26px]">Personalized Learning</h2>
       <p className="text-sm text-gray-500 md:text-[16px]">Tailor your learning experience based on your strengths and interests.</p>
      </div>
      </div>
     </li>
     <li className="rounded-xl pb-3 hover:bg-[#70d6ff] ease-in-out duration-300 hover:scale-y-[1.05] hover:drop-shadow-2xl3 hover:drop-shadow-[0_35px_35px_rgba(43,45,66,0.5)]">
      <div className="my-6 mx-6 md:my-8 h-[25vh] ">
      <img src={Computer} alt="" className="w-10 md:w-18 text-white"/>
      <div>
       <h2 className="text-10 py-1 md:py-3 md:text-[26px]">24/7 Support</h2>
       <p className="text-sm text-gray-500 md:text-[16px]">Our dedicated support team is available round the clock to assist you with any queries or technical issues. </p>
      </div>
      </div>
     </li>
     <li className="rounded-xl pb-3 hover:bg-[#70d6ff] ease-in-out duration-300 hover:scale-y-[1.05] hover:drop-shadow-2xl3 hover:drop-shadow-[0_35px_35px_rgba(43,45,66,0.5)]">
      <div className="my-6 mx-6 md:my-8 h-[25vh]">
      <img src={Exam} alt="" className="w-10 md:w-18 text-white"/>
      <div>
       <h2 className="text-10 py-1 md:py-3 md:text-[26px]">Interactive Courses</h2>
       <p className="text-sm text-gray-500 md:text-[16px]">Dive into engaging and interactive courses curated by industry experts and educators.</p>
      </div>
      </div>
     </li>

    </ul>
   </div>
  </section>

  <section className="mt-20">

   <div className="grid grid-cols-1 p-2 md:p-0 md:grid-cols-2 w-[80%] m-auto">
   <div>
    <div className="flex z-0">
     <div className="relative border-white h-52 md:h-40 border-l-8 left-[28px] z-0 "></div>
     <div className="z-10 pr-8">
      <div className="w-[50px] bg-purple-400 align-center text-center">
       <p className="text-white">1</p>
      </div>
     </div>
     <div>
      <h2 className="font-bold">SIGN UP</h2>
      <p className="text-sm md:text-md"> Create your account on our platform by providing some basic information. Once registered, you'll have full access to our wide array of educational resources.</p>
     </div>
    </div>
    <div className="flex z-0">
     <div className="relative border-white h-52 md:h-40 border-l-8 left-[28px] z-0 "></div>
     <div className="z-10 pr-8">
      <div className="w-[50px] bg-orange-400 align-center text-center">
       <p className="text-white">2</p>
      </div>
     </div>
     <div>
      <h2 className="font-bold">BROWSE COURSES</h2>
      <p className="text-sm md:text-md"> Explore our diverse catalog of courses and choose the ones that align with your interests and goals. From mathematics to arts and beyond, we have something for everyone.</p>
     </div>
    </div>
    <div className="flex z-0">
     <div className="relative border-white h-52 md:h-40 border-l-8 left-[28px] z-0 "></div>
     <div className="z-10 pr-8">
      <div className="w-[50px] bg-green-400 align-center text-center">
       <p className="text-white">3</p>
      </div>
     </div>
     <div>
      <h2 className="font-bold">LEARN AND ENGAGE</h2>
      <p className="text-sm md:text-md">Dive into the course material and start learning at your own pace. Participate in discussions, quizzes, and interactive activities to reinforce your understanding.</p>
     </div>
    </div>
    <div className="flex z-0">
     <div className="relative border-white h-52 md:h-40 border-l-8 left-[28px] z-0 "></div>
     <div className="z-10 pr-8">
      <div className="w-[50px] bg-red-600 align-center text-center">
       <p className="text-white">4</p>
      </div>
     </div>
     <div>
      <h2 className="font-bold">COMPLETE ASSIGNMENTS</h2>
      <p className="text-sm md:text-md"> Test your knowledge by completing assignments and assessments. Our platform provides instant feedback to help you improve.</p>
     </div>
    </div>
    <div className="flex z-0">
     <div className="relative border-white h-52 md:h-40 border-l-8 left-[28px] z-0 "></div>
     <div className="z-10 pr-8">
      <div className="w-[50px] bg-blue-400 align-center text-center">
       <p className="text-white">5</p>
      </div>
     </div>
     <div>
      <h2 className="font-bold">TRACK YOUR PROGRESS</h2>
      <p className="text-sm md:text-md">Monitor your grades and track your academic progress through our intuitive dashboard. Set goals and work towards achieving them.</p>
     </div>
    </div>
    <div className="flex z-0">
     <div className="relative border-white h-52 md:h-40 border-l-8 left-[28px] z-0 "></div>
     <div className="z-10 pr-8">
      <div className="w-[50px] bg-yellow-400 align-center text-center">
       <p className="text-white">6</p>
      </div>
     </div>
     <div>
      <h2 className="font-bold">STAY CONNECTED</h2>
      <p className="text-sm md:text-md">Engage with fellow students and educators through our community forums. Share knowledge, ask questions, and collaborate on projects.</p>
     </div>
    </div>
   </div>

   <div>
    <div><img src={Iphone} alt=""/></div>
    <div><img src={Check} alt=""/></div>
   </div>
   </div>
  </section>
 </div>;
}


export default LandingPage;