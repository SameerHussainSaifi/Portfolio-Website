import React from 'react'

function Head() {
  return (
    <>
    <div className='flex flex-col space-y-5 mt-7 items-center'>
    <div className='text-3xl font-semibold '>
      <h1>Latest <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500'>Projects</span></h1>
    </div>
    <div className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 text-lg'>
        <p>"Take a look at my recent Projects highlighting my expertise and abilities"</p>
    </div>
    </div>
    </>
  )
}

export default Head

