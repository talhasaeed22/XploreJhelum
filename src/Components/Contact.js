import React, { useRef, useState, useContext } from 'react'
import './Contact.css'
const Contact = () => {

  return (
    <div id='ContactMe' className='c-parent' style={{ display: 'flex', marginTop: '4rem 0rem' }}>
      <div className="c-left" style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: '1rem' }}>
        <span className='p-heading' style={{ color: '#242D49', fontWeight: 'bold', fontSize:30 }}>Get in Touch</span>
        <span className='p-heading' style={{ color: '#FCA61F', fontWeight: 'bold', fontSize:30 }}>Send Feedback</span>
        <div id='icon-gap' style={{ display: 'flex', marginTop: "33px" }}>
          <a id='c-icons' rel="noreferrer" target='_blank' className=" text-reset">
            <i style={{ color: '#FCA61F', cursor:'pointer' }} className="fab fa-facebook-f"></i>
          </a>
          <a id='c-icons' rel="noreferrer" target='_blank' className="me-4 text-reset">
            <i style={{ color: '#FCA61F', cursor:'pointer' }} className="fab fa-twitter"></i>
          </a>
          <a id='c-icons' rel="noreferrer" target='_blank' className=" text-reset">
            <i style={{ color: '#FCA61F', cursor:'pointer' }} className="fab fa-instagram"></i>
          </a>
          <a id='c-icons' rel="noreferrer" target='_blank'  className=" text-reset">
            <i style={{ color: '#FCA61F', cursor:'pointer' }} className="fab fa-linkedin"></i>
          </a>
          <a id='c-icons' rel="noreferrer" target='_blank' className=" text-reset">
            <i style={{ color: '#FCA61F', cursor:'pointer' }} className="fab fa-github"></i>
          </a>
        </div>
      </div>

      <div className="c-right" style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
        <form className="form" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: "center" }}>
          <input style={{ border: '2px solid #FCA61F', borderRadius: '8px' }} className='inp' type="text" name="user_name" id="name"
            placeholder='Name' />
          <input style={{ border: '2px solid #FCA61F', borderRadius: '8px' }} className='inp' type="email" name="user_email" id="email" placeholder='Email' />
          <textarea style={{ border: '2px solid #FCA61F', borderRadius: '8px' }} className='inp' type="text" name="message" id="name" placeholder='Message' />
          <span onClick={()=>{alert('Feedback Send')}} style={{ color: '#FCA61F', fontWeight:'bold', border:'2px solid #242D49', padding:'5px 20px', borderRadius:"7px", cursor:'pointer' }}>Send</span>
        </form>
      </div>
    </div>
  )
}

export default Contact