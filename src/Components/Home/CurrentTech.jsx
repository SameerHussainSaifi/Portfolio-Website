import React from 'react'
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
function CurrentTech() {
  return (
    <>
    <div className="flex flex-col space-y-3 ">
 <h1 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Currently Working On</h1>
    <div className="flex space-x-5 justify-center">
      <div className="text-green-700"><SiMongodb  size={30} /></div>
      <div className="text-green-700"><FaNodeJs size={30}/></div>
      <div className="text-green-700"><SiExpress size={30} /></div>
    </div>
     </div>
    </>
  )
}

export default CurrentTech
