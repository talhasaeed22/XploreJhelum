import React, { useEffect } from 'react'
import SideBar from './SideBar'
import logo from '../Images/DSC_8402.JPG'
import RequestTable from './Table'
import { useState } from 'react'
const Requests = () => {

  const [updated, setUpdated] = useState(false)
  useEffect(() => {
    getRequests();
  }, [updated])

  const url = 'http://localhost:5000'

  const [data, setData] = useState([])


  const getRequests = async () => {

   
    const response = await fetch(`${url}/api/hotel/getrequest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ hotel: localStorage.getItem('hotel')})
    });
    const json = await response.json();

    setData(json.requests)
    
  }
  return (
    <div className='d-flex' >
      <div style={{ width: '280px' }}>
        <SideBar />
      </div>
      <div className='d-flex flex-column w-100'>
        <div className='d-flex justify-content-between w-100 px-5 align-items-center'>
          <div className='d-flex flex-column'>
            <span className='AdminTitle'>Hello, {localStorage.getItem('name')}</span>
            <span className='AdminGreating'>Welcome back, nice to see you again</span>
          </div>
          <div className='profileImg'>
            <img src={logo} alt="Logo" className='img-fluid' />
          </div>
        </div>

        <div className='d-flex flex-colmn w-100 px-5 align-items-center justify-content-center'>
          <div className='AdminHeader px-5 py-5 w-100 d-flex flex-column gap-3 '>
            <span className="AdminPrimaryHeading" style={{ textAlign: "center" }}>Your Booking Requests</span>
            <RequestTable data={data} setUpdated={setUpdated} updated={updated} />
          </div>
        </div>


        <div className="pt-5 text-center" style={{ padding: '0 25%' }}>
          <p style={{ fontSize: '14px' }}>In case of any query, resolve it immediately by giving us a call on <span style={{ color: '#C32128', fontWeight: 'bold' }}>01689 493 641</span> or email <span style={{ color: '#C32128', fontWeight: 'bold' }}>info@gmail.com</span> today.</p>
        </div>
      </div>


    </div>
  )
}

export default Requests