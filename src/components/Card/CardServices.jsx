import React from 'react'

const CardServices = ({ imgUrl, title, text }) => {
  return (
    <div className='flex flex-col items-center gap-2 p-4 bg-white drop-shadow-2xl'>
      <img src={imgUrl} />
      <h1 className='font-bold text-xl'>{title}</h1>
      <p className='text-base text-slate-500 text-center lg:text-lg'>{text}</p>
    </div>
  )
}

export default CardServices