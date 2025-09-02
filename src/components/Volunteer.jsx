import React from "react"
import title from "../assets/Volunteer.png"
import pic from "../assets/mission2.jpg"
import "../CSS/Volunteer.css"

const Volunteer = () => {
    return (
        <div className="volunteer text-center p-5 ">
            <img src={title} alt="" className="mb-5" />
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <div className="profile-card px-3 py-2 border border-3 border-dark rounded">
                        <img src={pic} className="rounded" alt="" />
                        <h5>B.BOMBAY</h5>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6 right-line"></div>
                <div className="col-6"></div>
            </div>
            <div className="row">
                <div className="col-6 right-line"></div>
                <div className="col-6"></div>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-2"></div>
                <div className="col-4 d-flex justify-content-center">
                    <div className="profile-card px-3 py-2 border border-3 border-dark rounded">
                        <img src={pic} className="rounded" alt="" /> <h5>B.BOMBAY</h5>
                    </div>
                </div>
                <div className="col-2"></div>
                <div className="col-2"></div>
            </div>
            <div className="row">
                <div className="col-6 right-line"></div>
                <div className="col-6"></div>
            </div>
            <div className="row">
                <div className="col-3 p-0">
                    <div className="right-line"></div>
                </div>
                <div className="col-3 p-0">
                    <div className="top-line"></div>
                </div>
                <div className="col-3 p-0">
                    <div className="halved top-line"></div>
                    <div className="top-line right-line"></div>
                </div>
                {/* <div className="col-3 p-0"></div> */}
            </div>
            <div className="row">
                <div className="col-6 d-flex justify-content-center">
                    <div className="profile-card px-3 py-2 border border-3 border-dark rounded">
                        <img src={pic} className="rounded" alt="" /> <h5>B.BOMBAY</h5>
                    </div>
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <div className="profile-card px-3 py-2 border border-3 border-dark rounded">
                        <img src={pic} className="rounded" alt="" /> <h5>B.BOMBAY</h5>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-3 p-0">
                    <div className="right-line"></div>
                </div>
                <div className="col-3 p-0"></div>
                <div className="col-3 p-0">
                    <div className="right-line"></div>
                </div>
                <div className="col-3 p-0"></div>
            </div>
            <div className="row">
                <div className="col-3 p-0"></div>
                <div className="col-3 p-0">
                    <div className="top-line"></div>
                    <div className="right-line"></div>
                </div>
                <div className="col-3 p-0">
                    <div className="top-line"></div>
                </div>
                <div className="col-3 p-0"></div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <div className="profile-card px-3 py-2 border border-3 border-dark rounded">
                        <img src={pic} className="rounded" alt="" /> <h5>B.BOMBAY</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Volunteer
