import React from "react"
import memberpic from "..//assets/volunteers.jpg"
import { useNavigate } from "react-router-dom"

const BecomeVolunteer = () => {
    let navigate = useNavigate()

    const goToVolunteerform = () => {
        sessionStorage.setItem("fundScrollY", window.scrollY)
        navigate("/Volunteer-Registration") // or whatever route you use
    }
    return (
        <div className=" d-lg-flex justify-content-lg-center p-5 register-member-form">
            <div className="col-md-5">
                <div className="member-card bg-white rounded-5 py-4 px-4 px-lg-0  d-flex flex-column justify-content-center align-items-center my-5 ">
                    <h4 className="text-center fw-bolder text-primary ">Become a Member</h4>

                    <div className="px-5">
                        <img src={memberpic} alt="" className="my-4 rounded-5 img-fluid " />
                    </div>

                    <div className=" d-flex flex-column justify-content-center align-items-center">
                        <p className="text-center  fw-bold text-primary mb-">The best way to find yourself is to lose yourself in the service of others</p>
                        <p className="card-text text-center text-secondary mb-">Join our community and be a part of a brighter future</p>
                        <button className="btn btn-primary " onClick={goToVolunteerform}>
                            Register Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BecomeVolunteer
