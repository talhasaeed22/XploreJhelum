import React from 'react'
import './Styles/Home.css'
import homeimg from '../Images/Home.png'
import hotel from '../Images/bg.jpg'
import HomeHotelBox from './Hotels/HomeHotelBox'
import { Link, useNavigate } from 'react-router-dom'
import About from './About'

const Home = () => {
    let navigate = useNavigate();

    return (
        <>
            <div className="homeContainer" style={{ marginBottom: '2.5rem', backgroundImage: `url(${homeimg})` }}>
                <h1 className="primaryHeading">Hotels, Resturents, Institutions, <br /> Places & Many More </h1>
                <span>Your choice is our business, your satisfaction our need</span>
                <button className="primaryButton">View Our Services</button>
            </div>
            <div className="pt-4 text-center">
                <h3 className="secHeading">Nothing is more important for us than the choice of our users the safety of them </h3>
                <div >
                    <p style={{ marginBottom: '0rem' }} className="smallpara">Xplore Jhelum is a well maintained and established website which provides information about the necessasities of almost every aspects of life.</p>
                    <p className="smallpara">We provide you information about Hotels, and (yahan woh 2 3 chezeen wxplain kr do jo jo tm bana re ho)</p>
                    <p className="smallpara">We also provides our user an android application by which users can access to our services throught thier mobiles</p>
                </div>
            </div>

            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-4 col-sm-12 px-md-5 px-3">
                        <div className={`d-flex flex-column align-items-center justify-content-center text-center gap-2 featureBoxContainer `}>
                            <img src={hotel} alt="Fire1" className='img-fluid' />
                            <span className="servicesSpan">Finest Hotels</span>
                            <span>View Finest Quality of Hotels, thier price, spacing, rooms, staff and much more</span>
                            <button className="servicesButton" onClick={()=>{navigate('/Hotels')}}>View More</button>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 px-md-5 px-3">
                        <div className={`d-flex flex-column align-items-center justify-content-center text-center gap-2 featureBoxContainer `}>
                            <img src={hotel} alt="Fire1" className='img-fluid' />
                            <span className="servicesSpan">Developed Institutions</span>
                            <span>We provide our users set of highly developed and trusted institutions</span>
                            <button className="servicesButton">View More</button>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 px-md-5 px-3">
                        <div className={`d-flex flex-column align-items-center justify-content-center text-center gap-2 featureBoxContainer `}>
                            <img src={hotel} alt="Fire1" className='img-fluid' />
                            <span className="servicesSpan">Finest Hotels</span>
                            <span>View Finest Quality of Hotels, thier price, spacing, rooms, staff and much more</span>
                            <button className="servicesButton">View More</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-5">
                <h1 className="primaryHeading text-center" style={{ color: 'rgb(191 28 28)' }}>Our Services</h1>
                <h1 className="primaryHeading text-center" style={{ color: 'black' }}>What We Offer</h1>
            </div>

            <div className="container pt-5">
                <div className='d-flex align-items-center justify-content-between gap-3 pt-4'>
                    <h3 className="primaryHeading">Hotels</h3>
                    <Link className='fs-5 fw-bold ' style={{color:'#e32213'}} to="/Hotels">View All</Link>
                </div>
                <p className='smallpara ' style={{paddingRight:'15%'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ipsum sunt obcaecati maxime architecto est, earum quia laudantium aliquid ipsam fugiat distinctio nihil reiciendis sint voluptates adipisci in quaerat minima. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit assumenda nemo obcaecati dolor amet natus impedit ratione consectetur. At blanditiis hic eius et. Fugiat, unde! Mollitia aut quis quos explicabo!</p>
                <div className="container my-5">
                    <HomeHotelBox/>
                </div>
                <hr style={{color:'#e32213'}} />
            </div>

            <div className="container pt-5">
                <div className='d-flex align-items-center justify-content-between gap-3 pt-4'>
                    <h3 className="primaryHeading">Resturents</h3>
                    <Link className='fs-5 fw-bold ' style={{color:'#e32213'}} to="/">View All</Link>
                </div>
                <p className='smallpara ' style={{paddingRight:'15%'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ipsum sunt obcaecati maxime architecto est, earum quia laudantium aliquid ipsam fugiat distinctio nihil reiciendis sint voluptates adipisci in quaerat minima. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit assumenda nemo obcaecati dolor amet natus impedit ratione consectetur. At blanditiis hic eius et. Fugiat, unde! Mollitia aut quis quos explicabo!</p>
                <div className="container my-5">
                    <HomeHotelBox/>
                </div>
                <hr style={{color:'#e32213'}} />
            </div>

            <div className="container pt-5">
                <div className='d-flex align-items-center justify-content-between gap-3 pt-4'>
                    <h3 className="primaryHeading">Institutions</h3>
                    <Link className='fs-5 fw-bold ' style={{color:'#e32213'}} to="/">View All</Link>
                </div>
                <p className='smallpara ' style={{paddingRight:'15%'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ipsum sunt obcaecati maxime architecto est, earum quia laudantium aliquid ipsam fugiat distinctio nihil reiciendis sint voluptates adipisci in quaerat minima. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit assumenda nemo obcaecati dolor amet natus impedit ratione consectetur. At blanditiis hic eius et. Fugiat, unde! Mollitia aut quis quos explicabo!</p>
                <div className="container my-5">
                    <HomeHotelBox/>
                </div>
                <hr style={{color:'#e32213'}} />
            </div>

            <div className="container pt-5">
                <div className='d-flex align-items-center justify-content-between gap-3 pt-4'>
                    <h3 className="primaryHeading">Trip Places</h3>
                    <Link className='fs-5 fw-bold ' style={{color:'#e32213'}} to="/">View All</Link>
                </div>
                <p className='smallpara ' style={{paddingRight:'15%'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ipsum sunt obcaecati maxime architecto est, earum quia laudantium aliquid ipsam fugiat distinctio nihil reiciendis sint voluptates adipisci in quaerat minima. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit assumenda nemo obcaecati dolor amet natus impedit ratione consectetur. At blanditiis hic eius et. Fugiat, unde! Mollitia aut quis quos explicabo!</p>
                <div className="container my-5">
                    <HomeHotelBox/>
                </div>
                <hr style={{color:'#e32213'}} />
            </div>

            <About/>
        </>
    )
}

export default Home