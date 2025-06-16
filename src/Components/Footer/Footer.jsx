import React from 'react'

function Footer() {
  return (
    <>
       
     
 
 
 {/* <div className="  flex  space-x-7 w-full justify-center h-20 shadow-lg max-w-screen-3xl  font-semibold items-center bg-white z-index"> */}
 <div
  className="bg-white flex space-x-7 w-full justify-center h-20 max-w-screen-3xl font-semibold items-center z-50"
  style={{ boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1)' }}
>

    <div className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 font-medium text-lg">
    <h1>Let's Connect</h1>
    </div>
    <button><i className="fa-solid fa-envelope text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500   transition-all duration-300 hover:text-pink-700 cursor-pointer text-2xl"></i></button>
    <button><i className="fa-solid fa-phone text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500   transition-all duration-300 hover:text-pink-700 cursor-pointer text-2xl"></i></button>
<button><i className="fa-brands fa-linkedin-in text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500   transition-all duration-300 hover:text-pink-700 cursor-pointer text-2xl"></i></button>

<button><i className="fa-brands fa-instagram  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500   transition-all duration-300 hover:text-pink-700 cursor-pointer text-2xl"></i></button>
<button><i className="fa-brands fa-facebook text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500   transition-all duration-300 hover:text-pink-700 cursor-pointer text-2xl"></i></button>
<button><i className="fa-brands fa-x-twitter text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500   transition-all duration-300 hover:text-pink-700 cursor-pointer text-2xl"></i></button>

</div>
     {/* </div> */}
    </>
  )
}

export default Footer
