import React from 'react'
import { useNavigate } from 'react-router-dom'

const RestaurantsCard = (props) => {
    const nevigate = useNavigate();
    const routeChange = () => {
        nevigate('/RestaurantDetails', { state: { name: props.name, image: props.image, map:props.map, contact:props.contact, desc:props.desc, link:props.link, RestaurantId:props.RestaurantId, feedback:props.feedback } })
    }
    return (
        <>
            <div className='hotelCard'>
                <div>
                    <img src={props.image[0]} alt='Hotel 1'  className="img-fluid" style={{height:'40vh', width:'100%'}} />
                </div>
                <div className='d-flex flex-column p-4'>
                    <h3 className='fw-bold'>{props.name}</h3>
                    <p className="smallpara">{props.desc.slice(0, 100)}...</p>
                    <h3 style={{ color: 'rgb(191 28 28)', fontWeight: "600" }}>Features</h3>
                    <div className='d-flex justify-content-around my-2'>
                        <img src={props.feature1} alt="pool" className="img-fluid" width={30} />
                        <img src={props.feature2} alt="pool" className="img-fluid" width={30} />
                        <img src={props.feature3} alt="pool" className="img-fluid" width={30} />
                    </div>
                    <div className='d-flex justify-content-between my-2' style={{ alignItems: 'flex-end' }}>
                        <button className="readmore " onClick={routeChange}>Read More</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default RestaurantsCard