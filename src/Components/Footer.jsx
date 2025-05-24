import React from 'react'

function Footer() {
  return (
    <>
       
     <footer className="fixed bottom-27 flex  w-full justify-center h-16 shadow-lg max-w-screen-3xl">
 
 
 <div className="absolute flex top-25  space-x-7 w-full justify-center  ">
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
     </footer>
    </>
  )
}

export default Footer
