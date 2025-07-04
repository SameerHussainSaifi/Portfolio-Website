import React from 'react'
import { IoMdSearch } from "react-icons/io";
function Search() {
  return (
    <div className='flex flex-col items-center  border-1 px-2 w-full rounded-4xl py-10 shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
      <div className='w-full text-2xl font-semibold mb-4'>
        <h1 className='w-full text-center '>You Can Search Projects Througn the Name and Technical Languages</h1>
      </div>
     <div className='flex space-x-1 pl-2 w-8/12 text-center border-2 rounded-3xl border-orange-700 py-2'>
     <div >
     <IoMdSearch size={30} className='text-orange-700'/>
     </div>
        <input type="text"  placeholder='Search Projects through Name and Technical Languages...' className='w-10/12   outline-none text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 '/>
     </div>
    </div>
  )
}

export default Search
