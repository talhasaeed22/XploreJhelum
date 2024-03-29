import React from 'react'
import './Styles/Home.css'
import homeimg from '../Images/download.png'
import tulip1 from '../Images/Hotels/Tulip1.png'
import kfc1 from '../Images/Restaurants/kfc1.png'
import institution from '../Images/Institutions/military2.jpg'
import HomeHotelBox from './Hotels/HomeHotelBox'
import HomeRestaurantBox from './Restaurant/HomeRestaurantBox'
import { Link, useNavigate } from 'react-router-dom'
import About from './About'
import HomePlacesBox from '../Components/Places/HomePlacesBox'
import { useEffect } from 'react'
import HomeInstitutionBox from '../Components/Institutions/HomeInstitutionBox'
const Home = () => {

    let navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('email') !== null && localStorage.getItem('email').includes('admin')){
            navigate('/Admin')
        }
         // eslint-disable-next-line
    }, [])
    return (
        <>
            <div className="homeContainer" style={{ marginBottom: '2.5rem', backgroundImage: `url(${homeimg})` }}>
                <h1 className="primaryHeading">Hotels, Resturents, Institutions, <br /> Places & Many More </h1>
                <span>Your choice is our business, your satisfaction our need</span>
                <button onClick={()=>{window.scrollTo(0, 600)}} className="primaryButton">View Our Services</button>
            </div>
            <div className="pt-4 text-center">
                <h3 className="secHeading">Nothing is more important for us than the choice of our users the safety of them </h3>
                <div >
                    <p style={{ marginBottom: '0rem' }} className="smallpara">Xplore Jhelum is a well maintained and established website which provides information about the necessasities of almost every aspects of life.</p>
                    <p className="smallpara">We provide you information about hotels, restaurants, institutions and places.</p>
                    <p className="smallpara">We also provides our user an android application by which users can access to our services throught thier mobiles</p>
                </div>
            </div>

            <div className="container pt-5">
                <h1 className="primaryHeading text-center" style={{ color: 'rgb(191 28 28)' }}>Our Services</h1>
                <h1 className="primaryHeading text-center" style={{ color: 'black' }}>What We Offer</h1>
            </div>

            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-4 col-sm-12 px-md-5 px-3">
                        <div className={`d-flex flex-column align-items-center justify-content-center text-center gap-2 featureBoxContainer `}>
                            <img src={tulip1} alt="Fire1" className='img-fluid' />
                            <span className="servicesSpan">Finest Hotels</span>
                            <span>View Finest Quality of Hotels, thier price, spacing, rooms, staff and much more</span>
                            <button className="servicesButton" onClick={()=>{navigate('/Hotels')}}>View More</button>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 px-md-5 px-3">
                        <div className={`d-flex flex-column align-items-center justify-content-center text-center gap-2 featureBoxContainer `}>
                            <img src={institution} alt="Fire1" className='img-fluid' />
                            <span className="servicesSpan">Developed Institutions</span>
                            <span>We provide our users set of highly developed and trusted institutions</span>
                            <button className="servicesButton" onClick={()=>{navigate('/Institutions')}}>View More</button>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 px-md-5 px-3">
                        <div className={`d-flex flex-column align-items-center justify-content-center text-center gap-2 featureBoxContainer `}>
                            <img src={kfc1} alt="Fire1" className='img-fluid' />
                            <span className="servicesSpan">Restaurants</span>
                            <span>View Finest Quality of Restaurants, thier price, Menu, Quality stuff and much more</span>
                            <button onClick={()=>{navigate('/Restaurants')}} className="servicesButton">View More</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-5">
                <div className='d-flex align-items-center justify-content-between gap-3 pt-4'>
                    <h3 className="primaryHeading" style={{ color: 'rgb(191 28 28)' }}>Hotels</h3>
                    <Link className='fs-5 fw-bold ' style={{color:'#e32213'}} to="/Hotels">View All</Link>
                </div>
                <p className='smallpara ' style={{paddingRight:'15%'}}>Hotels are categorized depending upon location, number of rooms, types of rooms and other available facilities. One of the important facilities in hotels includes good reception and information counter. Today, modern western hotels are found in all big cities and at important tourist locations. otel rooms have everything you need for a pleasant stay: large comfortable beds covered with special bedspreads that get made by themselves, and bathrooms that are clean and shiny. The pictures on the wall are always properly aligned, and everything always functions perfectly.</p>
                <div className="container my-5">
                    <HomeHotelBox/>
                </div>
                <hr style={{color:'#e32213'}} />
            </div>

            <div className="container pt-5">
                <div className='d-flex align-items-center justify-content-between gap-3 pt-4'>
                    <h3 className="primaryHeading" style={{ color: 'rgb(191 28 28)' }}>Restaurents</h3>
                    <Link className='fs-5 fw-bold ' style={{color:'#e32213'}} to="/Restaurants">View All</Link>
                </div>
                <p className='smallpara ' style={{paddingRight:'15%'}}>The days of discovering restaurants as you pass by on the street are long gone. When choosing where to eat or drink, people now turn more quickly to Google and check your restaurant description and reviews. To help you rank better in Google with updated information about your restaurants, our website are giving you all restaurants deatsils at one place. Restaurants offer the best way to get a fantastic meal and spend some time relaxing. When it comes to presenting that meal, most people just want their food without dealing with any kind of fanfare that complicates everything</p>
                <div className="container my-5">
                    <HomeRestaurantBox/>
                </div>
                <hr style={{color:'#e32213'}} />
            </div>

            <div className="container pt-5">
                <div className='d-flex align-items-center justify-content-between gap-3 pt-4'>
                    <h3 className="primaryHeading" style={{ color: 'rgb(191 28 28)' }}>Institutions</h3>
                    <Link className='fs-5 fw-bold ' style={{color:'#e32213'}} to="/Institutions">View All</Link>
                </div>
                <p className='smallpara ' style={{paddingRight:'15%'}}>We believe that to be extraordinary, students need to be inspired by many experiences. Every day our students find countless opportunities to fully immerse themselves in academics, art, athletics, performance, and the pursuit of challenge, creativity, healthy competition, and balance. Our website offer some institutions of Jhelum for students to find and explore their passions.</p>
                <div className="container my-5">
                    <HomeInstitutionBox/>
                </div>
                <hr style={{color:'#e32213'}} />
            </div>

            <div className="container pt-5">
                <div className='d-flex align-items-center justify-content-between gap-3 pt-4'>
                    <h3 className="primaryHeading" style={{ color: 'rgb(191 28 28)' }}>Trip Places</h3>
                    <Link className='fs-5 fw-bold ' style={{color:'#e32213'}} to="/Places">View All</Link>
                </div>
                <p className='smallpara ' style={{paddingRight:'15%'}}>Jhelum is an ancient city, which has seen many eras of humankind. The City is developing to keep up with the modern world. Notable places to visit include the Khewra salt mine, 16th century’s Rohtas Fort and Mangla dam. If you're looking for an underrated travel destination with a rich cultural history, you might want to consider visiting Jhelum through our website.</p>
                <div className="container my-5">
                    <HomePlacesBox/>
                </div>
                <hr style={{color:'#e32213'}} />
            </div>

            <About/>
        </>
    )
}

export default Home