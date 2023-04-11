import React from 'react'
import Logo from '../assets/logo.png'
import Facebook from '../assets/facebook.png'
import Twitter from '../assets/twitter.png'
import Instagram from '../assets/instagram.png'
import Linkedln from '../assets/linkedln.png'

const Footer = () => {
  return (
    <div className='flex flex-col justify-between gap-10 lg:gap-36 mt-16 lg:flex-row'>
      <div className='flex flex-col gap-4 lg:w-[500px]'>
        <div className='flex items-center gap-2'>
            <img src={Logo} className='w-12' />
            <h1 className='font-semibold text-lg text-black'>Bubble Bash</h1>
        </div>
        <p className='text-black'>Introducing, We are Bubble Bash digital agency company with more than 6 years of experience. We are committed to serve with all our heart</p>
        <div className='flex gap-6 mt-4'>
          <img src={Facebook} className='w-10' />
          <img src={Twitter} className='w-10' />
          <img src={Instagram} className='w-10' />
          <img src={Linkedln} className='w-10' />
        </div>
      </div>
      <div className='flex gap-12 lg:gap-28 text-black'>
        <div>
          <h1 className='font-bold mb-4'>Pages</h1>
          <ul className='flex flex-col gap-2'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#services'>Our Service</a></li>
            <li><a href='#portofolio'>Portofolio</a></li>
            <li><a href='#testimonial'>Testimonial</a></li>
            <li><a href='#contact'>Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h1 className='font-bold mb-4'>Explore</h1>
          <ul className='flex flex-col gap-2'>
            <li><a href='#home'>Resources</a></li>
            <li><a href='#services'>Blog</a></li>
            <li><a href='#portofolio'>Documents</a></li>
          </ul>
        </div>

        <div>
          <h1 className='font-bold mb-4'>Company</h1>
          <ul className='flex flex-col gap-2'>
            <li><a href='#home'>About Us</a></li>
            <li><a href='#services'>Partners</a></li>
            <li><a href='#portofolio'>Customers</a></li>
            <li><a href='#contact'>Contact Us</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer