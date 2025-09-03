import React from "react"
import Slider from "react-slick"
import "bootstrap/dist/css/bootstrap.min.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import client1 from "../assets/client1.png"
import client2 from "../assets/client2.png"
import client3 from "../assets/client3.png"
import "../CSS/Clients.css"

const ClientSection = () => {
    const settings = {
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        infinite: true,
    }

    const clients = [client1, client2, client3]

    return (
        <div className="client p-lg-5  ">
            <h2 className="text-center fw-bold mb-3 ">Our Supporting Partners</h2>
            <div className="row align-items-center p-5">
                {/* Left side - Quote */}
                <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
                    <h4 className="fw-bold">“Alone we can do so little; together we can do so much.”</h4>
                </div>

                {/* Right side - Vertical Slider */}
                <div className="col-md-6  border-3 border-dark">
                    <Slider {...settings}>
                        {clients.map((logo, index) => (
                            <div key={index} className="d-flex justify-content-center p-1">
                                <img src={logo} alt={`client-${index}`} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default ClientSection
