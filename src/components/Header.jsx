import React from 'react'

const Header = () => {
  return (
    <>
      <div id="header">
        <div className="mx-4 py-2">
          <div className="flex  justify-between   gap-5">
            <div className="flex  items-center ">
              <h1 className='text-2xl text-blue-600 font-semibold'>Cleaning X</h1>
              <div className=" gap-3 ml-18 hidden md:flex">
                <p className='text-xl'>Home</p>
                <p className='text-xl'>About</p>
                <p className='text-xl'>Services</p>
                <p className='text-xl'>Contact</p>
              </div>
            </div>

            <div className="flex  items-center gap-4 ">
              <p className="text-xl">Cart (0) </p>
              <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 cursor-pointer rounded'>Get Free Quote</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
