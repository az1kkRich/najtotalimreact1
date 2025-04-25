import React from 'react'
import vacuum from '../assets/vaacuum.png';
import cleaner from '../assets/cleaner.png'

const Articles = () => {
    return (
        <>
            <div className="container mt-25  ">
                <div className="flex justify-between mb-3">
                    <h1 className='text-center'>Articles & resources</h1>
                    <div className="flex items-center justify-center gap-4 my-4" >
                        <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 cursor-pointer rounded'>Get Free Quote</button>
                        <button className='bg-blue-50 hover:bg-blue-300 text-black font-semibold py-2 px-4 cursor-pointer rounded'>Explore Services</button>

                    </div>
                </div>
                
                <div className="row mb-5">
                    <div className="col-md-6 px-5 py-0">
                        <img src={vacuum} alt="" className='img-fluid'/>
                        <div className="border-1 rounded-2xl p-3 my-1 mx-5">
                            <h4 className='font-bold'>8 best vacuum cleaners to clean any mess for your home in 2022</h4 >
                            <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                            <h5>Jan 28, 2022</h5>
                        </div>
                    </div>
                    <div className="col-md-6  px-5 py-0">
                        <img src={cleaner} alt="" className='img-fluid'/>
                        <div className="border-1 rounded-2xl p-3 my-1 mx-5">
                            <h4 className='font-bold'>How to properly disinfect your phone and other electronics</h4 >
                            <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                            <h5>Feb 1, 2022</h5>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Articles
