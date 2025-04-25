import React from 'react'
import '../index.css'
import { CalendarDays, IdCard, TicketX } from 'lucide-react'
const About = () => {
  return (
    <>
      <div className="container mt-5">
        <h1 className='text-center'>About US</h1>
        <p className='text-center '>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed <br /> neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>

        <div className="row">
          <div className="col-md-4 flex flex-col justify-center items-center text-center">

            <CalendarDays size={150} color="#0091ff" className='bg-blue-200 p-2 rounded-full' />
            <h1>1. Schedule online</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate asperiores vero molestias saepe quaerat.</p>
          </div>
          <div className="col-md-4 flex flex-col justify-center items-center text-center">
            <IdCard size={150} color="#0091ff" className='bg-blue-200 p-2 rounded-full' />
            <h1>2. Schedule online</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate asperiores vero molestias saepe quaerat.</p>

          </div>
          <div className="col-md-4 flex flex-col justify-center items-center text-center">
            <TicketX size={150} color="#0091ff" className='bg-blue-200 p-2 rounded-full' />
            <h1>3. Schedule online</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate asperiores vero molestias saepe quaerat.</p>

          </div>
        </div>

        <div className="flex items-center justify-center gap-4 my-4" >
          <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 cursor-pointer rounded'>Get Free Quote</button>
          <button className='bg-blue-50 hover:bg-blue-300 text-black font-semibold py-2 px-4 cursor-pointer rounded'>Explore Services</button>

        </div>
      </div>
    </>
  )
}

export default About
