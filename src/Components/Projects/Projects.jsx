import React from 'react'
import Head from './Head.jsx'
import Search from './Search.jsx'
function Projects() {
  return (
    <div className="pt-20 flex flex-col w-full space-y-7 mb-50">
      <div className=' mx-auto '>
        <Head/>
      </div>
      <div className='w-10/12 mx-auto'>
        <Search/>
      </div>
    </div>
  )
}

export default Projects
