import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tulip1 from '../../Images/Hotels/Tulip1.png'
import khan1 from '../../Images/Hotels/khan1.png'
import inn1 from '../../Images/Hotels/inn1.png'
import mirpur1 from '../../Images/Hotels/mirpur.png'
import lotus1 from '../../Images/Hotels/lotus1.png'
import usman1 from '../../Images/Hotels/usman1.png'
import undrah1 from '../../Images/Hotels/undrah.png'
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
                        <h3 className="text-center">Mirpur AJK Serviced Villa</h3>
                        <img src={mirpur1} className="d-block w-100 img-fluid" alt="tulip" />
                        <p className="py-2 px-2 text-center fw-bold"> House 146 Street 6 Sector C/4 Mirpur Azad Kashmir AJK, 10250 New Mīrpur, Pakistan</p>
                    </div>
                    <div className="px-2">
                        <h3 className="text-center">Lotus Inn</h3>
                        <img src={lotus1} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">Kotli Road Sector F/1, Next to Quaid E Azam Stadium 10250 - Rachhyāl, Azad Kashmir</p>

                    </div>
                    <div className="px-2">
                        <h3 className="text-center">Usman Lodges Ajk</h3>
                        <img src={usman1} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2"> Housing Scheme Near OPF School Kotli AJK, 11100 Kotli, Pakistan </p>
                    </div>
                    <div className="px-2">
                        <h3 className="text-center">Undrah Inn Hotel</h3>
                        <img src={undrah1} className="d-block w-100 img-fluid" alt="..." />
                        <p className="py-2">Allama Iqbal Road,, Mirpur Pakistan</p>
                    </div>
                   
                  
                </Slider>
            </div>
        );
    }
}
