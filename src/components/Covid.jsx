import React from 'react'
import covidImg from '../assets/covid.png'
import { Phone } from 'lucide-react'

const Covid = () => {
  return (
    <>
      <div className="container mt-25 covid ">
        <div className="row ">
            <div className="col-md-6">
                <img src={covidImg} alt="" className='img-fluid max-h-140 w-full' />
            </div>
            <div className="col-md-6 pl-3 ">
                <div className="flex flex-col py-0 px-5 justify-center h-full ">
                    <h3 className='text-white'>Covid-19 sanitization</h3>
                    <p className='text-white'>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed <br /> neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
                    <h1>We follow guidelines to keep you safe from the COVID-19 virus</h1>
                    <p className='text-white'>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
                    <div className="flex gap-3">
                        <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-6 px-10 cursor-pointer rounded'>Get Free Quote</button>
                        <div className="flex justify-center items-center ">
                            <Phone size={60} color="#000" className='bg-white rounded-4xl p-2' />
                            <h2>(414) 567 - 2109</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Covid
