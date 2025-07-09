import React from 'react'
import Head from './Head.jsx'
import Search from './Search.jsx'
import ProjectsTab from './ProjectsTab.jsx';
function Projects() {
  return (
    <div className="pt-20 flex flex-col w-10/12 mx-auto space-y-7 mb-50">
      <div className=' mx-auto '>
        <Head/>
      </div>
      <div className='w-full mx-auto'>
        <Search/>
      </div>
      <div className='w-full mx-auto'>
        <ProjectsTab/>
      </div>
    </div>
  )
}

export default Projects
