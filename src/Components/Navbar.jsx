import {Outlet} from "react-router-dom"
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
function Navbar({icon,setIcon} ) {
  return (
    <div >
      <Header icon={icon} setIcon={setIcon}/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Navbar
