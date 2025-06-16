import React from 'react'

function Platforms() {
  return (
    <>
    <div className=" relative flex md:space-x-7    ">
<button className="bg-gradient-to-r from-pink-500 to-orange-500 h-12 w-12 rounded-full hover:from-white hover:to-white transition-all duration-300 hover:text-pink-700 cursor-pointer"><i className="fa-brands fa-linkedin-in hover:text-pink-700 text-2xl font-semibold"></i></button>

<button className="h-12 w-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full hover:from-white hover:to-white transition-all duration-300  hover:text-pink-700 cursor-pointer"><i className="fa-brands fa-square-instagram text-2xl font-semibold"></i></button>

<button className="h-12 w-12 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-white hover:to-white transition-all duration-300  hover:text-pink-700 cursor-pointer"><i className="fa-brands fa-x-twitter  text-2xl font-semibold"></i></button>

<button className="h-12 w-12 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-white hover:to-white transition-all duration-300 hover:text-pink-700 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed " disabled><i className="fa-brands fa-facebook-f text-2xl font-semibold  " ></i></button>


</div>
    </>
  )
}

export default Platforms
