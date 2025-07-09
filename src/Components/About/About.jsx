import React from "react";
import HeadAbout from "./HeadAbout";
import CurrentAbout from "./CurrentAbout";
import SkillsAbout from "./SkillsAbout";
import ApproachAbout from "./ApproachAbout.jsx";
import aboutImage from '/src/assets/my.jpg';
function About() {
  return (
   <div className="overflow-x-hidden container pt-55 ">
      <div className="max-w-screen-3xl relative mx-auto h-screen  flex items-center  w-10/12 space-x-10">
        <div className="">
          <img src={aboutImage} alt="About page Image" className="w-100 h-100 sm:rounded-full border-2 border-orange-500"/>
        </div>

        <div className="text-justify flex flex-col w-8/12">
          <HeadAbout/>
          <CurrentAbout/>
          <div className="mt-10 text-justify">
            <SkillsAbout/>
          </div>
            <div className="mt-10 text-2xl">
            <ApproachAbout/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
