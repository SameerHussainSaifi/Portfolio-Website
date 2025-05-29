import {useState,useEffect} from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import {Link, NavLink} from "react-router-dom";
import Mode from "./Mode.jsx";

export default function Header() {
  const [menu, setMenu] = useState(false);
const[icon,setIcon]=useState(true);

useEffect(()=>{
  {icon?document.body.style.backgroundColor="white":document.body.style.backgroundColor="black";}
  {icon?document.body.style.color="black":document.body.style.color="white"}
    
},[icon]);

  return ( 
    <header>
     
     <div className="">
      {/* <div className={`${icon?"bg-black":"bg-white"} container w-full  flex justify-between items-center mx-auto max-w-screen-2xl  shadow-lg h-20 fixed`}> */}
      <div className={`${icon ? "bg-white && text-black" : "bg-black && text-white"} w-full flex justify-between items-center mx-auto max-w-screen-2xl shadow-lg h-20 fixed z-50 `}>

        <div className="flex items-center pl-5 flex-col">
          <h1 className=" font-semibold text-2xl md:ml-30 text-transparent bg-clip-text bg-gradient-to-r from-red-500  to-orange-500">Sameer </h1>
        </div>

        <div className="  hidden  md:flex md:space-x-12  items-center pr-10 text-2xl" >
         
       <div className="group" > 
        <NavLink to ="/" className={({isActive})=>`     ${isActive?"active-link":""}`} >Home</NavLink>
        
            <div className="hidden w-full h-0.5  group-hover:block"></div>
          </div>

       <div className="group">
            <NavLink to="/about" className={({isActive})=>`  ${isActive?"active-link":""}`}>
              About
            </NavLink>
            
            <div className="hidden w-full h-0.5 group-hover:block"></div>
          </div>

        <div className="group">
            <NavLink to="/experience" className={({isActive})=>` ${isActive?"active-link":""}`}>
             Experience
            </NavLink>
            
            <div className="hidden w-full h-0.5 group-hover:block"></div>
          </div>

          <div className="group">
            <NavLink to="/projects" className={({isActive})=>`${isActive?"active-link":""}`}>
              Projects
            </NavLink>
          
            <div className="hidden w-full h-0.5 group-hover:block"></div>
          </div>

        <div className="group">
            <NavLink to="/contact"  className={({ isActive }) =>
    `  ${isActive ? 'active-link' : ''}`
  } >
             Contact
            </NavLink>
           
            <div className="hidden w-full h-0.5 group-hover:block"></div>
          </div>

<Mode icon={icon} setIcon={setIcon} />
          </div>

          <div className="space-x-2">
  <div onClick={()=>setMenu(!menu)} className=" flex absolute md:hidden right-10 ">
         {menu?<AiOutlineMenu size={24}/>: <IoCloseSharp size={24}/>}
  </div>
          </div>
        </div>
         
         {/* phone */}
         {menu && (
<div className="h-screen flex flex-col items-center justify-center text-lg fixed w-full md:hidden"> 
                <Link to="/">Home</Link>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
         )}
        

        </div>

        
        <div>
          

          
        </div>
        

      
    </header>
  );
}



