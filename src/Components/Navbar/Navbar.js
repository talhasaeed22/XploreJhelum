import React from 'react'
import logo from '../../Images/whitelogo.png'
import { useLocation, Link, useNavigate } from 'react-router-dom'

import './Navbar.css'
const Navbar = () => {
    let location = useLocation();
    let navigate = useNavigate();

    const signup = () => {
        let path = `/Signup`;
        navigate(path);
    }
    const login = () => {
        let path = `/Login`;
        navigate(path);
    }
    return (
        <>
            <nav className={`navbar navbar-expand-lg ${(location.pathname === '/Login' || location.pathname ==='/Signup') && 'd-none'}  `} style={{backgroundColor:location.pathname === '/' ? 'rgb(191 28 28)' :'white', borderBottom:'1px solid rgb(191 28 28)'}}>
                <div className="container">
                    
                    <div className='d-flex align-items-center'>
                        <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" /> 
                        <Link to='/' className='fs-4 fw-bold text-light' style={{textDecoration:'none'}}>plore Jhelum</Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <Link className={`nav-link ${location.pathname === '/' && 'active'} `} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link " aria-current="page" to="/">Hotels</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link " aria-current="page" to="/">Resturents</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link " aria-current="page" to="/">Institution</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link " aria-current="page" to="/">Places</Link>
                            </li>
                            
                            <li className="nav-item mx-3">
                                <Link className="nav-link " aria-current="page" to="/">Contact</Link>
                            </li>
                            

                        </ul>
                        <form className="d-flex gap-3" role="search">
                            <button onClick={signup} className="navBtn" type="submit">Signup</button>
                            <button onClick={login} className="navBtn" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar