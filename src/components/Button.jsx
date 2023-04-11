import React from 'react'

const Button = ({ text, icon }) => {
  return (
    <button
        type='button'
        className='flex items-center gap-2 bg-white p-4 font-bold text-black'    
    >
        {text} {icon}
    </button>
  )
}

export default Button