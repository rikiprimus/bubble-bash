import React from 'react'
import Meeting from '../assets/meeting.png'
import { HiArrowRight } from "react-icons/hi";
import Button from './Button';

const Hero = () => {
  return (
    <div className='static mt-16 pb-24 md:pb- lg:pb-[330px]'>
        <div className='flex flex-col items-center text-center gap-8 mb-[76px]'>
            <h1 className='font-bold text-white text-2xl lg:text-6xl lg:w-[900px]'>Create Amazing Digital Product For Your Business</h1>
            <p className='text-white text-sm md:w-[700px]'>We are a professional digital agency that has been established since 2016, we present a variety of digital services that can help you solve problems in your business</p>
            <Button 
              text='Get Started'
              icon={<HiArrowRight />}
            />
        </div>
        <div className='absolute left-2 right-2 sm:left-[150px] sm:right-[150px] lg:left-[350px] lg:left-[350px] lg:top-[600px]'>
          <img src={Meeting} className='w-full h-[200px] lg:w-[1210px] lg:h-[631px]' />
        </div>
    </div>
  )
}

export default Hero