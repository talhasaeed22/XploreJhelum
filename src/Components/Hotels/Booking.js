import React, { useEffect, useState } from 'react'
import About from '../About'
import tulip1 from '../../Images/Hotels/Tulip1.png'
import khan1 from '../../Images/Hotels/khan1.png'
import inn1 from '../../Images/Hotels/inn1.png'
import mirpur1 from '../../Images/Hotels/mirpur.png'
import lotus1 from '../../Images/Hotels/lotus1.png'
import usman1 from '../../Images/Hotels/usman1.png'
import undrah1 from '../../Images/Hotels/undrah.png'


const Booking = () => {
  useEffect(() => {
    getRequests();
  }, [])
  const url = 'http://localhost:5000'

  const [data, setData] = useState([])
const [loadng, setLoadng] = useState(false)
  const getRequests = async () => {

    setLoadng(true)
    const response = await fetch(`${url}/api/hotel/getAllRequest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: 'alina@gmail.com' })
    });
    const json = await response.json();
    setData(json.requests)
    setLoadng(false)


  }
  return (
    <>
      <div className='container my-5'>
        <span className='fw-bold fs-2' style={{ color: 'rgb(191 28 28)' }}>Your Booking Details</span>
        {loadng ? <div>
          Loading
        </div> : data.length === 0 ? <div style={{flex:'1', alignItems:"center", justifyContent:'center', margin:'20px 0px'}}>
          No Booking
        </div> :  data.map((item ,index)=>{
          return <div key={index} className='p-5 d-flex justify-content-between gap-5 mt-3' style={{ backgroundColor: 'white', borderTop: '1px solid lightgray', borderRadius: '20px', boxShadow: '0px 5px 7px 0px rgb(114 114 114 / 25%)' }}>

          <div className='d-flex justify-content-between w-50 pr-5'>
            <div className='d-flex flex-column gap-4'>
              <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'rgb(191 28 28' }}>Hotel Name: </span>
              <span style={{ fontSize: '17px', fontWeight: 'nprmal', color: 'black' }}>{item.hotel}</span>
              <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'rgb(191 28 28' }}>Room No: </span>
              <span style={{ fontSize: '17px', fontWeight: 'nprmal', color: 'black' }}>{item.roomNumber}</span>
              <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'rgb(191 28 28' }}>Booking Date: </span>
              <span style={{ fontSize: '17px', fontWeight: 'nprmal', color: 'black' }}>12/23/2222</span>
              <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'rgb(191 28 28' }}>Stay: </span>
              <span style={{ fontSize: '17px', fontWeight: 'nprmal', color: 'black' }}>{item.days} Days</span>
              <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'rgb(191 28 28' }}>Checkout Date: </span>
              <span style={{ fontSize: '17px', fontWeight: 'nprmal', color: 'black' }}>23/23/2303</span>
            </div>
            <div className='d-flex flex-column gap-4'>
              <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'rgb(191 28 28' }}>Satus:  </span>
              <span style={{ fontSize: '17px', fontWeight: 'nprmal', color: 'black' }}> {item.status} </span>
            </div>
          </div>

          <div>
            <img style={{borderRadius:"20px"}} src={ item.hotel === 'Tulip Riverside Hotel' ? tulip1 : item.hotel === 'Hotel Khan Plaza' ? khan1 : item.hotel === 'JHELUM INN BOUTIQUE HOTEL' ? inn1 : item.hotel === 'Mirpur AJK Serviced Villa' ? mirpur1 : item.hotel === 'Lotus Inn' ? lotus1 : item.hotel === 'Usman Lodges Ajk' ? usman1 : undrah1 } alt="tulip" className='img-fluid' />
          </div>

        </div>
        })  }
      </div>
      <About />
    </>
  )
}

export default Booking
