import React from 'react'
import { IoMdCloudOutline } from "react-icons/io";
function Deployment() {
  return (
    <>
       <div className="flex flex-col items-center space-y-5 border-1 rounded-4xl  pt-5 pb-5  px-3 py-2 mt-10  w-full">
        <div><IoMdCloudOutline className="text-orange-500" size={50}/></div>
        <div className="text-3xl font-semibold"><h1>Cloud & Deployment</h1></div>
        <div className="flex space-x-3 ">
         
          <div className=" rounded-full bg-gray-200  px-2">
            <a href="https://vercel.com/sameer-hussains-projects-96893a4f" target='_main'>Vercel</a>
            </div>

          <div className="rounded-full bg-gray-200  px-2">
            <a href="https://app.netlify.com/teams/sameerhussainsaifi/projects" target='_main'>Netlify</a>
          </div>

        </div>
        </div>
        </>
    
  )
}

export default Deployment
