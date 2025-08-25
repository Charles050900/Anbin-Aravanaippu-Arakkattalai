import Carousel from "react-bootstrap/Carousel"
// import ExampleCarouselImage from "components/ExampleCarouselImage"
import CarouselImage1 from "../assets/carousel-1.jpg"
import CarouselImage2 from "../assets/carousel-2.jpg"
import CarouselImage3 from "../assets/carousel-3.jpg"

function CarouselFadeExample() {
    return (
        <Carousel fade interval={1500}>
            <Carousel.Item>
                <img className="d-block w-100" src={CarouselImage1} style={{ height: "85vh", objectFit: "cover" }} />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={CarouselImage2} style={{ height: "85vh", objectFit: "cover" }} />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 h" src={CarouselImage3} style={{ height: "85vh", objectFit: "cover" }} />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselFadeExample
