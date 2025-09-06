import React from "react"
import title from "../assets/Services.png"
import "../CSS/Service.css"
import NightStudy from "../assets/Night Study.png"
import FreeEquipment from "../assets/carousel-4.jpg"
import FreeProjector from "../assets/Projector.jpg"
import FreeSelfDefence from "../assets/Free Self Defence.jpg"
import pic from "../assets/Night Study.png"

const Service = () => {
    return (
        <div className="service d-flex flex-column p-4">
            <img src={title} alt="service" className="img-fluid" style={{ height: "100px", objectFit: "contain" }} />
            <div className="row row-cols-1 row-cols-md-4 g-5 p-5 ">
                <div className="col">
                    <div className="flip-container">
                        <div className="flip-card">
                            <div className="flip-front">
                                <div className="card h-100 ">
                                    <img src={NightStudy} className="card-img-top h-75" alt="..." />
                                    <div className="card-body  d-flex justify-content-center align-items-center">
                                        <h5 className="card-title">
                                            Free Evening Education
                                            <br />
                                            (இலவச மாலைநேர கல்வி)
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="flip-back">
                                <div className="card h-100 border-3 border-light">
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                        <h5 className="card-title">Details</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card h-100 ">
                                <img src={FreeEquipment} className="card-img-top h-75" alt="..." />
                                <div className="card-body  d-flex justify-content-center align-items-center">
                                    <h5 className="card-title">
                                        Free Equipment to students <br /> (மாணவர்களுக்கு இலவச உபகரணங்கள்)
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="flip-back">
                            <div className="card h-100 border-3 border-light">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title">Details</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card h-100 ">
                                <img src={FreeProjector} className="card-img-top h-75" alt="..." />
                                <div className="card-body  d-flex justify-content-center align-items-center">
                                    <h5 className="card-title">
                                        Free projector for students <br />
                                        (மாணவர்களுக்கு இலவச படமெறிகருவி)
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="flip-back">
                            <div className="card h-100 border-3 border-light">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title">Details</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card h-100 ">
                                <img src={FreeSelfDefence} className="card-img-top h-75" alt="..." />
                                <div className="card-body  d-flex justify-content-center align-items-center">
                                    <h5 className="card-title">
                                        Free Self-Defence Training <br />
                                        (மாணவர்களுக்கு இலவச சுய பாதுகாப்பு பயிற்சி)
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="flip-back">
                            <div className="card h-100 border-3 border-light">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title">Details</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-3 border-light">
                        <img src={NightStudy} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">
                                Free Evening Education
                                <br />
                                (இலவச மாலைநேர கல்வி)
                            </h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-3 border-light">
                        <img src={FreeEquipment} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">
                                Free Equipment to students <br /> (மாணவர்களுக்கு இலவச உபகரணங்கள்)
                            </h5>
                            <p className="card-text">This is a short card.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-3 border-light">
                        <img src={FreeProjector} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">
                                Free projector for students <br />
                                (மாணவர்களுக்கு இலவச படமெறிகருவி)
                            </h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-3 border-light">
                        <img src={FreeSelfDefence} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">
                                Free Self-Defence Training <br />
                                (மாணவர்களுக்கு இலவச சுய பாதுகாப்பு பயிற்சி)
                            </h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
