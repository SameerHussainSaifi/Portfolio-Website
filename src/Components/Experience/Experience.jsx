import React from 'react'
import AboutExperience from './AboutExperience';
import HeadExperience from './HeadExperience';
import SkillsHead from './SkillsHead';
import Skills from './SkillsPara';
import FrontendTech from './FrontendTech';
import BackendTech from './BackendTech';
import Tools from './Tools';
import Deployment from './Deployment';

function Experience() {
  return (
    <div className="pt-20 mb-50  w-9/12 mx-auto">
       <div className="flex flex-col w-full mx-auto items-center text-2xl  md:mt-5 space-y-10 ">
       <HeadExperience/>
       <AboutExperience/>
       
       </div>

       <div className="flex flex-col items-center mt-10 space-y-7 ">
        <SkillsHead/>
        <Skills/>
    
       <div className="flex justify-center space-x-20 mx-20 w-full ">
       
         <FrontendTech/>
         <BackendTech/>
       <Tools/>
        </div>

       <Deployment/>

       </div>
    </div>
  )
}

export default Experience
