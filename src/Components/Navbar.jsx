
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
function Navbar({icon,setIcon} ) {
  return (
    <div >
      <Header icon={icon} setIcon={setIcon}/>
      <Footer/>
    </div>
  )
}

export default Navbar
