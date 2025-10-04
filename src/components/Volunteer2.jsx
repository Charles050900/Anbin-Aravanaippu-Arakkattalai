import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import BoardMemberitle from "../assets/Board Members.png"
import { useNavigate } from "react-router-dom"

const Volunteer2 = () => {
    return (
        <div className="volunteer2 p-5">
            <div className="title d-flex justify-content-center mb-5">
                <img src={BoardMemberitle} alt="" className="board-member-title" />
            </div>

            <div className="container text-center my-4">
                <div className="row justify-content-center">
                    <div className="row">
                        <div className="col-3"></div>
                        {/* Top Member */}
                        <div className="col-12 col-md-6 mb-4 ">
                            <div className="card bg-primary text-white p-3 rounded vol-shadow">
                                <h5 className="mb-1 fw-bold">Dolphin Sritharan</h5>
                                <p className="mb-0">Managing Director Sendhamarai Engineering Private Limited</p>
                                <p className="mb-0">Advisory of Board</p>
                            </div>
                        </div>
                        <div className="col-3"></div>
                    </div>

                    <div className="row d-lg-flex justify-content-center">
                        {/* Second Row Members */}
                        <div className="col-12 col-sm-6 col-lg-4 mb-4 ">
                            <div className="card bg-primary text-white p-3 rounded vol-shadow">
                                <h5 className="mb-1 fw-bold">M. Jabadurai</h5>
                                <p className=" m-0">Advocate</p>
                                <p className="m-0"> Member of Board</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4 mb-4 ">
                            <div className="card bg-primary text-white p-3 rounded vol-shadow">
                                <h5 className="mb-1 fw-bold">Mr. Subhash</h5>
                                <p className="m-0">Chief executive officer</p>
                                <p className="m-0">Sendhamarai Engineering Private Limited</p>
                            </div>
                        </div>
                    </div>

                    <div className="row  d-lg-flex justify-content-center ">
                        {/* Add more members here */}
                        <div className="col-12 col-sm-6 col-lg-4 mb-4">
                            <div className="card bg-primary text-white p-3 rounded vol-shadow">
                                <h5 className="mb-1 fw-bold">M. Madhan</h5>
                                <p className="mb-0">Member of Board</p>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4 mb-3">
                            <div className="card bg-primary text-white p-3 rounded vol-shadow">
                                <h5 className="mb-1 fw-bold">Master Angappon</h5>
                                <p className="mb-0">Member of Board</p>
                            </div>
                        </div>
                    </div>
                    <div className="row  d-lg-flex justify-content-center ">
                        {/* Add more members here */}
                        <div className="col-12 col-sm-6 col-lg-4 mb-4">
                            <div className="card bg-primary text-white p-3 rounded vol-shadow">
                                <h5 className="mb-1 fw-bold">A. Vimal</h5>
                                <p className="mb-0">Member of Board</p>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4 mb-4">
                            <div className="card bg-primary text-white p-3 rounded vol-shadow">
                                <h5 className="mb-1 fw-bold">Y. Abiyuth</h5>
                                <p className="mb-0">Member of Board</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* Bottom Member */}
                        <div className="col-4"></div>
                        <div className="col-12 col-md-4 mb-4">
                            <div className="card bg-primary text-white p-3 rounded vol-shadow">
                                <h5 className="mb-1 fw-bold">Y. Charles Bellarmin</h5>
                                <p className="mb-0">IT Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="row">
                <div className="col d-lg-flex justify-content-center">

                    <div className="card p-4 mb-4 shadow rounded text-center bg-primary text-white box">
                        <h4 className="mb-2 fw-bold">Dolphin Sritharan</h4>
                        <p className="mb-2">MD at Sendhamarai Engineering Private Limited</p>
                        <p className="mb-0">Advisory of Board</p>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="  col-md-6 mb-4 d-flex justify-content-lg-end justify-content-center">
                    <div className=" p-3 w-50 shadow rounded text-center bg-primary text-white">
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
            <div className="row ">
                <div className="col d-lg-flex justify-content-center mb-5">

                    <div className="card py-3 px-5  mb-3 shadow rounded text-center box bg-primary text-white">
                        <h5 className="mb-1 fw-bold">Y. Charles Bellarmin</h5>
                        <p className="mb-0">IT Support</p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Volunteer2
