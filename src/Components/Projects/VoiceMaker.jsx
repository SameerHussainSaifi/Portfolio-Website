import React from 'react'
import voiceMakerImage from '/src/assets/VoiceMaker.jpg';
function VoiceMaker() {
  return (
    <div className=''>
      <a href="https://voice-maker-iota.vercel.app/" target='_main'><img src={voiceMakerImage} alt="" width='370px' className='h-70  rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.3)]'/></a>
    </div>
  )
}

export default VoiceMaker
