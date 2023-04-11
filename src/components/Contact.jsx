import React from 'react'
import Button from './Button'
import { HiArrowRight } from "react-icons/hi";

const Contact = () => {
  return (
    <div className='flex flex-col gap-4 text-white items-center justify-center text-center'>
        <h1 className='font-bold text-2xl lg:text-6xl'>Have a project idea and want to make it come true ?</h1>
        <p className='text-slate-200'>Please contact us and we will discuss about your project, don't forget we are always here for you</p>
        <Button 
            text='Contact Us'
            icon={<HiArrowRight />}
        />
    </div>
  )
}

export default Contact