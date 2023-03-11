import React from 'react'
import { useNavigate } from 'react-router-dom'

const InstitutionCard = (props) => {
  const nevigate = useNavigate();
  const routeChange = () => {
    nevigate('/InstitutionDetails', { state: { name: props.name, image: props.image, contact:props.contact, email:props.email, desc:props.desc, feedback:props.feedback, InstitutionId:props.InstitutionId } })
  }
  return (
    <>
      <div className='hotelCard'>
        <div>
          <img src={props.image[0]} alt='Hotel 1' className="img-fluid" style={{ height: '40vh' }} />
        </div>
        <div className='d-flex flex-column p-4'>
          <h3 className='fw-bold'>{props.name}</h3>
          <p className="smallpara">{props.desc.slice(0, 250)}...</p>
          
          <div className='d-flex justify-content-between my-2' style={{ alignItems: 'flex-end' }}>
            <button className="readmore " onClick={routeChange}>Read More</button>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default InstitutionCard
