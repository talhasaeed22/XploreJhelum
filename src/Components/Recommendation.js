import React from 'react'
import pool from '../Images/Hotel Features/pool.png'
import drink from '../Images/Hotel Features/drinks.png'
import RattingBox from './RatingBox'
import breakfast from '../Images/Hotel Features/Breakfast.png'
import khan1 from '../Images/Hotels/khan1.png'
import lotus1 from '../Images/Hotels/lotus1.png'
import undrah1 from '../Images/Hotels/undrah.png'
import kfc1 from '../Images/Restaurants/kfc1.png'
import mc1 from '../Images/Restaurants/mc1.png'
import asian1 from '../Images/Restaurants/asian.png'
import salt1 from '../Images/Places/salt1.jpg'
import rohtas1 from '../Images/Places/rohtas1.jpg'
import park1 from '../Images/Places/park1.jpg'
import cadet1 from '../Images/Institutions/cadet1.jpg'
import jinnah1 from '../Images/Institutions/jinnah1.jpg'
import govt1 from '../Images/Institutions/govt1.jpg'

const Recommendations = () => {
    return (
        <>
            <div className='' style={{ margin: '25px' }}>
                <h1 className='primaryHeading' style={{color:'rgb(191, 28, 28)'}}>Recommendation</h1>

                <div className='my-5 container'>
                    <h3>Hotels</h3>
                    <div className="row" >
                        <div className="col-md-4 my-3 col-sm-6 col-12">
                            <RattingBox pernight={'4,500'} description={'Hotel Khan Plaza is situated in Jhelum, within 800 m of Jhelum '} image={khan1} name={'Hotel Khan Plaza'} feature1={pool} feature2={drink} rating={5} feature3={breakfast} />
                        </div>
                        <div className="col-md-4 my-3 col-sm-6 col-12">
                            <RattingBox pernight={'20,000'} description={'We are pleased to inform you that we have opened a Guest House by the name of “Lotus Inn”. '} image={lotus1} name={'Lotus Inn'} feature1={pool} rating={4} feature2={drink} feature3={breakfast} />
                        </div>
                        <div className="col-md-4 my-3 col-sm-6 col-12">
                            <RattingBox pernight={'20,000'} description={'Set 2.8 km from Rachiāl, Undrah Inn Hotel offers rooms with air conditioning in Pothi. '} image={undrah1} name={'Undrah Inn Hotel'} feature1={pool} rating={3} feature2={drink} feature3={breakfast} />
                        </div>
                    </div>
                </div>

                <div className='my-5 container'>
                    <h3>Restaurants</h3>
                    <div className="row">
                        <div className="col-md-4 my-3 col-sm-6 col-12">
                            <RattingBox rating={5} description={'KFC is an American fast food restaurant chain headquartered in Louisville,'} image={kfc1} name={'KFC'} />
                        </div>
                        <div className="col-md-4 my-3 col-sm-6 col-12">
                            <RattingBox rating={4} description={'We are pleased to inform you that we have opened a Guest House by the name of “McDonalds”. '} image={mc1} name={"McDonald's"}  />
                        </div>
                        <div className="col-md-4 my-3 col-sm-6 col-12">
                            <RattingBox rating={3} description={'Asian Cuisine Family Restaurant · Page · Local business · G T Road Rathian'} image={asian1} name={'Asian Cuisine Family'} />
                        </div>
                    </div>
                </div>

                <div className='my-5 container'>
                    <h3>Trip Places</h3>
                    <div className="row">
                        <div className="col-md-4 my-3 col-sm-6 col-12">
                            <RattingBox rating={5} description={'It is one of the most popular day trip destinations near Islamabad.'} image={salt1} name={'KHEWRA SALT MINE'}  />
                        </div>
                        <div className="col-md-4 my-3 col-sm-6 col-12">
                            <RattingBox rating={4} description={'Rohtas Fort or Rotas Ghur (Punjabi, Urdu: قلعہ روہتاس; Qila Rohtas) is a 16th-century. '} image={rohtas1} name={'ROHTAS FORT'}  />
                        </div>
                        <div className="col-md-4 my-3 col-sm-6 col-12">
                            <RattingBox rating={3} description={'dventura Park located at Jhelum, Pakistan If you require further information, visit website'} image={park1} name={'Adventura Park'}  />
                        </div>
                    </div>
                </div>

                <div className='my-5 container'>
                    <h3>Institutions</h3>
                    <div className="row">
                        <div className="col-md-4 my-3 col-sm-6 col-12">
                            <RattingBox rating={5} description={'Cadet College Jhelum is a military prep school in Jhelum, Pakistan, about 4 km from the city of Dina.'} image={cadet1} name={'Cadet College, Jhelum'} />
                        </div>
                        <div className="col-md-4 my-3 col-sm-6 col-12">
                            <RattingBox rating={4} description={'Jinnah Law College (JLC) Jhelum was established under “Rahimia Educational Company (Pvt.) Ltd.)'} image={jinnah1} name={'Jinnah Law College, Jhelum'}  />
                        </div>
                        <div className="col-md-4 my-3 col-sm-6 col-12">
                            <RattingBox rating={3} description={'Govt Institute of Commerce Jhelum is established with the mission to provide the commerce '} image={govt1} name={'Govt College of Commerce'}  />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recommendations
