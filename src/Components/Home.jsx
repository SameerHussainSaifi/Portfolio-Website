import React from 'react'
import {Outlet} from "react";
import {ReactTyped} from "react-typed";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
function Home() {
  return (
    <div className="overflow-x-hidden container">  
    
      <div className="flex   md:mt-30 flex-col space-y-1 md:ml-35">
        <h1 className=" text-3xl font-semibold">Hello, It's Me</h1>
     <span className="  text-5xl font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 ">SAMEER HUSSAIN</span>

<div className="  md:mt-5 flex space-x-2 text-2xl">
  <h1>And I am a</h1>
  <ReactTyped
  className=" font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500"
    strings={["Software Developer","Web Developer","Frontend Developer"]}
    typeSpeed={55}
    backSpeed={50}
    loop={true}
  />
</div>
      </div>



     <div className="  flex   justify-center items-center  md:mt-3">
     
     <div className=" relative w-7/12 text-justify md:mr-10 md:bottom-12 text-xl leading-relaxed">
     <p>Inspired by the challenge of turning concepts into impactful software solutions, I am seeking a challenging and growth-oriented role in a dynamic organization where I can contribute through my technical skills, dedication, and continuous learning mindset. I aim to join a forward-thinking team where my academic background and project experience can deliver meaningful outcomes and support the organization’s success. My goal is to grow both personally and professionally while actively contributing to innovative and impactful solutions.</p>
    </div>
  
    <div >
     <img src="./src/assets/my.jpg" alt=""  className="w-80 h-80 rounded-full"/>
    </div>
    </div>
<div className="flex justify-between w-8/12">
<div className="flex  flex-col ml-35 space-y-0 mb-50">
     <div className=" relative flex md:space-x-7   md:bottom-10 ">
<button className="bg-gradient-to-r from-pink-500 to-orange-500 h-12 w-12 rounded-full hover:from-white hover:to-white transition-all duration-300 hover:text-pink-700 cursor-pointer"><i className="fa-brands fa-linkedin-in hover:text-pink-700 text-2xl font-semibold"></i></button>

<button className="h-12 w-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full hover:from-white hover:to-white transition-all duration-300  hover:text-pink-700 cursor-pointer"><i className="fa-brands fa-square-instagram text-2xl font-semibold"></i></button>

<button className="h-12 w-12 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-white hover:to-white transition-all duration-300  hover:text-pink-700 cursor-pointer"><i className="fa-brands fa-x-twitter  text-2xl font-semibold"></i></button>

<button className="h-12 w-12 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-white hover:to-white transition-all duration-300 hover:text-pink-700 cursor-pointer"><i className="fa-brands fa-facebook-f text-2xl font-semibold"></i></button>


</div>
     
     <div className="flex justify-center">
      <button className="bg-gradient-to-r from-pink-500 to-orange-500  text-2xl  rounded-lg px-3 py-2">Download CV</button>
     </div>
    </div>

   <div className="flex flex-col space-y-3 ">
 <h1 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Currently Working On</h1>
    <div className="flex space-x-5 justify-center">
      <div className="text-green-700"><SiMongodb  size={30} /></div>
      <div className="text-green-700"><FaNodeJs size={30}/></div>
      <div className="text-green-700"><SiExpress size={30} /></div>
    </div>
     </div>
</div>

    </div>
  )
}

export default Home
