import React from 'react'

function CreateSingle() {
  return (
    <div className='flex items-center justify-center w-screen h-screen bg-cyan-500'>
      <div className='bg-gray-100 h-56 w-96 rounded'>
        <h1 className= 'flex justify-center text-3xl'>Pros Cons Generator</h1>
        <div className='flex justify-evenly p-4'>
          <div className='flex justify-center items-center bg-green-500 h-40 w-20 rounded'>Pros</div>
          <div className='flex justify-center items-center bg-red-500 h-40 w-20 rounded'>Pros</div>
        </div>
      </div>
    </div>
  )
}

export default CreateSingle;