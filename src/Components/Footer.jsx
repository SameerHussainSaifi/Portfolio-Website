import React from 'react'

function Footer() {
  return (
    <>
       
     {/* <div className="fixed bottom-0 container flex  w-full justify-center h-16 shadow-lg max-w-screen-3xl "> */}
 
 
 <div className="  fixed bottom-0 flex  space-x-7 w-full justify-center h-16 shadow-lg max-w-screen-3xl  bg-slate-700 items-center">
    <div className="text-orange-500 font-medium text-lg">
    <h1>Let's Connect</h1>
    </div>
    <button><i className="fa-solid fa-envelope  text-pink-700 text-2xl cursor-pointer"></i></button>
    <button><i className="fa-solid fa-phone  text-pink-700 text-2xl cursor-pointer"></i></button>
<button><i className="fa-brands fa-linkedin-in text-pink-700 text-2xl cursor-pointer"></i></button>

<button><i className="fa-brands fa-instagram  text-pink-700 text-2xl cursor-pointer"></i></button>
<button><i className="fa-brands fa-facebook  text-pink-700 text-2xl cursor-pointer"></i></button>
<button><i className="fa-brands fa-x-twitter  text-pink-700 text-2xl cursor-pointer"></i></button>

</div>
     {/* </div> */}
    </>
  )
}

export default Footer
