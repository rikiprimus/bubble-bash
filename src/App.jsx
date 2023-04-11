import React from 'react'
import Client from './components/Client'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Meeting from './assets/meeting.png'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Portofolio from './components/Portofolio'
import Review from './components/Review'

const App = () => {
  return (
    <div>
      <div id='home' className='bg-primary px-2 lg:px-[150px]'>
        <Navbar />
        <Hero />
      </div>
      <div id='client' className='px-[150px]'>
        <Client />
      </div>
      <div id='services' className='bg-[#F9F9F9] py-12 px-4 lg:px-[150px]'>
        <Services />
      </div>
      <div id='portofolio' className='py-16 px-4 lg:px-[150px]'>
        <Portofolio />
        <Review />
      </div>
      <div id='contact' className='bg-primary py-12 px-4 lg:px-[400px]'>
        <Contact />
      </div>
      <div id='footer' className='py-12 px-4 lg:px-[150px]'>
        <Footer />
      </div>
    </div>
  )
}

export default App