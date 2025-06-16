import React from 'react'
import { FaGitAlt } from "react-icons/fa";
function Tools() {
  return (
   <>
      <div className="flex flex-col items-center space-y-5 py-7 border-1 rounded-4xl px-5 w-full ">
              <div ><FaGitAlt size={50} className="text-orange-500"/></div>
              <div className=" flex justify-center text-xl font-semibold w-full">Tools & Version Control</div>
              <div className="flex justify-center flex-wrap space-x-3 space-y-3">
                <p className="rounded-full bg-gray-200  px-2">Git</p>
                <p className="rounded-full bg-gray-200  px-2">GitHub</p>
                <p className="rounded-full bg-gray-200  px-2">VS Code</p>
                <p className="rounded-full bg-gray-200  px-2">Postman</p>
                <p className="rounded-full bg-gray-200  px-2">HoppScotch</p>
                <p className="rounded-full bg-gray-200  px-2">npm</p>
                <p className="rounded-full bg-gray-200  px-2">Webpack</p>
              </div>
             </div>
    </>
  )
}

export default Tools
