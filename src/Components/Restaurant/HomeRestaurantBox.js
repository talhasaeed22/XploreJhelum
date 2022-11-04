import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hotel from '../../Images/bg.jpg'
import React, { Component } from "react";
import Slider from "react-slick";

export default class CustomArrows extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            speed: 2000,
            autoplay: true,
            autoplaySpeed: 500,
            slidesToScroll: 1,
            cssEase: "linear"
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="px-2">
                        <h3 className="text-center">Restaurant Name</h3>
                        <img src={hotel} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">Hotel Description</p>
                    </div>
                    <div className="px-2">
                        <h3 className="text-center">Restaurant Name</h3>
                        <img src={hotel} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">Hotel Description</p>

                    </div>
                    <div className="px-2">
                        <h3 className="text-center">Restaurant Name</h3>
                        <img src={hotel} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">Hotel Description</p>

                    </div>
                    <div className="px-2">
                        <h3 className="text-center">Restaurant Name</h3>
                        <img src={hotel} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias suscipit, corrupti placeat odio qui nobis </p>

                    </div>
                    <div className="px-2">
                        <h3 className="text-center">Restaurant Name</h3>
                        <img src={hotel} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">Hotel Description</p>

                    </div>
                    <div className="px-2">
                        <h3 className="text-center">Restaurant Name</h3>
                        <img src={hotel} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">Hotel Description</p>
                    </div>
                </Slider>
            </div>
        );
    }
}