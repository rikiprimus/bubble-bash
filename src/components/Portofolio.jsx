import React from 'react'
import CardPortofolio from './Card/CardPortofolio'
import Corp from '../assets/corp.png'
import Food from '../assets/food.png'
import Supermarket from '../assets/supermarket.png'

const Portofolio = () => {
  return (
    <div className='mb-14'>
        <div className='flex flex-col gap-2 mb-6'>
          <p className='text-base'>Our Portofolio's</p>
          <h1 className='font-semibold text-2xl'>Recent Projects</h1>
        </div>
        <div className='grid grid-rows-none gap-8 px-10 lg:gap-36 lg:grid-cols-3'>
            <CardPortofolio 
                imgUrl={Corp}
                title='Website My Hospital'
                text='Create a hospital website with patient, doctor, and drug logistics features that help hospital operations'
            />
            <CardPortofolio 
                imgUrl={Food}
                title='Food & Beverages Corp Logo'
                text='Create a logo for a food & beverage company, with emphasis on aesthetics and user requests'
            />
            <CardPortofolio 
                imgUrl={Supermarket}
                title='Supermarket Mobile Apps'
                text='Develop mobile applications for supermarkets with buy, auto-pay, and marketplace features'
            />
        </div>
    </div>
  )
}

export default Portofolio