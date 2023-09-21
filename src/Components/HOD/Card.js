import React from 'react'

function Card(props) {
  return (
    <div className=' bg-white border-2 drop-shadow-xl w-2/3 px-2 py-2 rounded-2xl border-neutral-200 h-28 justify-items-center gap-y-2 grid grid-flow-row'>
        <p className=' font-mono font-medium text-center'>{props.title}</p>
        <p className=' font-bold text-lg text-center'>{props.number}</p>
    </div>
  )
}

export default Card