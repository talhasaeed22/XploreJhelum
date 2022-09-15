import React from 'react'

const About = () => {
    return (
        <>
            <div className="container">
                <div className="pt-5 d-flex flex-column gap-3 w-75 ">
                    <h1 className='fw-bold fs-2'>What to Expect from <br /> <span style={{ color: 'rgb(191 28 28)' }}>Xplore Jhelum</span></h1>
                    <p className="smallpara">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab doloribus quia velit, voluptates sit nulla impedit quae magni nisi dolor at mollitia nesciunt facilis similique libero delectus, deserunt laudantium in animi maxime ea nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aliquam et veritatis cupiditate odit laborum neque, perspiciatis minima ipsa sunt consequuntur rerum ad nisi at corrupti inventore iure molestias aspernatur.</p>
                </div>
            </div>
            <div className="pt-5 text-center" style={{ padding: '0 25%' }}>
                <p style={{ fontSize: '14px' }}>Find out more about our Hotel Services by giving us a call on <span style={{ color: '#C32128', fontWeight: 'bold' }}>01689 493 641</span> or email <span style={{ color: '#C32128', fontWeight: 'bold' }}>info@gmail.com</span> today.</p>
            </div>
        </>
    )
}

export default About