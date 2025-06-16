import { useState,useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Header from "./Components/Header/Header.jsx";
import notFound from "./Components/NotFound/NotFound.jsx";
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

