import React from 'react'
import header from '../assets/header.png' 

const HeaderSlide = () => {
  return (
    <>
      <div className="mx-19">
        <div className="row ">
            <div className="col-md-6 my-auto w-1/2">
                <h1 className='text-5xl text-blue-600 font-semibold'>Quality cleaning for your home</h1>
                <p className='text-xl '>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus..</p>
                <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 cursor-pointer rounded'>Get Free Quote</button>
            </div>
            <div className="col-md-6">

            <img src={header} alt=".." className='img-fluid  max-h-150 w-full' />
            </div>
        </div>
      </div>
    </>
  )
}

export default HeaderSlide
