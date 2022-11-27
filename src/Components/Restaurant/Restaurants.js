import React from 'react'
import pool from '../../Images/Hotel Features/pool.png'
import drink from '../../Images/Hotel Features/drinks.png'
import breakfast from '../../Images/Hotel Features/Breakfast.png'
import RestaurantsCard from './RestaurantsCard'
import kfc1 from '../../Images/Restaurants/kfc.png'
import kfc2 from '../../Images/Restaurants/kfc1.png'
import kfc3 from '../../Images/Restaurants/kfc2.png'
import kfc4 from '../../Images/Restaurants/kfc3.png'
import kfc5 from '../../Images/Restaurants/kfc4.png'
import kfc6 from '../../Images/Restaurants/kfc5.png'
import mc1 from '../../Images/Restaurants/mc1.png'
import mc2 from '../../Images/Restaurants/mc2.png'
import mc3 from '../../Images/Restaurants/mc3.png'
import mc4 from '../../Images/Restaurants/mc4.png'
import mc5 from '../../Images/Restaurants/mc5.png'
import mc6 from '../../Images/Restaurants/mc6.png'
import asian1 from '../../Images/Restaurants/asian.png'
import asian2 from '../../Images/Restaurants/asian1.png'
import asian3 from '../../Images/Restaurants/asian2.png'
import asian4 from '../../Images/Restaurants/asian3.png'
import asian5 from '../../Images/Restaurants/asian4.png'
import asian6 from '../../Images/Restaurants/asian5.png'
import chaye1 from '../../Images/Restaurants/chaye.png'
import chaye2 from '../../Images/Restaurants/chaye1.png'
import chaye3 from '../../Images/Restaurants/chaye2.png'
import chaye4 from '../../Images/Restaurants/chaye3.png'
import chaye5 from '../../Images/Restaurants/chaye4.png'
import china1 from '../../Images/Restaurants/china.png'
import china2 from '../../Images/Restaurants/china1.png'
import china3 from '../../Images/Restaurants/china2.png'
import china4 from '../../Images/Restaurants/china3.png'
import china5 from '../../Images/Restaurants/china4.png'
import china6 from '../../Images/Restaurants/china6.png'
import monarch1 from '../../Images/Restaurants/monarch.png'
import monarch2 from '../../Images/Restaurants/monarch1.png'
import monarch3 from '../../Images/Restaurants/monarch3.png'
import monarch4 from '../../Images/Restaurants/monarch4.png'
import monarch5 from '../../Images/Restaurants/monarch5.png'
import monarch6 from '../../Images/Restaurants/monarch6.png'


import About from '../About'

const Restaurants = () => {
  return (
    <div style={{ backgroundImage: 'radial-gradient(at center center,rgb(241, 244, 255) 0%,white 83%)' }} className='py-5'>
                <div className="container text-center w-75" >
                    <h1 className='primaryHeading'>Restaurants</h1>
                    <p className="smallpara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ratione expedita accusamus est doloribus maxime esse voluptates atque non, cum, id vero eveniet autem sequi tempora accusantium quis perferendis mollitia?</p>
                </div>

                <div className="container">
                    <h1 className='primaryHeading' style={{ color: 'rgb(191 28 28)' }}>5 Star</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero earum suscipit ipsam ad Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti placeat esse inventore dignissimos consequatur! Libero alias temporibus est tempore impedit perspiciatis voluptatum id pariatur, vel odit nobis dolor corrupti sapiente.</p>
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-4 my-3 col-sm-6 col-12">
                                <RestaurantsCard image={[kfc1, kfc2, kfc3, kfc4, kfc5, kfc6]} name="KFC" feature1={pool} feature2={drink} feature3={breakfast} />
                            </div>
                            <div className="col-md-4 my-3 col-sm-6 col-12">
                                <RestaurantsCard name="McDonald's" image={[mc1, mc2, mc3, mc4, mc5, mc6]} feature2={pool} feature1={drink} feature3={breakfast} />
                            </div>
                            <div className="col-md-4 my-3 col-sm-6 col-12">
                                <RestaurantsCard name="Chaaye Khana" image={[chaye1, chaye2, chaye3, chaye4, chaye5]} feature1={pool} feature3={drink} feature2={breakfast} />
                            </div>
                            <div className="col-md-4 my-3 col-sm-6 col-12">
                                <RestaurantsCard name="Monarch Lounge" image={[monarch1, monarch2, monarch3, monarch4, monarch5, monarch6]} feature1={pool} feature3={drink} feature2={breakfast} />
                            </div>
                            <div className="col-md-4 my-3 col-sm-6 col-12">
                                <RestaurantsCard name="China citi" image={[china1, china2,china3, china4, china5, china6]} feature1={pool} feature3={drink} feature2={breakfast} />
                            </div>
                            <div className="col-md-4 my-3 col-sm-6 col-12">
                                <RestaurantsCard name="Asian Cuisine Family Restaurant" image={[asian1, asian2, asian3, asian4, asian5, asian6]} feature1={pool} feature3={drink} feature2={breakfast} />
                            </div>
                        </div>
                    </div>
                </div>

                <About/>
            </div>
  )
}

export default Restaurants