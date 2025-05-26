import React from "react";
import {useState} from "react";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience"
import Projects from "./Projects";
import Contact from "./Contact";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import {Link, NavLink} from "react-router-dom";

export default function Welcome(props) {
  const [menu, setMenu] = useState(false);



  return ( 
    <header>
     
     <div className="">
      <div className="container w-full  flex justify-between items-center mx-auto max-w-screen-2xl  shadow-lg h-20 fixed bg-gray-300">
        <div className="flex items-center pl-5 flex-col">
          <h1 className=" font-semibold text-2xl md:ml-30 text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-orange-500">Sameer </h1>
        </div>

        <div className={`${props.icon?"text-white":"text-black"}  hidden  md:flex md:space-x-12  items-center pr-10 text-2xl` }>
         
       <div className="group" > 
        <NavLink to ="/" className={({isActive})=>`group-hover:text-pink-700     ${isActive?"active-link":""}`} >Home</NavLink>
        
            
            <div className="hidden w-full h-0.5  group-hover:block"></div>
          </div>

       <div className="group">
            <NavLink to="/about" className={({isActive})=>`group-hover:text-pink-700 ${isActive?"active-link":""}`}>
              About
            </NavLink>
            
            <div className=" hidden w-full h-0.5 bg-pink-700 group-hover:block"></div>
          </div>

        <div className="group">
            <NavLink to="/experience" className={({isActive})=>`group-hover:text-pink-700 ${isActive?"active-link":""}`}>
             Experience
            </NavLink>
            
            <div className="hidden w-full h-0.5 bg-pink-700 group-hover:block"></div>
          </div>

          <div className="group">
            <NavLink to="/projects" className={({isActive})=>`group-hover:text-pink-700 ${isActive?"active-link":""}`}>
              Projects
            </NavLink>
          
            <div className="hidden w-full h-0.5 bg-pink-700 group-hover:block "></div>
          </div>

        <div className="group">
            <NavLink to="/contact"  className={({ isActive }) =>
    `group-hover:text-pink-700  ${isActive ? 'active-link' : ''}`
  } >
             Contact
            </NavLink>
           
            <div className="hidden w-full h-0.5 bg-pink-700 group-hover:block "></div>
          </div>

          </div>

          <div className="space-x-2">
  <div onClick={()=>setMenu(!menu)} className=" flex absolute md:hidden right-10 ">
         {menu?<AiOutlineMenu size={24}/>: <IoCloseSharp size={24}/>}
  </div>
  <div>
          <button onClick={()=>props.setIcon(!props.icon)}>
           {props.icon?<i className="fa-regular fa-sun text-xl pr-4 text-white"></i>:<i className="fa-solid fa-moon text-xl pr-4"></i>}
           {props.icon?console.log("day"):console.log("night")}
           
          </button>
  </div>
          </div>
        </div>
         
         {/* phone */}
         {menu && (
<div className="h-screen flex flex-col items-center justify-center text-lg fixed w-full md:hidden"> 
                <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </div>
         )}
        

        </div>

        {/* <div
          onClick={() => setMenu(!menu)}
          className="md:hidden absolute top-4 right-14 cursor-pointer"
        >
          
          {menu ? null : <AiOutlineMenu size={24} className={props.icon?"text-white":"text-black"}/>}
        </div> */}

        {/* {menu && (
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
        )} */}
        <div>
          

          {/* <button onClick={ props.setIcon( console.log("button clicked"))}>
  {props.icon ? "Light Mode" : "Dark Mode"} click
</button>
<button onClick={props.setIcon(!props.icon)}>
  {!props.icon?"day":"night"}
  button2</button> */}
        </div>
        

      
    </header>
  );
}



