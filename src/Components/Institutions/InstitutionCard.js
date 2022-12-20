import React from 'react'
import { useNavigate } from 'react-router-dom'

const InstitutionCard = (props) => {
  const nevigate = useNavigate();
  const routeChange = () => {
    nevigate('/InstitutionDetails', { state: { name: props.name, image: props.image } })
  }
  return (
    <>
      <div className='hotelCard'>
        <div>
          <img src={props.image[0]} alt='Hotel 1' className="img-fluid" style={{ height: '40vh' }} />
        </div>
        <div className='d-flex flex-column p-4'>
          <h3 className='fw-bold'>{props.name}</h3>
          <p className="smallpara">Hotel Description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime iusto, cumque blanditiis fugiat neque dolorem ad</p>
          <h3 style={{ color: 'rgb(191 28 28)', fontWeight: "600" }}>Features</h3>
          <div className='d-flex justify-content-around my-2'>
            <img src={props.feature1} alt="pool" className="img-fluid" width={30} />
            <img src={props.feature2} alt="pool" className="img-fluid" width={30} />
            <img src={props.feature3} alt="pool" className="img-fluid" width={30} />
          </div>
          <div className='d-flex justify-content-between my-2' style={{ alignItems: 'flex-end' }}>
            <button className="readmore " onClick={routeChange}>Read More</button>
            <div className='d-flex flex-column' style={{ alignItems: 'flex-end' }}>
              <span style={{ fontSize: '14px' }}>Price from</span>
              <span style={{ color: 'rgb(191 28 28)', fontWeight: "600", fontSize: '19px' }}>PKR 49,114 </span>
              <span style={{ fontSize: '14px' }}>per night</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InstitutionCard
