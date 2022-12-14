import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dam1 from '../../Images/Places/dam1.jpg'
import jhelum1 from '../../Images/Places/jhelum1.jpg'
import park1 from '../../Images/Places/park1.jpg'
import rohtas1 from '../../Images/Places/rohtas1.jpg'
import salt1 from '../../Images/Places/salt1.jpg'
import satellite1 from '../../Images/Places/satellite1.jpg'
import till1 from '../../Images/Places/till1.jpg'
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
                        <h3 className="text-center">ROHTAS FORT</h3>
                        <img src={rohtas1} className="d-block w-100 img-fluid" alt="tulip" />
                        <p className="py-2 px-2 text-center fw-bold">Rohtas City  , Dina  Jhelum District, Punjab, Pakistan</p>
                    </div>
                    <div className="px-2">
                        <h3 className="text-center">Satellite Town</h3>
                        <img src={satellite1} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">Satellite Town Jhelum is located on Main G.T Road close by University</p>

                    </div>
                    <div className="px-2">
                        <h3 className="text-center">Adventura Park</h3>
                        <img src={park1} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">MAIN GT ROAD NEAR KFC, opp Chaye khana,Jhelum</p>
                    </div>
                    <div className="px-2">
                        <h3 className="text-center">JHELUM BRIDE</h3>
                        <img src={jhelum1} className="d-block w-100 img-fluid" alt="tulip" />
                        <p className="py-2 px-2 text-center fw-bold"> GT-Road Jhelum</p>
                    </div>
                    <div className="px-2">
                        <h3 className="text-center">KHEWRA SALT MINE</h3>
                        <img src={salt1} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">J2X5+59V, Khewra, Jhelum, Punjab</p>

                    </div>
                    <div className="px-2">
                        <h3 className="text-center">MANGLA DAM</h3>
                        <img src={dam1} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2"> Mangla, Azad Kashmir </p>
                    </div>
                    <div className="px-2">
                        <h3 className="text-center">TILLA JOGIAN</h3>
                        <img src={till1} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2"> Salt Range mountains; Punjab; Pakistan</p>
                    </div>
                   
                  
                </Slider>
            </div>
        );
    }
}