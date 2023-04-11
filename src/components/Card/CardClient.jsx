import React from 'react'

const CardClient = ({ number, title }) => {
  return (
    <div className='flex flex-col items-center text-center gap-2 text-black'>
        <h1 className='font-bold text-2xl lg:text-3xl text-black'>{number}</h1>
        <p className='text-black text-sm lg:text-base'>{title}</p>
    </div>
  )
}

export default CardClient