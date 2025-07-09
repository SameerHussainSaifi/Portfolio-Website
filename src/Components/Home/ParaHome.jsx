import React from 'react'
import {ReactTyped} from "react-typed";
import homeImage from '/src/assets/my.jpg';
function ParaHome() {
  return (
    <>
    <div className='flex justify-center'>
    <div className="  flex   flex-col items-center  md:mt-3 mr-10 w-full">
    
     <div className=" relative  text-justify  md:bottom-12 text-xl leading-relaxed">
       <div className="  relative  flex space-x-2 text-2xl mt-14 w-10/12 ">
  <h1>And I am a</h1>
  <ReactTyped
  className=" font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500"
    strings={["Software Developer","Web Developer","Frontend Developer"]}
    typeSpeed={55}
    backSpeed={50}
    loop={true}
  />
</div>
     <p>Inspired by the challenge of turning concepts into impactful software solutions, I am seeking a challenging and growth-oriented role in a dynamic organization where I can contribute through my technical skills, dedication, and continuous learning mindset. I aim to join a forward-thinking team where my academic background and project experience can deliver meaningful outcomes and support the organization’s success. My goal is to grow both personally and professionally while actively contributing to innovative and impactful solutions.</p>
    </div>
  
    
     
    
    </div>
    <div className="w-7/12"><img src={homeImage} alt="Home page Image"  className="h-100 w-100 rounded-full border-2 border-orange-500"/> </div>
   </div>
    </>
  )
}

export default ParaHome
