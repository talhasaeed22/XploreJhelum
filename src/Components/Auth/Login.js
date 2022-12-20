import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../../Images/logo.png'
import './Auth.css'
import bg from '../../Images/blurbg.jpg'
import lowerbg from '../../Images/bg.jpg'
import Alert from '../Models/Alert'

const Login = () => {

    const [error, setError] = useState(false)
    const [message1, setMessage1] = useState('');
    const [message2, setMessage2] = useState('')

    let location = useLocation();
    let navigate = useNavigate();


    const url = 'http://localhost:5000';
    const [loginCred, setLoginCred] = useState({ email: '', password: '' })

    const handleLogin = async (e) => {
        if (loginCred.password.length < 5 || loginCred.email.length === 0) {
            setError(true);
            setMessage1('Warning');
            setMessage2('please Enter Valid Email and Password')

            e.preventDefault();
        } else {

            if (loginCred.email === 'adminTulip@gmail.com' && loginCred.password === 'Admin123') {
                const response = await fetch(`${url}/api/auth/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: 'adminTulip@gmail.com', password: 'Admin123' })
                });
                const json = await response.json();
                console.log(json)
                localStorage.setItem('hotel', "Tulip Riverside Hotel");
                localStorage.setItem('token', json.token);
                localStorage.setItem('name', json.name);
                localStorage.setItem('email', json.email);
                setError(true);
                setMessage1('Success');
                setMessage2('Admin Login Successfully')

                navigate('/')
            } else {
                e.preventDefault();
                const response = await fetch(`${url}/api/auth/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: loginCred.email, password: loginCred.password })
                });
                const json = await response.json();

                if (json.success) {
                    //SAVE THE AUTH TOKEN AND REDIRECT
                    localStorage.setItem('token', json.token);
                    localStorage.setItem('name', json.name);
                    localStorage.setItem('email', loginCred.email);
                    setError(true);
                    setMessage1('Success');
                    setMessage2('Login Success')

                    navigate('/')
                } else {
                    setError(true);
                    setMessage1('Error');
                    setMessage2('Invalid Credintials')

                }
            }

        }
    }
    const onChange = (e) => {
        setLoginCred({ ...loginCred, [e.target.name]: e.target.value })
    }


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
            <div className=" LoginContainer d-flex" style={{ backgroundImage: `url(${bg})` }}>
                <div className='LeftLoginContainer gap-5' style={{ backgroundImage: `url(${lowerbg})` }}>
                    <div className="Lupper ">
                        <div className="logo">
                            <img src={logo} alt="logo" className='img-fluid' />
                        </div>

                        <div className='d-flex flex-column'>
                            <span className='fs-1 fw-bold'>Welcome</span>
                            <span style={{ fontSize: '18px', fontWeight: '600' }}>We recommend you to login to our app for better experience</span>
                        </div>

                    </div>
                    <div className="Llower d-flex flex-column fw-bold">
                        <div className='d-flex align-items-center gap-2'>
                            <i className="fa fa-check-circle-o" aria-hidden="true"></i>
                            <span>Explore whole Jhelum places hotels and many more</span>
                        </div>
                        <div className='d-flex align-items-center gap-2'>
                            <i className="fa fa-check-circle-o" aria-hidden="true"></i>
                            <span>All your needs at one place</span>
                        </div>
                        <div className='d-flex align-items-center gap-2'>
                            <i className="fa fa-check-circle-o" aria-hidden="true"></i>
                            <span>We provide secure platform</span>
                        </div>
                    </div>
                </div>
                <div className="RightLoginContainer">
                    <div className='my-4'>
                        <span className='loginMainHead'> <span style={{ cursor: 'pointer', color: location.pathname === '/Login' ? '#e41f1f' : 'black' }} onClick={login}>Login</span> / <span style={{ cursor: 'pointer', color: location.pathname === '/Signup' ? '#e41f1f' : 'black' }} onClick={signup}>Signup</span> / <span style={{ cursor: 'pointer', color: location.pathname === '/Signup' ? '#e41f1f' : 'black' }} onClick={() => { navigate('/') }}>Home</span>  </span>
                    </div>

                    <div className='loginForm d-flex flex-column gap-3 '>
                        <div className='d-flex flex-column'>
                            <label htmlFor="email">Email Address</label>
                            <input onChange={onChange} className='loginInp' type="email" name="email" id="email" placeholder='abc@example.com' />
                        </div>
                        <div className='d-flex flex-column'>
                            <label htmlFor="password">Password</label>
                            <input onChange={onChange} className='loginInp' type="password" name="password" id="password" placeholder='******' />
                        </div>
                        <div className='mx-auto my-4'>
                            <button onClick={handleLogin} className='loginBtn'>Login</button>
                        </div>
                        <div>
                            <span className='fw-bold'>Don't have an account? <span style={{ textDecoration: 'underline', color: '#e41f1f', cursor: 'pointer' }} onClick={signup}>Signup</span></span>
                        </div>
                        {/* <div>
                            <span className=' text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem perspiciatis obcaecati illum. Quos unde, itaque possimus.</span>
                        </div> */}
                    </div>
                </div>
            </div>
            {error && <Alert message1={message1} message2={message2} setError={setError} />}
        </>
    )
}

export default Login