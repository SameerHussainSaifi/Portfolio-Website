import React from 'react'

function Mode({icon,setIcon}) {
    

  return (
    <div>

      <button onClick={() => setIcon(!icon)} className="relative md:left-[100px] text-xl ">
 {icon?<i className="fa-solid fa-moon text-black"></i>:<i className="fa-solid fa-sun text-white"></i>}
</button>


    </div>
  )
}

export default Mode
