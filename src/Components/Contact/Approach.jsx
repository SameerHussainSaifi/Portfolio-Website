import React from 'react'
import { IoMdContact } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
function Approach() {
  return (
    <>
    <div className=" container flex justify-center flex-wrap md:flex-nowrap md:space-x-50 border-1 w-full py-5 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.3)] p-6 bg-white">
        <div className="flex flex-col items-center space-y-1">
          <div><a href="+91 7667787967"><IoMdContact size={50} className="text-orange-500"/></a></div>
          <p>+91 7667787967</p>
        </div>
       <div className="flex flex-col items-center space-y-1">
         <div><a href="samsaifi076@gmail.com"><CiMail size={50} className="text-orange-500"/></a></div>
         <p>samsaifi076@gmail.com</p>
       </div>
        <div className="flex flex-col items-center space-y-1">
          <div><CiLocationOn size={50} className="text-orange-500"/></div>
          <p>Baishakhi, Dist- Siwan-841226, Bihar, India  </p>
        </div>
     </div>
    </>
  )
}

export default Approach
