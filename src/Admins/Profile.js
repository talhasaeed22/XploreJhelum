import React from 'react'
import SideBar from './SideBar'
import logo from '../Images/DSC_8402.JPG'

const Profile = () => {
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

                    <div className='d-flex flex-column justify-content-cetner align-items-center'>
                        <div className='' >
                            <img src={logo} alt="profilepic" className='img-fluid ' style={{ width: "200px", height: '200px', borderRadius: '50%' }} />

                        </div>
                        <span className='AdminPrimaryHeading text-black py-2'>{localStorage.getItem('name')}</span>
                    </div>

                    <div className='d-flex flex-colmn w-100 px-5 align-items-center justify-content-center'>
                        <div className='AdminHeader px-5 py-5 w-75 d-flex flex-column gap-3 '>
                            <span className="AdminPrimaryHeading" style={{textAlign:"left"}}>Your Profile</span>
                            <span style={{fontWeight:"bold"}}>Name:<span style={{fontWeight:'normal'}}> {localStorage.getItem('name')}</span></span> 
                            <span style={{fontWeight:"bold"}}>Email: <span style={{fontWeight:'normal'}}>{localStorage.getItem('email')}</span></span>
                            <span style={{textAlign:"justify"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat hic iste necessitatibus minima quos reiciendis! Fuga repudiandae.</span>
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

export default Profile