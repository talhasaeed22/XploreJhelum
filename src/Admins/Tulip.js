import React from 'react'
import SideBar from './SideBar'
import logo from '../Images/DSC_8402.JPG'

const Tulip = () => {
    return (
        <>
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
                        <div className='w-50  AdminHeader pt-5'>
                            <div className='text-center d-flex flex-column'>
                                <span className='AdminPrimaryHeading '>{localStorage.getItem('hotel')}</span>
                                <span className='AdminPrimaryHeading ' style={{ color: 'MenuText', textDecoration: 'none' }}>Admin Page</span>
                            </div>
                            <div className='px-3 text-center py-4 '>
                                <span>Hi there, there are total <span style={{ color: "#01058A", fontWeight: 'bold' }}>5 new request</span> for booking the room</span>
                            </div>
                        </div>
                    </div>

                    <div className="container ">
                        <div className="row">
                            <div className="col-md-4 col-sm-12">
                                <div className='px-5 py-5 text-center'>
                                    <span className="AdminPrimaryHeading">Rooms Info:</span>
                                    <div className='AdminHomeBox gap-3 d-flex flex-column'>
                                        <span style={{ fontWeight: 'bold' }}>Overall Rooms Details</span>
                                        <div className='d-flex justify-content-between'><span>Total Rooms:</span> <span>110</span></div>
                                        <div className='d-flex justify-content-between'><span>Booked Rooms:</span> <span>110</span></div>
                                        <div className='d-flex justify-content-between'><span>Vacant Rooms:</span> <span>110</span></div>
                                        <div className='d-flex justify-content-between'><span>Total Rooms:</span> <span>110</span></div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className='px-5 py-5 text-center'>
                                    <span className="AdminPrimaryHeading">Requests Info:</span>
                                    <div className='AdminHomeBox gap-3 d-flex flex-column'>
                                        <span style={{ fontWeight: 'bold' }}>Overall Requests Details</span>
                                        <div className='d-flex justify-content-between'><span>Total Requests:</span> <span>110</span></div>
                                        <div className='d-flex justify-content-between'><span>New Requests:</span> <span>110</span></div>
                                        <div className='d-flex justify-content-between'><span>Accepted Requests:</span> <span>110</span></div>
                                        <div className='d-flex justify-content-between'><span>Rejected Requests:</span> <span>110</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className='px-5 py-5 text-center'>
                                    <span className="AdminPrimaryHeading">Hotel Info:</span>
                                    <div className='AdminHomeBox gap-3 d-flex flex-column'>
                                        <span style={{ fontWeight: 'bold' }}>Overall Rooms Details</span>
                                        <div className='d-flex justify-content-between'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus repellendus aliquam, est, esse dignissimos natus voluptas quibusdam harum quod vitae praesentium quo. </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-5 text-center" style={{ padding: '0 25%' }}>
                        <p style={{ fontSize: '14px' }}>In case of any query, resolve it immediately by giving us a call on <span style={{ color: '#C32128', fontWeight: 'bold' }}>01689 493 641</span> or email <span style={{ color: '#C32128', fontWeight: 'bold' }}>info@gmail.com</span> today.</p>
                    </div>
                </div>


            </div>



        </>
    )
}

export default Tulip