import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../../Images/logo.png'
import './Auth.css'
import bg from '../../Images/blurbg.jpg'
import lowerbg from '../../Images/bg.jpg'

const SIgnup = () => {
    let nevigate = useNavigate();
    const [signupCred, setSignupCred] = useState({name:"", email:"", password:""});
    const url = 'http://localhost:5000';
    const handleSignup = async (e)=>{
        e.preventDefault();
        const response = await fetch(`${url}/api/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name:signupCred.name,email:signupCred.email, password:signupCred.password, age:signupCred.age, gender:signupCred.gender})
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
            //SAVE THE AUTH TOKEN AND REDIRECT
            localStorage.setItem('token', json.token);
            alert("Signed Up");
            nevigate('/')
        }else{
            alert("Invalid Credintials");
        }
    }
    const onChange = (e) => {
        setSignupCred({ ...signupCred, [e.target.name]: e.target.value })
    }

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
                    <span className='loginMainHead'> <span style={{ cursor: 'pointer', color: location.pathname === '/Login' ? '#e41f1f' : 'black' }} onClick={login}>Login</span> / <span style={{ cursor: 'pointer', color: location.pathname === '/Signup' ? '#e41f1f' : 'black' }} onClick={signup}>Signup</span> / <span style={{ cursor: 'pointer' }} onClick={() => { navigate('/') }}>Home</span>  </span>
                </div>

                <div className='loginForm d-flex flex-column gap-3 '>
                    <div className='d-flex flex-column'>
                        <label htmlFor="name">Name</label>
                        <input value={signupCred.name} onChange={onChange} className='loginInp' type="text" name="name" id="name" placeholder='Enter your name' />
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="email">Email Address</label>
                        <input value={signupCred.email} onChange={onChange} className='loginInp' type="email" name="email" id="email" placeholder='abc@example.com' />
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="password">Password</label>
                        <input value={signupCred.password} onChange={onChange} className='loginInp' type="password" name="password" id="password" placeholder='******' />
                    </div>
                    <div className='mx-auto my-4'>
                        <button onClick={handleSignup} className='loginBtn'>Signup</button>
                    </div>
                    <div>
                        <span className='fw-bold'>Already have an account? <span style={{ textDecoration: 'underline', color: '#e41f1f', cursor: 'pointer' }} onClick={login}>Login</span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SIgnup