import React from 'react'
import { useRef } from 'react';
import { useLocation, useNavigate, } from 'react-router-dom';
import About from '../About';

const HotelDetails = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const ref = useRef();
    const openModal = () => {
        ref.current.click();
    }
    return (
        <>
            <div className="container d-flex justify-content-center">
                <img src={location.state.image[0]} alt="hotel" className="img-fluid my-3 w-75 " />
            </div>
            <div className="container">
                {/* <h1 className='primaryHeading'>{location.state.name}</h1> */}
                <h1 className='primaryHeading' style={{ color: 'rgb(191 28 28)' }}>{location.state.name}</h1>
                <p className='smallpara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sapiente perferendis rerum architecto animi recusandae vero neque, sint ducimus. Sequi animi reiciendis soluta impedit dolorem maiores maxime, cupiditate necessitatibus et quaerat sed quia tempora veritatis, quae eveniet dolorum modi explicabo natus aliquam iusto similique! Voluptatum assumenda alias tenetur veritatis praesentium?</p>
                <p className='smallpara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex soluta in reiciendis quae et excepturi voluptatem est architecto suscipit quod. Quas suscipit repudiandae ea molestias numquam nisi eligendi reiciendis esse?</p>
            </div>
            <div className="container my-2">
                <div className="row my-3">
                    <div className="col-md-6">
                        <img src={location.state.image[1]} alt="hotel" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <img src={location.state.image[2]} alt="hotel" className="img-fluid" />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-4">
                        <img src={location.state.image[3]} alt="hotel" className="img-fluid" />
                    </div>
                    {location.state.image[4] && <div className="col-md-4">
                        <img src={location.state.image[4]} alt="hotel" className="img-fluid" />
                    </div>}
                   {location.state.image[5] &&  <div className="col-md-4">
                        <img src={location.state.image[5]} alt="hotel" className="img-fluid" />
                    </div>}
                </div>
            </div>

            <div className="container packages">
                <span>We offer following package</span>
                <div className='d-flex gap-2'>
                    <span>Per night</span>
                    <span className='fw-bold' style={{ color: 'rgb(191 28 28)' }}>45,000</span>
                </div>
            </div>

            <div className="container my-3">
                <button className="readmore mx-2" onClick={openModal}>Book Now</button>
                <button className="readmore mx-2" onClick={() => { navigate('/Hotels') }}>Go Back</button>
            </div>

            <div className="container">
                <About />
            </div>

            <button ref={ref} type="button" className={`btn btn-primary d-none `} data-bs-toggle="modal" data-bs-target="#exampleModal">

            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fs-4" id="exampleModalLabel">Hotel Booking</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="contianer">
                                <h1 className='fs-2 fw-bold'>Hotel Name</h1>
                                <p className="smallpara">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ab dicta error aut voluptate cupiditate labor</p>
                                <p className='fs-5 fw-bold'>Please enter your information</p>
                            </div>
                            <div className='bookingForm'>
                                <div className='d-flex justify-content-between my-3'>
                                    <div className='d-flex flex-column'>
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="name" id="name" placeholder='Enter your name' />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" id="email" placeholder='Enter your email' />
                                    </div>
                                </div>

                                <div className='d-flex flex-column my-3'>
                                    <label htmlFor="address">Address</label>
                                    <textarea name="address" rows={2} res id="address" placeholder='Enter your address'></textarea>
                                </div>
                                <div className='d-flex flex-column my-3'>
                                    <label htmlFor="days">Package (45,000 per night)</label>
                                    <input type="number" name="days" id="days" placeholder='Enter number of days' />
                                </div>
                                <div className="d-flex justify-content-between my-3">
                                    <div className='d-flex flex-column '>
                                        <label htmlFor="contact">Contact</label>
                                        <input type="number" name="contact" id="contact" placeholder='Your Contact number' />
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <label htmlFor="Emergencycontact">Emergency Contact</label>
                                        <input type="number" name="Emergencycontact" id="Emergencycontact" placeholder='Emergency contact number' />
                                    </div>
                                </div>
                                <div className='d-flex flex-column my-3'>
                                    <label htmlFor="rooms">Rooms</label>
                                    <input type="number" name="rooms" id="rooms" placeholder='Enter no of rooms to book' />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="readmore" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="readmore">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HotelDetails