import { Phone } from 'lucide-react'
import React from 'react'

const ContactUs = () => {
    return (
        <>
            <div className="bg-blue-100">
                <div className="container">
                    <div className="row py-5 ">
                        <div className="col-md-6  p-5">
                            <h2 className='mb-3 text-black!'>Contact US</h2>
                            <p className='mb-4'>In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
                            <div className="flex mb-4 items-center ">
                                <Phone size={60} color="#000" className='bg-white rounded-4xl p-2' />
                                <h2 className='text-black!'>(414) 567 - 2109</h2>
                            </div>
                            <h3 className='mb-3 text-black!'>Not convinced yet?</h3>
                            <p className='mb-3 text-black!'>Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
                        </div>
                        <div className="col-md-6 p-5">
                            <div className="row mb-4">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Address" aria-label="Address" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Email" aria-label="Email" />
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Requested service" aria-label="Requested service" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Day of service" aria-label="Day of service" />
                                </div>


                            </div>
                            <div className="row">
                                <div className="form-floating p-2">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                    <label for="floatingTextarea">Add Note</label>
                                </div>
                            </div>
                            <button className='bg-blue-500 mt-3 hover:bg-blue-600 text-white font-semibold py-2 px-4 cursor-pointer rounded'>Get Free Quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs
