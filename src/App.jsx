import { useState,useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import notFound from "./Components/NotFound";
// Shared Layout
function Layout() {
  return (
    <>
     
      <Navbar />
      
      
    </>
  );

  

}

export default function App() {


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
        {path: "*", element:<notFound/>}
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

