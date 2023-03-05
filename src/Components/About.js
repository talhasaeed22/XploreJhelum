import React from 'react'

const About = () => {
    return (
        <>
            <div className="container">
                <div className="pt-5 d-flex flex-column gap-3 w-75 ">
                    <h1 className='fw-bold fs-2'>What to Expect from <br /> <span style={{ color: 'rgb(191 28 28)' }}>Xplore Jhelum</span></h1>
                    <p className="smallpara">In today's users have high expectations of the websites they visit, though the chances are that you will have much of this already in place. The first thing that users expect from Xplore Jhelum website that</p>
                </div>
                <div className='d-flex flex-column gap-1'>
                    <div style={{display:'flex', flexDirection:'row', gap:'12px',}}>
                        <i className="fa fa-check mt-1" style={{color:'rgb(191 28 28)'}} aria-hidden="true"></i>
                        <p style={{margin:'0px', color:'gray'}}>Our website satisfies user intent and has a clear goal.</p>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', gap:'12px',}}>
                        <i className="fa fa-check mt-1" style={{color:'rgb(191 28 28)'}} aria-hidden="true"></i>
                        <p style={{margin:'0px', color:'gray'}}>Our website is trustworthy, safe and secure.</p>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', gap:'12px',}}>
                        <i className="fa fa-check mt-1" style={{color:'rgb(191 28 28)'}} aria-hidden="true"></i>
                        <p style={{margin:'0px', color:'gray'}}>Our site has awesome, user-centered content.</p>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', gap:'12px',}}>
                        <i className="fa fa-check mt-1" style={{color:'rgb(191 28 28)'}} aria-hidden="true"></i>
                        <p style={{margin:'0px', color:'gray'}}>Our site is mobile-friendly.</p>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', gap:'12px',}}>
                        <i className="fa fa-check mt-1" style={{color:'rgb(191 28 28)'}} aria-hidden="true"></i>
                        <p style={{margin:'0px', color:'gray'}}>Our website has a great design.</p>
                    </div>
                </div>
            </div>
            <div className="pt-5 text-center" style={{ padding: '0 25%' }}>
                <p style={{ fontSize: '14px' }}>Find out more about our Hotel Services by giving us a call on <span style={{ color: '#C32128', fontWeight: 'bold' }}>01689 493 641</span> or email <span style={{ color: '#C32128', fontWeight: 'bold' }}>info@gmail.com</span> today.</p>
            </div>
        </>
    )
}

export default About