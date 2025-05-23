// import {useState} from "react";
// import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
// import Welcome from "./Components/Welcome.jsx";
// import TopSection from "./Components/TopSection.jsx";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Experience from "./Components/Experience";
// import Projects from "./Components/Projects";
// import Contact from "./Components/Contact";

// // Shared Layout
// function Layout({ icon, setIcon }) {
//   return (
//     <>
//       <Welcome icon={icon} setIcon={setIcon} />
//       <TopSection />
//       <Outlet />
//     </>
//   );
// }


// export default function App(){


//   const [icon, setIcon] = useState(false);

// const router=createBrowserRouter(
//   [
//     {
//       path:"/",
//       element:<Home/>
//     },
//     {
//       path:"/About",
//       element:<About/>
//     },
//     {
//       path:"/Experience",
//       element:<Experience/>
//     },
//     {
//       path:"/Projects",
//       element:<Projects/>
//     },
//     {
//       path:"/Contact",
//       element:<Contact/>
//      }
    
//   ]
// );


// //  const styles={backgroundColor:icon?"black":"white"}
 
//   return <RouterProvider router={router} />;
// }

import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Welcome from "./Components/Welcome";
import TopSection from "./Components/TopSection";
import Home from "./Components/Home";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

// Shared Layout
function Layout({ icon, setIcon }) {
  return (
    <>
     
      <Welcome icon={icon} setIcon={setIcon} />
      <TopSection />
      {/* <div className="p-2 text-center bg-gray-100">
  Current icon state: {icon ? "🌞 Light" : "🌙 Dark"}
</div> */}
      <Outlet />
    </>
  );

  

}

export default function App() {
  const [icon, setIcon] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout icon={icon} setIcon={setIcon} />,
      children: [
        {index:true , element: <Home /> },
        { path: "about", element: <About /> },
        { path: "experience", element: <Experience /> },
        { path: "projects", element: <Projects /> },
        { path: "contact", element: <Contact /> },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}
