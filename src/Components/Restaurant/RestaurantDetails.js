import React, {useEffect} from 'react'
import { useRef } from 'react';
import { useLocation, useNavigate, } from 'react-router-dom';
import About from '../About';

const RestaurantDetails = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const ref = useRef();
    const openModal = () => {
        ref.current.click();
    }
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    return (
        <>
            <div className="container d-flex justify-content-center">
                <img src={location.state.image[0]} alt="hotel" className="img-fluid my-3 w-75" />
            </div>
            
            <div className="container">
                {/* <h1 className='primaryHeading'>{location.state.name}</h1> */}
                <h1 className='primaryHeading' style={{ color: 'rgb(191 28 28)' }}>{location.state.name}</h1>
                
                <p className='smallpara'>{location.state.desc}</p>
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

            <div className="container my-5">
                <span style={{ color: 'rgb(191 28 28)', fontSize:30, fontWeight:'bold' }}>Location</span>
                <img src={location.state.map} alt="map" className="img-fluid" />
            </div>

            <div className="container my-5 d-flex flex-column">
                <span style={{ color: 'rgb(191 28 28)', fontSize: 30, fontWeight: 'bold' }}>Contact Us: </span>
                <span>For further details and queries contact us by: </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    <span style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>- {location.state.contact}</span>
                </div>
            </div>

            <div className="container my-3">
                <button className="readmore mx-2" onClick={openModal}>Call Us</button>
                <button className="readmore mx-2" onClick={() => { navigate('/Restaurants') }}>Go Back</button>
            </div>

            <div className="container">
                <About />
            </div>

        </>
    )
}

export default RestaurantDetails