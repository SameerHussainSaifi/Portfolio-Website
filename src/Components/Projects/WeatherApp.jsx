import React from 'react'
import weatherImage from '/src/assets/weather2.jpg';
function WeatherApp() {
  return (
    <div>
      <a href="https://weather-app-pied-pi-29.vercel.app/" target="_blank" rel="noopener noreferrer"><img src={weatherImage} alt=""  width='370px' className='rounded-xl h-70 shadow-[0_0_20px_rgba(0,0,0,0.3)]'/></a>
    </div>
  )
}

export default WeatherApp
