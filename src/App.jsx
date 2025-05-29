import { useState,useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Header from "./Components/Header";

// Shared Layout
function Layout() {
  return (
    <>
     
      <Navbar />
      {/* <Header icon={icon} setIcon={setIcon}/> */}
      <Outlet />
      
    </>
  );

  

}

export default function App() {
//   const [icon, setIcon] = useState(false);

//   useEffect(() => {
//   document.body.className = icon ? "dark-mode" : "light-mode";
// }, [icon]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout  />,
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
