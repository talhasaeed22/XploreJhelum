import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jinnah1 from '../../Images/Institutions/jinnah1.jpg'
import military1 from '../../Images/Institutions/military1.jpg'
import cadet1 from '../../Images/Institutions/cadet1.jpg'
import punjab1 from '../../Images/Institutions/punjab1.jpg'
import superior1 from '../../Images/Institutions/superior1.jpg'
import govt1 from '../../Images/Institutions/govt1.jpg'
import faran1 from '../../Images/Institutions/faran1.jpg'
import women1 from '../../Images/Institutions/women1.jpg'
import commerce1 from '../../Images/Institutions/commerce1.jpg'
import post1 from '../../Images/Institutions/post1.jpg'
import React, { Component } from "react";
import Slider from "react-slick";

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
                        <h3 className="text-center">Jinnah Law College, Jhelum</h3>
                        <img src={jinnah1} className="d-block w-100 img-fluid" alt="tulip" />
                        <p className="py-2 px-2 text-center fw-bold">Near Police Station G.T Road Dina Jhelum</p>
                    </div>
                    <div className="px-2">
                        <h3 className="text-center">Military College Jhelum</h3>
                        <img src={military1} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">Main Grand Trunk Rd, Sarai Alamgir, Gujrat, Punjab 50000</p>

                    </div>
                    <div className="px-2">
                        <h3 className="text-center">Cadet College, Jhelum</h3>
                        <img src={cadet1} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">Gt Road Jhelum Cantt, Jhelum, Pakistan</p>
                    </div>
                    <div className="px-2">
                        <h3 className="text-center">Punjab College Jhelum</h3>
                        <img src={punjab1} className="d-block w-100 img-fluid" alt="tulip" />
                        <p className="py-2 px-2 text-center fw-bold"> XP45+24F, NH 5, Jada, Jhelum, Punjab 49600</p>
                    </div>
                    <div className="px-2">
                        <h3 className="text-center">Superior College Jhelum</h3>
                        <img src={superior1} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">2M45+P65, Grand Trunk Rd, Jhelum, Punjab 49600</p>

                    </div>
                    <div className="px-2">
                        <h3 className="text-center">Govt College of Technology Jhelum</h3>
                        <img src={govt1} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2"> 2Q62+5C9, Chak Daulat, Jhelum, Punjab </p>
                    </div>
                    <div className="px-2">
                        <h3 className="text-center">Faran Institute of Technology, Jhelum</h3>
                        <img src={faran1} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">WPP6+GPP, Rohtas Rd, Jinnah Colony, Jhelum, Punjab 49304</p>
                    </div>
                    <div className="px-2">
                        <h3 className="text-center">Govt College for Women Jhelum</h3>
                        <img src={women1} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">Court Rd, District Civil Lines, Jhelum, Punjab</p>
                    </div>

                    <div className="px-2">
                        <h3 className="text-center">Govt College of Commerce Jhelum</h3>
                        <img src={commerce1} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">C7 Street 7, Block D Bilal Town, Jhelum, Punjab 49600</p>
                    </div>
                    <div className="px-2">
                        <h3 className="text-center">Govt Post Graduate College, Jhelum</h3>
                        <img src={post1} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">Govt. Graduate College, Tahlianwala Road, Jhelum</p>
                    </div>
                   
                  
                </Slider>
            </div>
        );
    }
}