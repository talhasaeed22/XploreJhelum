import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { useLocation, useNavigate, } from 'react-router-dom';
import About from '../About';
import Alert from '../Models/Alert';

const HotelDetails = () => {
    const [error, setError] = useState(false)
    const [message1, setMessage1] = useState('');
    const [message2, setMessage2] = useState('')
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const location = useLocation();
    const navigate = useNavigate();
    const ref = useRef();
    const closeModal = useRef();
    const openModal = () => {
        ref.current.click();
    }

    const url = 'http://localhost:5000'
    const [details, setDetails] = useState({ name: "", email: '', address: "", days: "", contact: '', Emergencycontact: '', rooms: '' })

    const onChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }

    const handleBooking = async (e) => {
        e.preventDefault();
        const response = await fetch(`${url}/api/hotel/booking`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: details.name, email: details.email, address: details.address, days: details.days, contact: details.contact, emergencyContact: details.Emergencycontact, roomNumber: details.rooms, hotel: location.state.name, status: 'Pending' })
        });
        const json = await response.json();
        setError(true);
        setMessage1('Success');
        setMessage2('please Wait for Confirmation')
        close();
        console.log(json)


    }
    const close = () => {
        closeModal.current.click();
    }

    useEffect(() => {
        getRooms();
        // eslint-disable-next-line
    }, [])

    const [rooms, setRooms] = useState([])

    const getRooms = async () => {
        const response = await fetch(`${url}/api/hotel/getrooms`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ hotel: location.state.name, available: 'yes' })
        });
        const json = await response.json();
        setRooms(json.rooms)

    }

    return (
        <>
            <div className="container d-flex justify-content-center">
                <img src={location.state.image[0]} alt="hotel" className="img-fluid my-3 w-75 " />
            </div>
            <div className="container">
                {/* <h1 className='primaryHeading'>{location.state.name}</h1> */}
                <h1 className='primaryHeading' style={{ color: 'rgb(191 28 28)' }}>{location.state.name}</h1>
                <p className='smallpara'>{location.state.description}</p>

            </div>

            <div className="container">
                <div className="row mx-auto">
                    {location.state.image.map((img, index) => {
                        return <div key={index} className="col-md-4 mx-5 my-5" style={{ backgroundImage: `url(${img})`, height: '500px', width: "500px", backgroundSize: 'contain', paddingLeft: '50px', backgroundRepeat: "no-repeat", }}>

                        </div>
                    })}
                </div>
            </div>

            <div className="container packages">
                <span>We offer following package</span>
                <div className='d-flex gap-2'>
                    <span>Per night</span>
                    <span className='fw-bold' style={{ color: 'rgb(191 28 28)' }}>PKR {location.state.pernight}</span>
                </div>
            </div>
            <div className="container my-5">
                <span style={{ color: 'rgb(191 28 28)', fontSize: 30, fontWeight: 'bold' }}>Location</span>
                <br />
                <p style={{fontSize:"20px", textAlign:'center', margin:"auto", margin:'10px 0', fontWeight:'bold'}}>Click on the map to see details</p>
                <br />
                <a target='_blank' rel="noreferrer" href={location.state.link}><img src={location.state.map} alt="map" className="img-fluid" /></a>
            </div>

            <div className="container my-5 d-flex flex-column">
                <span style={{ color: 'rgb(191 28 28)', fontSize: 30, fontWeight: 'bold' }}>Contact Us: </span>
                <span>For further details and queries contact us by: </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    <span style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>  - {location.state.email}</span>
                    <span style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>- {location.state.contact}</span>
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
                                        <input value={details.name} onChange={onChange} type="text" name="name" id="name" placeholder='Enter your name' />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <label htmlFor="email">Email</label>
                                        <input value={details.email} onChange={onChange} type="email" name="email" id="email" placeholder='Enter your email' />
                                    </div>
                                </div>

                                <div className='d-flex flex-column my-3'>
                                    <label htmlFor="address">Address</label>
                                    <textarea value={details.address} onChange={onChange} name="address" rows={2} res id="address" placeholder='Enter your address'></textarea>
                                </div>
                                <div className='d-flex flex-column my-3'>
                                    <label htmlFor="days">Package (45,000 per night)</label>
                                    <input value={details.days} onChange={onChange} type="number" name="days" id="days" placeholder='Enter number of days' />
                                </div>
                                <div className="d-flex justify-content-between my-3">
                                    <div className='d-flex flex-column '>
                                        <label htmlFor="contact">Contact</label>
                                        <input value={details.contact} onChange={onChange} type="number" name="contact" id="contact" placeholder='Your Contact number' />
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <label htmlFor="Emergencycontact">Emergency Contact</label>
                                        <input value={details.Emergencycontact} onChange={onChange} type="number" name="Emergencycontact" id="Emergencycontact" placeholder='Emergency contact number' />
                                    </div>
                                </div>
                                <div className='d-flex flex-column my-3'>
                                    <label htmlFor="rooms">Rooms</label>
                                    {/* // eslint-disable-next-line */}
                                    <select value={details.rooms} onChange={onChange} name="rooms" id="rooms">
                                        {rooms.map((room) =>
                                            <option value={room.number}>{room.number}</option>
                                        )}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button ref={closeModal} type="button" className="readmore" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="readmore" onClick={handleBooking}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            {error && <Alert message1={message1} message2={message2} setError={setError} />}

        </>
    )
}

export default HotelDetails