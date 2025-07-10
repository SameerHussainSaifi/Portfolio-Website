import React from 'react'
import ZyraNews from './ZyraNews.jsx';
import WeatherApp from './WeatherApp.jsx';
import VoiceMaker from './VoiceMaker.jsx';
import TodoApp from './TodoApp.jsx';
import RandomColorGenerato from './RandomColorGenerator.jsx';
function ProjectsTab() {
  return (
    <div className='md:flex-row flex  justify-between flex-wrap mt-4 space-y-10'>
      <ZyraNews/>
      <VoiceMaker/>
      <WeatherApp/>
      <TodoApp/>
      <RandomColorGenerato/>

    </div>
  )
}

export default ProjectsTab
