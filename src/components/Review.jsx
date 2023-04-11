import React from 'react'
import Testi1 from '../assets/testi1.png'
import Testi2 from '../assets/testi2.png'
import Testi3 from '../assets/testi3.png'
import CardReview from './Card/CardReview'

const Review = () => {
  return (
    <div>
        <div id='testimonial' className='flex flex-col gap-2 mb-6'>
          <p className='text-base'>Client Reviews</p>
          <h1 className='font-semibold text-2xl'>What Our Happy Client Say About Us</h1>
        </div>
        <div className='grid grid-rows-none gap-8 px-10 lg:gap-36 lg:grid-cols-3'>
            <CardReview 
                title='Website My Hospital'
                text='Very nice to work with Bubble Bash, a reliable and responsive team is very helpful'
                imgUrl={Testi1}
                name='Katty Clock'
                describe='CEO My Hospital'
            />
            <CardReview 
                title='Logo F&B Corp'
                text="Really the best service we've ever gotten, really looking forward to the next project"
                imgUrl={Testi2}
                name='John Robert'
                describe='CEO F&B Corp'
            />
            <CardReview 
                title='Website My Hospital'
                text="The best developer team ever, it's a lot of fun working. Maybe work together again on the next project?"
                imgUrl={Testi3}
                name='Mike Junior'
                describe='CEO Supermarket Mobile Apps'
            />
        </div>
    </div>
  )
}

export default Review