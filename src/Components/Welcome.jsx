import React from "react";
import {useState} from "react";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience"
import Projects from "./Projects";
import Contact from "./Contact";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import {Link} from "react-router-dom";

export default function Welcome(props) {
  const [menu, setMenu] = useState(false);



  return ( 
    <header>
     
     
      <div className="container w-full  flex justify-between items-center mx-auto max-w-screen-2xl  shadow-md h-16">
        <div className="flex items-center pl-5 flex-col">
          <h1 className="text-orange-400 font-medium text-2xl">Sameer </h1>
        </div>

        <div className={`${props.icon?"text-white":"text-black"}  hidden  md:flex space-x-10 items-center pr-10` }>
         
       <div className="group" > 
        <Link to ="/" className="group-hover:text-gray-800" >Home</Link>
        
            
            <div className="hidden w-full h-0.5 bg-gray-700 group-hover:block"></div>
          </div>

       <div className="group">
            <Link to="/about" className="group-hover:text-gray-800">
              About
            </Link>
            
            <div className=" hidden w-full h-0.5 bg-gray-700 group-hover:block"></div>
          </div>

        <div className="group">
            <Link to="/experience" className="group-hover:text-gray-800">
             Experience
            </Link>
            
            <div className="hidden w-full h-0.5 bg-gray-700 group-hover:block"></div>
          </div>

          <div className="group">
            <Link to="/projects" className="group-hover:text-gray-800">
              Projects
            </Link>
          
            <div className="hidden w-full h-0.5 bg-gray-700 group-hover:block "></div>
          </div>

        <div className="group">
            <Link to="/contact" className="group-hover:text-gray-800">
             Contact
            </Link>
           
            <div className="hidden w-full h-0.5 bg-gray-700 group-hover:block "></div>
          </div>
          
        </div>

        <div
          onClick={() => setMenu(!menu)}
          className="md:hidden absolute top-4 right-14 cursor-pointer"
        >
          
          {menu ? null : <AiOutlineMenu size={24} className={props.icon?"text-white":"text-black"}/>}
        </div>

        {menu && (
          <div className="md:hidden inset-0 fixed w-full bg-purple-600 flex flex-col space-y-1  items-center h-screen justify-center  ">
            <div
              onClick={() => setMenu(!menu)}
              className="md:hidden absolute top-4 right-14 cursor-pointer "
            >
             
              {menu ? <IoCloseSharp size={24} className={props.icon?"text-black":"text-white"}/> : <AiOutlineMenu size={24} />}
            </div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
           
          </div>
        )}
        <div>
          <button onClick={()=>{props.setIcon(!props.icon)}}>
           {props.icon?<i className="fa-regular fa-sun text-xl pr-4 text-white"></i>:<i className="fa-solid fa-moon text-xl pr-4"></i>}
           {props.icon?console.log("day"):console.log("night")}
           
          </button>

          {/* <button onClick={ props.setIcon( console.log("button clicked"))}>
  {props.icon ? "Light Mode" : "Dark Mode"} click
</button>
<button onClick={props.setIcon(!props.icon)}>
  {!props.icon?"day":"night"}
  button2</button> */}
        </div>
        

      </div>
    </header>
  );
}



