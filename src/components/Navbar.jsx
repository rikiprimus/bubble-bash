import React, {useState} from 'react'
import { MdViewHeadline, MdClose, MdExpandMore} from "react-icons/md";
import Logo from '../assets/logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(true)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <>
      <div className='flex justify-between items-center text-white py-8'>
        <div className='flex items-center gap-2'>
            <img src={Logo} className='w-12' />
            <h1 className='font-semibold text-lg'>Bubble Bash</h1>
        </div>
        <div>
            <ul className='hidden md:flex gap-12'>
                <li><a href='#home'>Home</a></li>
                <li><a href='#services'>Our Services</a></li>
                <li><a href='#portofolio'>Portofolio</a></li>
                <li><a href='#testimonial'>Testimonial</a></li>
                <li><a href='#contact'>Contact Us</a></li>
            </ul>
        </div>
        <div onClick={handleNav} className='flex items-center cursor-pointer md:hidden'>
          {!nav ? <MdClose className='text-white' size={30}/> : <MdViewHeadline className='text-white' size={30}/>}
        </div>
      </div>
      <div className={!nav ? 'fixed flex flex-col items-center p-4 top-24 w-full bg-primary h-full ease-in-out duration-300 z-10 md:hidden': 'fixed bottom-[-100%]'}>
          <ul className='w-full flex flex-col text-white py-6 px-4'>
            <li><a href="#home">Home</a></li>
            <li><a href="#discover">Discover</a></li>
            <li><a href="#post">Post a Job</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
    </>
  )
}

export default Navbar