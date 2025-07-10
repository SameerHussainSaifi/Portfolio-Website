import React from 'react'
import randomColorGeneratorImage from '/src/assets/color.jpg';
function RandomColorGenerator() {
  return (
    <div>
      <a href="https://rgbcolorgen.netlify.app/" target='_main'><img src={randomColorGeneratorImage} alt="" className='h-70 shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-xl' width='370px' /></a>
    </div>
  )
}

export default RandomColorGenerator;
