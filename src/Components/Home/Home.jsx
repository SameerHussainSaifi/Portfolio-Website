import React from 'react'
import HeadHome from './HeadHome';
import ParaHome from './ParaHome';
import Platforms from './Platforms';
import CV from './CV';
import CurrentTech from './CurrentTech';
import {Outlet} from "react";


function Home() {
  return (
    <>
    <div className="overflow-x-hidden container w-10/12 mx-auto ">  
    
      <div className="flex   md:mt-30 flex-col space-y-1 md:ml-35">
       <HeadHome/>
       <ParaHome/>
      </div>



     
<div className="flex justify-between w-8/12">
<div className="flex  flex-col ml-35  mb-50 space-y-10">
     <Platforms/>
     <CV/>
     
    </div>

    <div className=""><CurrentTech/></div>

</div>

    </div>
    </>
  )
}

export default Home
