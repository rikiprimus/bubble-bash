import React from 'react'

const CardReview = ({ title, text, imgUrl, describe}) => {
  return (
    <div className='flex flex-col gap-4 text-black border-2 border-black p-4'>
      <h1 className='font-semibold text-xl'>{title}</h1>
      <p>{text}</p>
      <div className='flex gap-4'>
        <img src={imgUrl} className='w-12' />
        <div>
          <h1 className='font-semibold'>{name}</h1>
          <p>{describe}</p>
        </div>
      </div>
    </div>
  )
}

export default CardReview