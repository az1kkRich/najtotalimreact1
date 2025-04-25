import { Factory, Projector, School } from 'lucide-react'
import React from 'react'

const Services = () => {
    return (
        <>
            <div className="container mt-25  ">
                <div className="flex justify-between mb-5">
                <h1 className='text-center'>Our Services</h1>
                <button className='bg-blue-50 hover:bg-blue-300 text-black font-semibold py-2 px-4 cursor-pointer rounded'>Explore Services</button>
                
                </div>

                <div className="row mb-5">
                    <div className="col-md-4 flex flex-col justify-center items-center text-center">

                        <School size={150} color="#0091ff" className='bg-blue-200 p-2 rounded-full' />
                        <h1>House cleaning</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate asperiores vero molestias saepe quaerat.</p>
                    </div>
                    <div className="col-md-4 flex flex-col justify-center items-center text-center">
                        <Factory size={150} color="#0091ff" className='bg-blue-200 p-2 rounded-full' />
                        <h1>Office cleaning</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate asperiores vero molestias saepe quaerat.</p>

                    </div>
                    <div className="col-md-4 flex flex-col justify-center items-center text-center">
                        <Projector size={150} color="#0091ff" className='bg-blue-200 p-2 rounded-full' />
                        <h1>Industrial cleaning</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate asperiores vero molestias saepe quaerat.</p>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Services
