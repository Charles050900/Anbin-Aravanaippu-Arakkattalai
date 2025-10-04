import Carousel from "react-bootstrap/Carousel"
// import ExampleCarouselImage from "components/ExampleCarouselImage"
import CarouselImage0 from "../assets/carousel-0.jpg"
import CarouselImage1 from "../assets/carousel-1.jpg"
import CarouselImage2 from "../assets/carousel-2.jpg"
import CarouselImage3 from "../assets/carousel-3.jpg"
import CarouselImage4 from "../assets/carousel-4.jpg"
import CarouselImage5 from "../assets/carousel-5.jpg"
import CarouselImage6 from "../assets/carousel-6.jpg"
import CarouselImage7 from "../assets/carousel-7.jpg"
import CarouselImage8 from "../assets/carousel-8.jpg"
import CarouselImage9 from "../assets/carousel-9.jpg"
import CarouselImage10 from "../assets/carousel-10.jpg"
import CarouselImage11 from "../assets/carousel-11.jpg"
import CarouselImage12 from "../assets/carousel-12.jpg"
import CarouselImage13 from "../assets/carousel-13.jpg"

import carouselHeading from "../assets/heading 1.png"
import "../CSS/Profile.css"

function CarouselFadeExample() {
    return (
        <Carousel fade interval={1500} pause={false} className="mt-5">
            <Carousel.Item>
                <img className="d-block w-100 object-fit-contain object-fit-lg-cover" src={CarouselImage0} style={{ height: "100vh", objectFit: "cover" }} />
                <Carousel.Caption className=" d-flex justify-content-center">
                    <img src={carouselHeading} alt="" className=" p-5 p-lg-0 img-1" style={{ height: "250px", width: "700px" }}></img>
                    {/* <h3 className="carousel-heading px-5 py-2 rounded-pill">அன்பின் அரவணைப்பு அறக்கட்டளை</h3> */}
                    {/* <p className="carousel-content">அனைவருக்கும் அனைத்தும் கிடைக்க வேண்டும், அனைவரும் சம நிலையில் வாழ வேண்டும்.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 object-fit-contain object-fit-lg-cover" src={CarouselImage1} style={{ height: "100vh", objectFit: "cover" }} />
                <Carousel.Caption className=" d-flex justify-content-center">
                    <img src={carouselHeading} alt="" className="p-5 p-lg-0 img" style={{ height: "250px", width: "700px" }}></img>
                    {/* <h3 className="carousel-heading px-5 py-2 rounded-pill">அன்பின் அரவணைப்பு அறக்கட்டளை</h3> */}
                    {/* <p className="carousel-content">அனைவருக்கும் அனைத்தும் கிடைக்க வேண்டும், அனைவரும் சம நிலையில் வாழ வேண்டும்.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 object-fit-contain object-fit-lg-cover" src={CarouselImage2} style={{ height: "100vh", objectFit: "cover" }} />
                <Carousel.Caption className=" d-flex justify-content-center">
                    <img src={carouselHeading} alt="" className="p-5 p-lg-0 img" style={{ height: "250px", width: "700px" }}></img>
                    {/* <h3 className="carousel-heading px-5 py-2 rounded-pill">அன்பின் அரவணைப்பு அறக்கட்டளை</h3> */}
                    {/* <p className="carousel-content">அனைவருக்கும் அனைத்தும் கிடைக்க வேண்டும், அனைவரும் சம நிலையில் வாழ வேண்டும்.</p>{" "} */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 object-fit-contain object-fit-lg-cover " src={CarouselImage3} style={{ height: "100vh", objectFit: "cover" }} />
                <Carousel.Caption className=" d-flex justify-content-center">
                    <img src={carouselHeading} alt="" className="p-5 p-lg-0 img" style={{ height: "250px", width: "700px" }}></img>
                    {/* <h3 className="carousel-heading px-5 py-2 rounded-pill">அன்பின் அரவணைப்பு அறக்கட்டளை</h3> */}
                    {/* <p className="carousel-content">அனைவருக்கும் அனைத்தும் கிடைக்க வேண்டும், அனைவரும் சம நிலையில் வாழ வேண்டும்.</p>{" "} */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 object-fit-contain object-fit-lg-cover" src={CarouselImage4} style={{ height: "100vh", objectFit: "cover" }} />
                <Carousel.Caption className=" d-flex justify-content-center">
                    .<img src={carouselHeading} alt="" className="p-5 p-lg-0 img" style={{ height: "250px", width: "700px" }}></img>
                    {/* <h3 className="carousel-heading px-5 py-2 rounded-pill">அன்பின் அரவணைப்பு அறக்கட்டளை</h3> */}
                    {/* <p className="carousel-content">அனைவருக்கும் அனைத்தும் கிடைக்க வேண்டும், அனைவரும் சம நிலையில் வாழ வேண்டும்.</p>{" "} */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 object-fit-contain object-fit-lg-cover" src={CarouselImage5} style={{ height: "100vh", objectFit: "cover" }} />
                <Carousel.Caption className=" d-flex justify-content-center">
                    <img src={carouselHeading} alt="" className="p-5 p-lg-0 img" style={{ height: "250px", width: "700px" }}></img>
                    {/* <h3 className="carousel-heading px-5 py-2 rounded-pill">அன்பின் அரவணைப்பு அறக்கட்டளை</h3> */}
                    {/* <p className="carousel-content">அனைவருக்கும் அனைத்தும் கிடைக்க வேண்டும், அனைவரும் சம நிலையில் வாழ வேண்டும்.</p>{" "} */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 object-fit-contain object-fit-lg-cover" src={CarouselImage6} style={{ height: "100vh", objectFit: "cover" }} />
                <Carousel.Caption className=" d-flex justify-content-center">
                    <img src={carouselHeading} alt="" className="p-5 p-lg-0 img" style={{ height: "250px", width: "700px" }}></img>
                    {/* <h3 className="carousel-heading px-5 py-2 rounded-pill">அன்பின் அரவணைப்பு அறக்கட்டளை</h3> */}
                    {/* <p className="carousel-content">அனைவருக்கும் அனைத்தும் கிடைக்க வேண்டும், அனைவரும் சம நிலையில் வாழ வேண்டும்.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 object-fit-contain object-fit-lg-cover" src={CarouselImage7} style={{ height: "100vh", objectFit: "cover" }} />
                <Carousel.Caption className=" d-flex justify-content-center">
                    <img src={carouselHeading} alt="" className="p-5 p-lg-0 img" style={{ height: "250px", width: "700px" }}></img>
                    {/* <h3 className="carousel-heading px-5 py-2 rounded-pill">அன்பின் அரவணைப்பு அறக்கட்டளை</h3> */}
                    {/* <p className="carousel-content">அனைவருக்கும் அனைத்தும் கிடைக்க வேண்டும், அனைவரும் சம நிலையில் வாழ வேண்டும்.</p>{" "} */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 object-fit-contain object-fit-lg-cover" src={CarouselImage8} style={{ height: "100vh", objectFit: "cover" }} />
                <Carousel.Caption className=" d-flex justify-content-center">
                    <img src={carouselHeading} alt="" className="p-5 p-lg-0 img" style={{ height: "250px", width: "700px" }}></img>
                    {/* <h3 className="carousel-heading px-5 py-2 rounded-pill">அன்பின் அரவணைப்பு அறக்கட்டளை</h3> */}
                    {/* <p className="carousel-content">அனைவருக்கும் அனைத்தும் கிடைக்க வேண்டும், அனைவரும் சம நிலையில் வாழ வேண்டும்.</p>{" "} */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 object-fit-contain object-fit-lg-cover" src={CarouselImage9} style={{ height: "100vh", objectFit: "cover" }} />
                <Carousel.Caption className=" d-flex justify-content-center">
                    <img src={carouselHeading} alt="" className="p-5 p-lg-0 img" style={{ height: "250px", width: "700px" }}></img>
                    {/* <h3 className="carousel-heading px-5 py-2 rounded-pill">அன்பின் அரவணைப்பு அறக்கட்டளை</h3> */}
                    {/* <p className="carousel-content">அனைவருக்கும் அனைத்தும் கிடைக்க வேண்டும், அனைவரும் சம நிலையில் வாழ வேண்டும்.</p>{" "} */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 object-fit-contain object-fit-lg-cover" src={CarouselImage10} style={{ height: "100vh", objectFit: "cover" }} />
                <Carousel.Caption className=" d-flex justify-content-center">
                    <img src={carouselHeading} alt="" className="p-5 p-lg-0 img" style={{ height: "250px", width: "700px" }}></img>
                    {/* <h3 className="carousel-heading px-5 py-2 rounded-pill">அன்பின் அரவணைப்பு அறக்கட்டளை</h3> */}
                    {/* <p className="carousel-content">அனைவருக்கும் அனைத்தும் கிடைக்க வேண்டும், அனைவரும் சம நிலையில் வாழ வேண்டும்.</p>{" "} */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 object-fit-contain object-fit-lg-cover" src={CarouselImage11} style={{ height: "100vh", objectFit: "cover" }} />
                <Carousel.Caption className=" d-flex justify-content-center">
                    <img src={carouselHeading} alt="" className="p-5 p-lg-0 img" style={{ height: "250px", width: "700px" }}></img>
                    {/* <h3 className="carousel-heading px-5 py-2 rounded-pill">அன்பின் அரவணைப்பு அறக்கட்டளை</h3> */}
                    {/* <p className="carousel-content">அனைவருக்கும் அனைத்தும் கிடைக்க வேண்டும், அனைவரும் சம நிலையில் வாழ வேண்டும்.</p>{" "} */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 object-fit-contain object-fit-lg-cover" src={CarouselImage12} style={{ height: "100vh", objectFit: "cover" }} />
                <Carousel.Caption className=" d-flex justify-content-center">
                    <img src={carouselHeading} alt="" className="p-5 p-lg-0 img" style={{ height: "250px", width: "700px" }}></img>
                    {/* <h3 className="carousel-heading px-5 py-2 rounded-pill">அன்பின் அரவணைப்பு அறக்கட்டளை</h3> */}
                    {/* <p className="carousel-content">அனைவருக்கும் அனைத்தும் கிடைக்க வேண்டும், அனைவரும் சம நிலையில் வாழ வேண்டும்.</p>{" "} */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 object-fit-contain object-fit-lg-cover" src={CarouselImage13} style={{ height: "100vh", objectFit: "cover" }} />
                <Carousel.Caption className=" d-flex justify-content-center">
                    <img src={carouselHeading} alt="" className="p-5 p-lg-0 img" style={{ height: "250px", width: "700px" }}></img>
                    {/* <h3 className="carousel-heading px-5 py-2 rounded-pill">அன்பின் அரவணைப்பு அறக்கட்டளை</h3> */}
                    {/* <p className="carousel-content">அனைவருக்கும் அனைத்தும் கிடைக்க வேண்டும், அனைவரும் சம நிலையில் வாழ வேண்டும்.</p>{" "} */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselFadeExample
