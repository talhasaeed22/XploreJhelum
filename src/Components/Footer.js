import React from 'react'
import './Styles/Footer.css'
import { useNavigate, useLocation } from 'react-router-dom'

const Footer = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const signup = () => {
        let path = `/Signup`;
        navigate(path);
    }
    const login = () => {
        let path = `/Login`;
        navigate(path);
    }
    const handleLogout = () => {
        localStorage.setItem('token', '');
        localStorage.setItem('name', '');
        localStorage.removeItem('email');
        navigate('/Login');
    }
    return (
        <>
            <div className={`contianer-fluid FooterMainContainer ${(location.pathname === '/Login' || location.pathname === '/Request' || location.pathname === '/Guests' || location.pathname==='/Profile' || location.pathname ==='/Signup' || location.pathname ==='/Admin' ) && 'd-none'} `}>
                <div className="container innerContainer">
                    <div className='left'>
                        <div className="col">
                            <span className="heading">XploreJhelum</span>
                            <span className="items" onClick={()=>{navigate('/')}} >Home</span>
                            <span className="items">Services</span>
                            <span className="items">Contact</span>
                            <span className="items">About</span>
                        </div>
                        <div className="col">
                            <span className="heading">Services</span>
                            <span className="items" onClick={()=>{navigate('/Hotels')}} >Hotels</span>
                            <span className="items" onClick={()=>{navigate('/Restaurants')}} >Resturents</span>
                            <span className="items"  onClick={()=>{navigate('/Institutions')}} >Institutions</span>
                            <span className="items"  onClick={()=>{navigate('/Places')}} >Places</span>

                        </div>
                        <div className="col">
                            <span className="heading">Register</span>
                            <span className="items" onClick={login}>Login</span>
                            <span className="items" onClick={signup}>Signup</span>
                            

                        </div>
                    </div>

                    <div className="right">
                        <div className="spanheading">
                            <span>It&apos;s safe. It&apos;s easy.</span>
                            <span>It&apos;s <span style={{color:'#bfbfbf'}}>XploreJhelum</span></span>
                        

                        {!localStorage.getItem('token') ? <button onClick={login} className='servicesButton' style={{ fontSize: '16px', backgroundColor:'black', borderRadius:'7px' }}>Login To Continue<i className="fa fa-long-arrow-right px-1" aria-hidden="true"></i></button>: <label className={location.pathname === '/' ? 'text-light' : 'text-dark'} style={{ fontSize: '1.2rem', fontWeight:'bold' }}> Hello, {localStorage.getItem('name')} <button style={{ padding: '9px 19px', marginLeft:'12px' }} onClick={handleLogout} className={location.pathname === '/' ? 'navBtn' : 'whiteButton'} id="">Logout</button> </label>}
                        </div>
                        <div className="icons">
                            <i className="fa fa-facebook-square" aria-hidden="true"></i>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div className="container d-flex justify-content-between pb-4" style={{ padding: '0% 3%' }}>
                    <div className="license">
                        <span><span className='poinerSpan'>License Agreement</span> | <span className='poinerSpan'>Terms of Service</span> | <span className="poinerSpan"> Privacy Policy</span> | <span className='poinerSpan'>Cookies Policy</span> | <span className='poinerSpan'> Disclaimer</span></span>
                    </div>
                    <div className="license">
                        <span>All Rights Reserved © All Rights Reserved Web Dev Group Ltd. Liability Co.</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer