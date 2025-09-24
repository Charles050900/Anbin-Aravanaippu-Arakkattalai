import React from "react"
import title from "../assets/Services.png"
import "../CSS/Service.css"
import NightStudy from "../assets/Night Study.jpg"
import FreeEquipment from "../assets/Free Equipment.jpg"
import FreeProjector from "../assets/Projector.jpg"
import FreeSelfDefence from "../assets/Free Self Defence.jpg"
import service5 from "../assets/service5.jpg"
import service6 from "../assets/service6.jpg"
import service7 from "../assets/service7.jpg"
import service8 from "../assets/service8.jpg"
import service9 from "../assets/service9.jpg"
import service10 from "../assets/service10.jpg"
import service11 from "../assets/service11.jpg"
import service12 from "../assets/service12.jpg"
import service13 from "../assets/service13.jpg"
import service14 from "../assets/service14.jpg"
import service15 from "../assets/service15.jpg"
import service16 from "../assets/service16.jpg"

const Service = () => {
    return (
        <div className="service d-flex flex-column p-4">
            <img src={title} alt="service" className="img-fluid" style={{ height: "100px", objectFit: "contain" }} />
            <div className="row row-cols-1 row-cols-md-4 g-5 p-5">
                {/* Card 1 */}
                <div className="flip-container ">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={NightStudy} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">Free Evening Education</h5>
                                    <h5 className="card-title text-center">மாணவர்களுக்கு இலவச மாலைநேர கல்வி</h5>
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
                {/* Card 2 */}
                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={FreeEquipment} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">Free Equipment to students</h5>
                                    <h5 className="card-title text-center">மாணவர்களுக்கு இலவச உபகரணங்கள்</h5>
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
                {/* Card 3 */}
                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={FreeProjector} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">Free projector for students</h5>
                                    <h5 className="card-title text-center">மாணவர்களுக்கு இலவச படமெறிகருவி</h5>
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
                {/* Card 4 */}
                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={NightStudy} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">Free Self-Defence Training</h5>
                                    <h5 className="card-title text-center">மாணவர்களுக்கு இலவச சுய பாதுகாப்பு பயிற்சி</h5>
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
                {/* Card 5 */}
                <div className="flip-container ">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={service5} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">Free Evening Education</h5>
                                    <h5 className="card-title text-center">மாணவர்களுக்கு இலவச மாலைநேர கல்வி</h5>
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
                {/* Card 6 */}
                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={service6} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">Free Equipment to students</h5>
                                    <h5 className="card-title text-center">மாணவர்களுக்கு இலவச உபகரணங்கள்</h5>
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
                {/* Card 7 */}
                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={service7} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">Free projector for students</h5>
                                    <h5 className="card-title text-center">மாணவர்களுக்கு இலவச படமெறிகருவி</h5>
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
                {/* Card 8 */}
                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={service8} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">Free Self-Defence Training</h5>
                                    <h5 className="card-title text-center">மாணவர்களுக்கு இலவச சுய பாதுகாப்பு பயிற்சி</h5>
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
                {/* Card 9 */}
                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={service9} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">Free Evening Education</h5>
                                    <h5 className="card-title text-center">மாணவர்களுக்கு இலவச மாலைநேர கல்வி</h5>
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

                {/* Card 10 */}
                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={service10} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">Free Equipment to students</h5>
                                    <h5 className="card-title text-center">மாணவர்களுக்கு இலவச உபகரணங்கள்</h5>
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
                {/* Card 11 */}
                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={service11} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">Free projector for students</h5>
                                    <h5 className="card-title text-center">மாணவர்களுக்கு இலவச படமெறிகருவி</h5>
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
                {/* Card 12 */}
                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={service12} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">Free Self-Defence Training</h5>
                                    <h5 className="card-title text-center">மாணவர்களுக்கு இலவச சுய பாதுகாப்பு பயிற்சி</h5>
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
                {/* Card 13 */}
                <div className="flip-container ">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={service13} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">Free Evening Education</h5>
                                    <h5 className="card-title text-center">மாணவர்களுக்கு இலவச மாலைநேர கல்வி</h5>
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
                {/* Card 14 */}
                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={service14} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">Free Equipment to students</h5>
                                    <h5 className="card-title text-center">மாணவர்களுக்கு இலவச உபகரணங்கள்</h5>
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
                {/* Card 15 */}
                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={service15} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">Free projector for students</h5>
                                    <h5 className="card-title text-center">மாணவர்களுக்கு இலவச படமெறிகருவி</h5>
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
                {/* Card 16 */}
                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={service16} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">Free Self-Defence Training</h5>
                                    <h5 className="card-title text-center">மாணவர்களுக்கு இலவச சுய பாதுகாப்பு பயிற்சி</h5>
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
        </div>
    )
}

export default Service
