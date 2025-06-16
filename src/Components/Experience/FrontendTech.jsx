import React from 'react'
import { HiCodeBracket } from "react-icons/hi2";
function FrontendTech() {
  return (
   <>
      <div className="flex flex-col items-center space-y-5  border-1 rounded-4xl py-7 px-5 w-full">
              <div><HiCodeBracket size={50} className="text-orange-500"/></div>
              <div className="flex justify-center text-xl font-semibold">Frontend Development</div>
              <div className="flex flex-wrap   space-x-3 space-y-3   justify-center">
                <p className="rounded-full bg-gray-200  px-2">Reactjs</p>
                <p className="rounded-full bg-gray-200  px-2">JavaScript</p>
                <p className="rounded-full bg-gray-200  px-2">TailwindCSS</p>
                <p className="rounded-full bg-gray-200  px-2">HTML5</p>
                <p className="rounded-full bg-gray-200  px-2">CSS3</p>
              </div>
              </div>
              </>
             )
}

export default FrontendTech
