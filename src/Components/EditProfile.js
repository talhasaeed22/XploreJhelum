import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EditProfile = () => {
  const [newData, setNewData] = useState({name:"", password:''})
  const onChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value })
}
let navigate = useNavigate();

const handleSubmit = ()=>{
  localStorage.setItem('name', newData.name);
  localStorage.setItem('pass', newData.password);
  navigate('/')
}
  return (
    <>
      <div className="" style={{ height: '90vh', display: 'flex', alignItems: 'center', }}>
        <div className="container d-flex flex-row" style={{ backgroundColor: '#e32213', height: "80vh", borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
          <div className="w-25 d-flex flex-column" style={{ alignItems: "center", color:'white', paddingRight:'12%' }}>
            <i className="fa fa-user " style={{ fontSize: '50px', cursor: 'pointer' }} aria-hidden="true"></i>
            <h1 style={{ textAlign: "center" }}>Profile Management</h1>
          </div>
          <div className="w-50 d-flex flex-column" style={{ alignItems: "center", color:'black', backgroundColor:'white', width:'50%', padding:'55px', borderRadius:'10px' }}>
            <label htmlFor="info" style={{fontSize:'20px', fontWeight:'bold', color:'black'}}>Please Enter new Information</label>
            <label htmlFor="name">Enter Name</label>
            <input onChange={onChange} className='loginInp' type="text" name="name" id="name" placeholder='e.g John Doe' />
            <label htmlFor="name">Enter Password</label>
            <input onChange={onChange} className='loginInp' type="text" name="password" id="password" placeholder='new password ******' />
            <button onClick={handleSubmit} className='loginBtn my-4'>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProfile
