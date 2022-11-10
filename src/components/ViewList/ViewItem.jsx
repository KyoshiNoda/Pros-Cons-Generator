import React from 'react'

function ViewItem(props) {
  return (
    <div className="bg-green-500 w-40 h-40 flex justify-center items-center rounded-full overflow-hidden shadow-lg">
        <h1 className='text-white font-bold'>{props.name}</h1>
    </div>
  )
}

export default ViewItem