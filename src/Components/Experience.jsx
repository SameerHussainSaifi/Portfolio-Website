import React from 'react'
import { HiCodeBracket } from "react-icons/hi2";
import { HiServerStack } from "react-icons/hi2";
import { FaGitAlt } from "react-icons/fa";
import { IoMdCloudOutline } from "react-icons/io";
function Experience() {
  return (
    <div className="pt-20 mb-50">
       <div className="flex flex-col w-full items-center text-2xl  md:mt-5 space-y-10 ">
       <h1>My<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500" > Experience</span></h1>
       <h1 className="text-lg w-7/12 text-justify">"Over the past 2 years, I've dedicated my time to learning and building full-stack web applications. On the frontend, I work with React.js, JavaScript, Tailwind CSS, HTML5, and CSS3 to create responsive and dynamic user interfaces. On the backend, I use Node.js, Express.js, and MongoDB to build robust APIs and manage data. Throughout this time, I’ve completed several personal projects and continuously improved my skills through hands-on practice and project-based learning."</h1>
       
       </div>

       <div className="flex flex-col items-center mt-10 space-y-7 ">
       <div><h1 className="text-3xl font-semibold">Skills <span className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">& Technologies</span></h1></div>

       <div><h1 className="text-2xl  text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">"Skills and technologies I specialize in, showcasing expertise and versatility"</h1></div>
       
    
       <div className="flex justify-center space-x-20 mx-20 w-full md:px-20">
       <div className="flex flex-col items-center space-y-5 w-4/12 border-1 rounded-4xl py-7 px-1">
        <div><HiCodeBracket size={50} className="text-orange-500"/></div>
        <div>Frontend Development</div>
        <div className="flex flex-wrap   space-x-3 space-y-3   justify-center">
          <p className="rounded-full bg-gray-200  px-2">Reactjs</p>
          <p className="rounded-full bg-gray-200  px-2">JavaScript</p>
          <p className="rounded-full bg-gray-200  px-2">TailwindCSS</p>
          <p className="rounded-full bg-gray-200  px-2">HTML5</p>
          <p className="rounded-full bg-gray-200  px-2">CSS3</p>
        </div>
       </div>

       <div className="flex flex-col items-center space-y-5 space-x-2 border-1 rounded-4xl w-4/12 py-7 px-2 ">
        <div ><HiServerStack  className="text-orange-500" size={50} /></div>
        <div className="flex items-center">Backend Development</div>
        <div className="flex flex-wrap space-x-2 justify-center space-y-3">
          <p className="rounded-full bg-gray-200 px-2">Node.js</p>
          <p className="rounded-full bg-gray-200 px-2">Express.js</p>
          <p className="rounded-full bg-gray-200 px-2">MongoDB</p>
          <p className="rounded-full bg-gray-200 px-2">MySQL</p>
          <p className="rounded-full bg-gray-200 px-2">Java</p>
        </div>
       </div>

       <div className="flex flex-col items-center space-y-5 py-7 border-1 rounded-4xl  w-4/12 ">
        <div ><FaGitAlt size={50} className="text-orange-500"/></div>
        <div className=" flex justify-center">Tools & Version Control</div>
        <div className="flex justify-center flex-wrap space-x-3 space-y-2">
          <p className="rounded-full bg-gray-200  px-2">Git</p>
          <p className="rounded-full bg-gray-200  px-2">GitHub</p>
          <p className="rounded-full bg-gray-200  px-2">VS Code</p>
          <p className="rounded-full bg-gray-200  px-2">Postman</p>
          <p className="rounded-full bg-gray-200  px-2">HoppScotch</p>
          <p className="rounded-full bg-gray-200  px-2">npm</p>
          <p className="rounded-full bg-gray-200  px-2">Webpack</p>
        </div>
       </div>
        </div>

        <div className="flex flex-col items-center space-y-5 border-1 rounded-4xl  pt-5 pb-5 mt-10 w-11/12">
        <div><IoMdCloudOutline className="text-orange-500" size={50}/></div>
        <div className="text-3xl font-semibold"><h1>Cloud & Deployment</h1></div>
        <div className="flex space-x-3 ">
          <div className=" rounded-full bg-gray-200  px-2">Netlify</div>
          <div className="rounded-full bg-gray-200  px-2">Vercel</div>
        </div>
        </div>

       </div>
    </div>
  )
}

export default Experience
