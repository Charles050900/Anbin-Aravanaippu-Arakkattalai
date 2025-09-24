import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import BoardMemberitle from "../assets/Board Members.png"
import memberpic from '..//assets/volunteers.jpg'


const Volunteer2 = () => {
    return (
        <div className="volunteer2 p-5">
            <div className="title d-flex justify-content-center mb-5">
                <img src={BoardMemberitle} alt="" className="board-member-title" />
            </div>

            <div className="row">
                <div className="col d-lg-flex justify-content-center">
                    {/* Top Advisory */}
                    <div className="card p-4 mb-4 shadow rounded text-center bg-primary text-white box">
                        <h4 className="mb-2 fw-bold">Dolphin Sritharan</h4>
                        <p className="mb-2">MD at Sendhamarai Engineering Private Limited</p>
                        <p className="mb-0">Advisory of Board</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mb-4 d-flex justify-content-lg-end justify-content-center ">
                    <div className="card p-3 w-50 shadow rounded text-center bg-primary text-white">
                        <h5 className="mb-1 fw-bold">M. Jabadurai</h5>
                        <p className="mb-0">
                            Advocate
                            <br />
                            Member of Board
                        </p>
                    </div>
                </div>
                <div className="col-md-6 mb-4  d-flex justify-content-lg-start justify-content-center">
                    <div className="card p-3 w-50 shadow rounded text-center bg-primary text-white">
                        <h5 className="mb-1 fw-bold">Mr. Subhash</h5>
                        <p className="mb-0">
                            Chief Executive Officer <br /> Sendhamarai Engineering Private Limited
                        </p>
                    </div>
                </div>
                <div className="col-md-6 mb-4 d-flex justify-content-lg-end justify-content-center">
                    <div className="card p-3 w-50 shadow rounded text-center bg-primary text-white">
                        <h5 className="mb-1 fw-bold">M. Madhan</h5>
                        <p className="mb-0">Member of Board</p>
                    </div>
                </div>
                <div className="col-md-6 mb-4 d-flex justify-content-lg-start justify-content-center">
                    <div className="card p-3 w-50 shadow rounded text-center bg-primary text-white">
                        <h5 className="mb-1 fw-bold">Master Angappon</h5>
                        <p className="mb-0">Member of Board</p>
                    </div>
                </div>
                <div className="col-md-6 mb-4 d-flex justify-content-lg-end justify-content-center">
                    <div className="card p-3 w-50 shadow rounded text-center bg-primary text-white">
                        <h5 className="mb-1 fw-bold">A. Vimal</h5>
                        <p className="mb-0">Member of Board</p>
                    </div>
                </div>
                <div className="col-md-6 mb-4 d-flex justify-content-lg-start justify-content-center">
                    <div className="card p-3 w-50 shadow rounded text-center bg-primary text-white">
                        <h5 className="mb-1 fw-bold">Y. Abiyuth</h5>
                        <p className="mb-0">Member of Board</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col d-lg-flex justify-content-center">
                    {/* Top Advisory */}
                    <div className="card py-3 px-5  mb-3 shadow rounded text-center box bg-primary text-white">
                        <h5 className="mb-1 fw-bold">Y. Charles Bellarmin</h5>
                        <p className="mb-0">IT Support</p>
                    </div>
                </div>
            </div>

            <div className="row d-lg-flex justify-content-lg-center my-5">
                <div className="col-md-5">
                    <div className="member-card bg-white rounded-5 py-4 px-4 px-lg-0  d-flex flex-column justify-content-center align-items-center ">
                        <h4 className="text-center fw-bolder text-primary ">Become a Member</h4>

                        <div className="px-5">

                            <img src={memberpic} alt="" className="my-4 rounded-5 img-fluid " />
                        </div>

                        <div className=" d-flex flex-column justify-content-center align-items-center">
                            <p className="text-center  fw-bold text-primary mb-">"The best way to find yourself is to lose yourself in the service of others."</p>
                            <p className="card-text text-center text-secondary mb-">Join our community and be a part of a brighter future.</p>
                            <button className="btn btn-primary ">Register Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Volunteer2
