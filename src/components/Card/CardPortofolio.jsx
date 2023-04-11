import React from 'react'

const CardPortofolio = ({ imgUrl, title, text }) => {
  return (
    <div className='flex flex-col gap-2 text-black'>
      <img src={imgUrl} />
      <h1 className='font-semibold text-xl'>{title}</h1>
      <p>{text}</p>
    </div>
  )
}

export default CardPortofolio