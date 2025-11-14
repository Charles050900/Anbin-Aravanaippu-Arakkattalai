import React, { useEffect } from "react"
import "../CSS/Donation.css"
import title from "../assets/Donate.png"
import bank_transfer from "../assets/banktransfer.jpg"
import blood_donate from "../assets/blooddonate.jpg"
import blood_request from "../assets/bloodrequest.jpg"
import { useNavigate } from "react-router-dom"

const Donation = () => {
    const navigate = useNavigate()

    const goToDonateFunds = () => {
        sessionStorage.setItem("fundScrollY", window.scrollY)
        navigate("/Donate-Funds") // or whatever route you use
    }
    const goToDonateBlood = () => {
        sessionStorage.setItem("fundScrollY", window.scrollY)
        navigate("/Donate-Blood") // or whatever route you use
    }
    const goToRequestBlood = () => {
        sessionStorage.setItem("fundScrollY", window.scrollY)
        navigate("/Request-Blood") // or whatever route you use
    }
    return (
        <div className="donate row">
            <div className="col-12 my-3 d-flex flex-column justify-content-center align-items-center">
                <img src={title} alt="" className="donate-title" />
            </div>
            <div className="col-12 gap-5 d-flex flex-column flex-lg-row justify-content-evenly align-items-center  p-5">
                <div className="card cards d-flex flex-column justify-content-center align-items-center p-4">
                    <h3 className="text-center fw-bold text-primary ">Donate Funds</h3>
                    <img src={bank_transfer} alt="" height={100} className="m-4" />
                    <div className=" w-100  d-flex flex-column justify-content-center align-items-center">
                        <p className="text-center fw-semibold text-primary mb-4">
                            Together we can build brighter futures. <br />
                            Donate now and be part of the change.
                        </p>
                        <button className="btn btn-primary fw-semibold" onClick={goToDonateFunds}>
                            Donate
                        </button>
                    </div>
                </div>
                <div className="card cards d-flex flex-column justify-content-center align-items-center p-4">
                    <h3 className="text-center fw-bold text-danger">Donate Blood</h3>
                    <img src={blood_donate} alt="" height={120} className="m-4" />
                    <div className=" w-100  d-flex flex-column justify-content-center align-items-center">
                        <p className="text-center fw-semibold text-danger mb-4">
                            A single pint of blood can save three lives. <br /> Be a hero - donate today.
                        </p>
                        <button className="btn btn-danger fw-semibold" onClick={goToDonateBlood}>
                            Donate
                        </button>
                    </div>
                </div>
                <div className="card cards d-flex flex-column justify-content-center align-items-center p-4">
                    <h3 className="text-center fw-bold  text-success">Request for Blood</h3>
                    <img src={blood_request} alt="" height={120} className="m-4" />
                    <div className=" w-100  d-flex flex-column justify-content-center align-items-center">
                        <p className="text-center fw-semibold text-success">
                            As rain feeds the soil, blood feeds our cells. <br /> Life depends on both to bloom.
                        </p>
                        <button className="btn btn-success fw-semibold " onClick={goToRequestBlood}>
                            Request
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donation
