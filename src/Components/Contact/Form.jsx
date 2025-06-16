import React from 'react'

function Form() {
  return (
    <>
    <div className="container relative border-1 rounded-3xl w-full shadow-[0_0_20px_rgba(0,0,0,0.3)] p-6 bg-white bottom-2">
      <form action="" className="flex   space-y-10 pt-10 flex-col items-center ">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 text-2xl font-semibold">Send me a Direct Message!</h1>
        <div className="flex justify-evenly  w-full text-orange-500">
          <input type="text" placeholder="Full Name" className="border-1 w-5/12 pl-5 h-14 rounded-xl "/>
          <input type="mail" placeholder="Mail" className="border-1 w-5/12 pl-5 h-14 rounded-xl"/>
        </div>
        <div className="flex justify-evenly w-full text-orange-500">
          <input type="text" placeholder="Phone no." className="border-1 w-5/12 pl-5 h-14 rounded-xl" w/>
          <input type="text" placeholder="Subject" className="border-1 w-5/12 pl-5 h-14 rounded-xl" />
         
        </div>
        <div className="w-full flex justify-center text-orange-500">
          <input type="textarea" placeholder='text message here...' className="border-1 w-10/12 h-40 rounded-xl pl-5"/>
        </div>
        <div><button className="border-1 mb-10 px-3 py-1 rounded-xl  bg-gradient-to-r from-red-500 to-orange-500 w-40 h-10 text-lg">Send Message</button></div>
       
      </form>
     </div>

    </>
  )
}

export default Form
