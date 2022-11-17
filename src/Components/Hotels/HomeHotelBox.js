import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hotel from '../../Images/bg.jpg'
import tulip1 from '../../Images/Hotels/Tulip1.png'
import khan1 from '../../Images/Hotels/khan1.png'
import inn1 from '../../Images/Hotels/inn1.png'
import React, { Component } from "react";
import Slider from "react-slick";

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style,  background: "black", display:'block' }}
//             onClick={onClick}
//         />
//     );
// }

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "black" }}
//             onClick={onClick}
//         />
//     );
// }

export default class CustomArrows extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            speed: 3500,
            autoplay: true,
            autoplaySpeed: 500,
            slidesToScroll: 1,
            cssEase: "linear"
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="px-2">
                        <h3 className="text-center">Tulip Riverside Hotel</h3>
                        <img src={tulip1} className="d-block w-100 img-fluid" alt="tulip" />
                        <p className="py-2 px-2 text-center fw-bold">Opposite Masjid Bilal, Model Colony Shandar Chowk, Jhelum, 49600 Jhelum, Pakistan</p>
                    </div>
                    <div className="px-2">
                        <h3 className="text-center">Hotel Khan Plaza</h3>
                        <img src={khan1} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">Opposite Masjid Bilal, Model Colony Shandar Chowk, Jhelum, 49600 Jhelum, Pakistan</p>

                    </div>
                    <div className="px-2">
                        <h3 className="text-center">JHELUM INN BOUTIQUE HOTEL</h3>
                        <img src={inn1} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">Gt Road Jhelum Cantt, Jhelum, Pakistan</p>

                    </div>
                    <div className="px-2">
                        <h3 className="text-center">Hotel Name</h3>
                        <img src={hotel} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias suscipit, corrupti placeat odio qui nobis </p>

                    </div>
                    <div className="px-2">
                        <h3 className="text-center">Hotel Name</h3>
                        <img src={hotel} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">Hotel Description</p>

                    </div>
                    <div className="px-2">
                        <h3 className="text-center">Hotel Name</h3>
                        <img src={hotel} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">Hotel Description</p>
                    </div>
                </Slider>
            </div>
        );
    }
}

// import React from 'react'

// const HomeHotelBox = () => {
//     return (
//         <>
//            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
//                         <div className="carousel-indicators">
//                             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//                             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
//                             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
//                         </div>
//                         <div className="carousel-inner">
//                             <div className="carousel-item active">
//                                 <img src={hotel} className="d-block w-100 img-fluid" alt="..." style={{height:'500px'}}/>
//                                 <div className="carousel-caption d-none d-md-block">
//                                     <h5>Hotel Title 1</h5>
//                                     <p>Short Description of Hotel</p>
//                                     <button className="servicesButton">See Details</button>
//                                 </div>
//                             </div>
//                             <div className="carousel-item">
//                                 <img src={hotel} className="d-block w-100" alt="..." style={{height:'500px'}}/>
//                                 <div className="carousel-caption d-none d-md-block">
//                                     <h5>Second Hotel Title</h5>
//                                     <p>Short Description of Hotel</p>
//                                     <button className="servicesButton">See Details</button>
//                                 </div>
//                             </div>
//                             <div className="carousel-item">
//                                 <img src={hotel} className="d-block w-100" alt="..." style={{height:'500px'}}/>
//                                 <div className="carousel-caption d-none d-md-block">
//                                     <h5>Third hotel title</h5>
//                                     <p>Short Description of Hotel</p>
//                                     <button className="servicesButton">See Details</button>
//                                 </div>
//                             </div>
//                         </div>
//                         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//                             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                             <span className="visually-hidden">Previous</span>
//                         </button>
//                         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//                             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                             <span className="visually-hidden">Next</span>
//                         </button>
//                     </div>
//         </>
//     )
// }

// export default HomeHotelBox