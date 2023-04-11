import React from 'react'
import CardClient from './Card/CardClient'

const Client = () => {
  return (
    <div className='mt-[120px] lg:mt-[380px] mb-8 lg:mb-[100px]'>
        <div className='flex gap-8 lg:gap-[160px] justify-center'>
            <CardClient 
                number='1.2K+'
                title='Happy Clients'
            />
            <CardClient 
                number='1.1K+'
                title='WorldWide Clients'
            />
            <CardClient 
                number='6+'
                title='Years of Clients'
            />
            <CardClient 
                number='12+'
                title='Award Winners'
            />
        </div>
    </div>
  )
}

export default Client