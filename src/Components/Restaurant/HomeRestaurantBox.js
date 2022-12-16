import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import kfc1 from '../../Images/Restaurants/kfc1.png'
import mc1 from '../../Images/Restaurants/mc1.png'
import asian1 from '../../Images/Restaurants/asian.png'
import chaye1 from '../../Images/Restaurants/chaye.png'
import china1 from '../../Images/Restaurants/china.png'
import monarch1 from '../../Images/Restaurants/monarch.png'
import mehwish1 from '../../Images/Restaurants/mehwish1.png'
import dewaan from '../../Images/Restaurants/dewaan1.png'
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
                        <h3 className="text-center">KFC</h3>
                        <img src={kfc1} className="d-block w-100 img-fluid" alt="KFC" />
                        <p className="py-2">Grand Trunk Rd Near Jhelum Bridge, Jhelum 49600 Pakistan</p>
                    </div>
                    <div className="px-2">
                        <h3 className="text-center">McDonald's</h3>
                        <img src={mc1} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">G.T. Rd Jhelum Toll Plaza, Jhelum Pakistan </p>

                    </div>
                    <div className="px-2">
                        <h3 className="text-center">Chaaye Khana</h3>
                        <img src={chaye1} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">GT Road, Jhelum Cantonment, Jhelum Pakistan</p>

                    </div>
                    <div className="px-2">
                        <h3 className="text-center">Monarch Lounge</h3>
                        <img src={monarch1} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">Main GT road near Honda express showroom , Jhelum, Pakistan</p>

                    </div>
                    <div className="px-2">
                        <h3 className="text-center">China citi</h3>
                        <img src={china1} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">Satellite Town, Satellite Town Jhelum, Jhelum, Punjab, Pakistan</p>

                    </div>
                    <div className="px-2">
                        <h3 className="text-center">Asian Cuisine Family Restaurant</h3>
                        <img src={asian1} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">G T Road Rathian Jhelum, Jhelum, Pakistan</p>
                    </div>
                    <div className="px-2">
                        <h3 className="text-center">Deewan-e-Saeed Hotel Restaurant</h3>
                        <img src={dewaan} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">G.T ROAD JADA , Jhelum, Pakistan</p>
                    </div>
                    <div className="px-2">
                        <h3 className="text-center">Mehwish restaurants and hotels</h3>
                        <img src={mehwish1} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">G.T ROAD JADA , Jhelum, Pakistan</p>
                    </div>
                </Slider>
            </div>
        );
    }
}