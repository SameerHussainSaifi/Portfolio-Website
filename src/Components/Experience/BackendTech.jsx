import React from 'react'
import { HiServerStack } from "react-icons/hi2";
function BackendTech() {
  return (
   <>
     <div className="flex flex-col items-center space-y-5  border-1 rounded-4xl  py-7 px-5 w-full">
             <div ><HiServerStack  className="text-orange-500" size={50} /></div>
             <div className="flex justify-center text-xl font-semibold w-full">Backend Development</div>
             <div className="flex flex-wrap space-x-3 justify-center space-y-3">
               <p className="rounded-full bg-gray-200 px-2">Node.js</p>
               <p className="rounded-full bg-gray-200 px-2">Express.js</p>
               <p className="rounded-full bg-gray-200 px-2">MongoDB</p>
               <p className="rounded-full bg-gray-200 px-2">MySQL</p>
               <p className="rounded-full bg-gray-200 px-2">Java</p>
             </div>
            </div>
            </> 
    
  )
}

export default BackendTech
