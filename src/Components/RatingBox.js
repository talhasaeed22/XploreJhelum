import React from 'react'
import { useNavigate } from 'react-router-dom'

const RattingBox = (props) => {
    const nevigate = useNavigate();

    return (
        <>
            <div className='hotelCard'>
                <div>
                    <img src={props.image} alt='Hotel 1' className="img-fluid" style={{ height: '40vh' }} />
                </div>
                <div className='d-flex flex-column p-4'>
                    <h3 className='fw-bold'>{props.name}</h3>
                    <p className="smallpara">{props.description.slice(0, 200)}{props.description.length > 200 && '....'}</p>
                    {props.feature1 && <h3 style={{ color: 'rgb(191 28 28)', fontWeight: "600" }}>Features</h3>}
                    {props.feature1  && <div className='d-flex justify-content-around my-2'>
                        <img src={props.feature1} alt="pool" className="img-fluid" width={30} />
                        <img src={props.feature2} alt="pool" className="img-fluid" width={30} />
                        <img src={props.feature3} alt="pool" className="img-fluid" width={30} />
                    </div>}
                    <h3>Rating</h3>
                    <div className='d-flex gap-1 mt-1'>
                        {props.rating === 5 && <><i className="fa fa-star starrr" style={{color:'#fabd04'}} aria-hidden="true"></i>
                        <i className="fa fa-star starrr" style={{color:'#fabd04'}} aria-hidden="true"></i>
                        <i className="fa fa-star starrr" style={{color:'#fabd04'}} aria-hidden="true"></i>
                        <i className="fa fa-star starrr" style={{color:'#fabd04'}} aria-hidden="true"></i>
                        <i className="fa fa-star starrr" style={{color:'#fabd04'}} aria-hidden="true"></i></>}

                        {props.rating === 4 && <><i className="fa fa-star starrr" style={{color:'#fabd04'}} aria-hidden="true"></i>
                        <i className="fa fa-star starrr" style={{color:'#fabd04'}} aria-hidden="true"></i>
                        
                        <i className="fa fa-star starrr" style={{color:'#fabd04'}} aria-hidden="true"></i>
                        <i className="fa fa-star starrr" style={{color:'#fabd04'}} aria-hidden="true"></i></>}

                        {props.rating === 3 && <><i className="fa fa-star starrr" style={{color:'#fabd04'}} aria-hidden="true"></i>
                        <i className="fa fa-star starrr" style={{color:'#fabd04'}} aria-hidden="true"></i>
                        
                       
                        <i className="fa fa-star starrr" style={{color:'#fabd04'}} aria-hidden="true"></i></>}

                    </div>

                    {props.pernight && <div className='d-flex justify-content-between my-2' style={{ alignItems: 'flex-end' }}>
                        <div>

                        </div>
                        <div className='d-flex flex-column' style={{ alignItems: 'flex-end' }}>
                            <span style={{ fontSize: '14px' }}>Price from</span>
                            <span style={{ color: 'rgb(191 28 28)', fontWeight: "600", fontSize: '19px' }}>PKR {props.pernight} </span>
                            <span style={{ fontSize: '14px' }}>per night</span>
                        </div>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default RattingBox