import React from 'react'
import ZyraNews from './ZyraNews.jsx';
import WeatherApp from './WeatherApp.jsx';
import VoiceMaker from './VoiceMaker.jsx';
function ProjectsTab() {
  return (
    <div className='md:flex-row flex  justify-between flex-wrap mt-4'>
      <ZyraNews/>
      <VoiceMaker/>
      <WeatherApp/>
    </div>
  )
}

export default ProjectsTab
