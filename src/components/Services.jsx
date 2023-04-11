import React from 'react'
import Desain from '../assets/desain.png'
import Development from '../assets/development.png'
import Writer from '../assets/writer.png'
import Branding from '../assets/branding.png'
import Editing from '../assets/editing.png'
import Illustration from '../assets/illustration.png'
import CardServices from './Card/CardServices'

const Services = () => {
  return (
    <div>
        <div className='flex flex-col gap-2 mb-6'>
          <p className='text-base'>Our Services</p>
          <h1 className='font-semibold text-2xl'>We Provide What You Need</h1>
        </div>
        <div className='grid grid-rows-none gap-8 px-10 lg:gap-36 lg:grid-cols-3'>
          <CardServices 
            imgUrl={Desain}
            title='UI/UX Designer'
            text='We are ready to make your website more friendly and efficient in the eyes of users'
          />
          <CardServices 
            imgUrl={Development}
            title='Web Development'
            text='Want to create a website that has many features? We have the answer for you'
          />
          <CardServices 
            imgUrl={Writer}
            title='Content Writer'
            text='We provide interesting content and can attract customers for you'
          />
          <CardServices 
            imgUrl={Branding}
            title='Branding'
            text='Create visual branding with amazing result, you just sit back and relax'
          />
          <CardServices 
            imgUrl={Editing}
            title='Editing Video'
            text='Want to create a website that has many features? We have the answer for you'
          />
          <CardServices 
            imgUrl={Illustration}
            title='Illustration'
            text='Create beauty illustrasion as you need, and make it interesting'
          />
          
        </div>
    </div>
  )
}

export default Services