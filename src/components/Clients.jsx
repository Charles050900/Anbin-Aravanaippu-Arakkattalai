import React from "react"
import Slider from "react-slick"
import "bootstrap/dist/css/bootstrap.min.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import client1 from "../assets/client1.png"
import client2 from "../assets/client2.png"
import client3 from "../assets/client3.png"
import client4 from "../assets/client4.png"
import "../CSS/Clients.css"

const ClientSection = () => {
    const settings = {
        vertical: false,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        infinite: true,
    }

    // const clients = [client1, client2, client3, client4]

    return (
        <div className="client px-lg-5  pb-5 text-white">
            <h2 className="text-center fw-bold">Our Supporting Partners</h2>
            <div className="row align-items-center ">
                {/* Left side - Quote */}
                <div className="col p-5 ">
                    <h4 className="fw-bold text-center">Alone we can do so little - together we can do so much.</h4>
                </div>

                {/* Right side - Vertical Slider */}
                <div className="client-slider px-5 py-2">
                    <div className="client-track">
                        <img src={client1} alt="client1" />
                        <img src={client2} alt="client2" />
                        <img src={client3} alt="client3" />
                        <img src={client4} alt="client4" />
                        {/* duplicate set for seamless loop */}
                        <img src={client1} alt="client1" />
                        <img src={client2} alt="client2" />
                        <img src={client3} alt="client3" />
                        <img src={client4} alt="client4" />
                        <img src={client1} alt="client1" />
                        <img src={client2} alt="client2" />
                        <img src={client3} alt="client3" />
                        <img src={client4} alt="client4" />
                        <img src={client1} alt="client1" />
                        <img src={client2} alt="client2" />
                        <img src={client3} alt="client3" />
                        <img src={client4} alt="client4" />
                        <img src={client1} alt="client1" />
                        <img src={client2} alt="client2" />
                        <img src={client3} alt="client3" />
                        <img src={client4} alt="client4" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientSection
