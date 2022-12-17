import React from 'react'
import './Sidebar.css'
import logo from '../Images/Adminlogo.png'
import { Link } from 'react-router-dom'
const SideBar = () => {
    return (
        <nav className='sidenav '>
            <ul>
                <li>
                    <Link to="/" className='sidelogo'>
                        <img src={logo} alt="Logo" />
                        <span className='side-nav-item text-white'>plore Jhelum</span>
                    </Link>
                </li>

            </ul>

            <ul className='lower'>
                <li>
                    <Link to="/" className='Link sideactive'>
                        <i className="fa sidefa fa-home" aria-hidden="true"></i>
                        <span className='side-nav-item'>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className='Link'>
                        <i className="fa sidefa fa-user" aria-hidden="true"></i>
                        <span className='side-nav-item'>Profile</span>
                    </Link>
                </li>

                <li>
                    <Link to="/" className='Link'>
                        <i className="fa sidefa fa-th-list" aria-hidden="true"></i>
                        <span className='side-nav-item'>Requests</span>
                    </Link>
                </li>

                <li>
                    <Link to="/" className='Link'>
                        <i className="fa sidefa fa-cog" aria-hidden="true"></i>
                        <span className='side-nav-item'>Settings</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className='side-logout Link'>
                        <i className="fa sidefa fa-sign-out" aria-hidden="true"></i>
                        <span className='side-nav-item'>Logout</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default SideBar