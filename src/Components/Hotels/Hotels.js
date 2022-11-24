import React from 'react'
import './Hotels.css'
import hotel from '../../Images/bg.jpg'
import pool from '../../Images/Hotel Features/pool.png'
import drink from '../../Images/Hotel Features/drinks.png'
import breakfast from '../../Images/Hotel Features/Breakfast.png'
import tulip1 from '../../Images/Hotels/Tulip1.png'
import tulip2 from '../../Images/Hotels/Tulip2.png'
import tulip3 from '../../Images/Hotels/Tulip3.png'
import tulip4 from '../../Images/Hotels/Tulip4.png'
import tulip5 from '../../Images/Hotels/Tulip5.png'
import tulip6 from '../../Images/Hotels/Tulip.png'
import khan1 from '../../Images/Hotels/khan1.png'
import khan2 from '../../Images/Hotels/khan2.png'
import khan3 from '../../Images/Hotels/khan3.png'
import khan4 from '../../Images/Hotels/khan4.png'
import inn1 from '../../Images/Hotels/inn1.png'
import inn2 from '../../Images/Hotels/inn2.png'
import inn3 from '../../Images/Hotels/inn3.png'
import inn4 from '../../Images/Hotels/inn4.png'
import inn5 from '../../Images/Hotels/inn5.png'
import inn6 from '../../Images/Hotels/inn6.png'


import HotelsCard from './HotelsCard'
import About from '../About'
const Hotels = () => {
    return (
        <>
            <div style={{ backgroundImage: 'radial-gradient(at center center,rgb(241, 244, 255) 0%,white 83%)' }} className='py-5'>
                <div className="container text-center w-75" >
                    <h1 className='primaryHeading'>Finest Hotels</h1>
                    <p className="smallpara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ratione expedita accusamus est doloribus maxime esse voluptates atque non, cum, id vero eveniet autem sequi tempora accusantium quis perferendis mollitia?</p>
                </div>

                <div className="container">
                    <h1 className='primaryHeading' style={{ color: 'rgb(191 28 28)' }}>Luxury Hotels</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero earum suscipit ipsam ad Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti placeat esse inventore dignissimos consequatur! Libero alias temporibus est tempore impedit perspiciatis voluptatum id pariatur, vel odit nobis dolor corrupti sapiente.</p>
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-4 my-3 col-sm-6 col-12">
                                <HotelsCard image={[tulip1, tulip2, tulip3, tulip4, tulip5, tulip6]} name="Tulip Riverside Hotel" feature1={pool} feature2={drink} feature3={breakfast} />
                            </div>
                            <div className="col-md-4 my-3 col-sm-6 col-12">
                                <HotelsCard image={[khan1, khan2, khan3, khan4]} name="Hotel Khan Plaza" feature2={pool} feature1={drink} feature3={breakfast} />
                            </div>
                            <div className="col-md-4 my-3 col-sm-6 col-12">
                                <HotelsCard image={[inn1, inn2, inn3, inn4, inn5, inn6]} name="INN BOUTIQUE HOTEL" feature1={pool} feature3={drink} feature2={breakfast} />
                            </div>
                        </div>
                    </div>
                </div>

                <About/>
            </div>
        </>
    )
}

export default Hotels