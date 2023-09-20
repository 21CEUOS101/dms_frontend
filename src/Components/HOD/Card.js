import React from 'react'

function Card(props) {
  return (
    <div className=' bg-white border-2 drop-shadow-xl w-fit px-2 py-2 rounded-lg h-fit'>
        <p className=' font-mono font-medium'>{props.title}</p>
        <p className=' font-mono font-bold '>{props.number}</p>
    </div>
  )
}

export default Card