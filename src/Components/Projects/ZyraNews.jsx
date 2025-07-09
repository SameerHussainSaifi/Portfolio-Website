import React from 'react';
import newsImage from '/src/assets/news.jpg';
function ZyraNews() {
  return (
    <div height='300px'>
      <a href="https://zyra-news.vercel.app/" target='_main' className=''><img src={newsImage} alt="" height='200px' width='370px' className='rounded-xl h-70 shadow-[0_0_20px_rgba(0,0,0,0.3)]'/></a>
    </div>
  )
}

export default ZyraNews
