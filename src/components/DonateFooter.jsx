import React from "react"
import logo from "../assets/Anbin_Aravanaippu_Arakkattalai_Logo.png"
const DonateFooter = () => {
    return (
        <footer className="py-4 footer text-white ">
            <div className="px-5">
                <div className=" d-flex flex-column flex-lg-row justify-content-around align-items-center gap-3">
                    {/* Logo + Name */}
                    {/* <div className="col-md-4 text-center text-md-start mb-3 mb-md-0"> */}
                    <img src={logo} alt="NGO Logo" className="footer-logo" style={{ width: "50px", marginRight: "10px" }} />
                    <span className="fw-bolder fst-italic text-center">அன்பின் அரவணைப்பு அறக்கட்டளை</span>

                    {/* Copyright */}
                    {/* <div className="col-md-4 text-center text-md-end fw-bold copy-right d-lg-flex justify-content-center "> */}
                    <small className="fw-bold">Copyright © {new Date().getFullYear()}. All Rights Reserved.</small>
                    {/* </div> */}
                </div>
            </div>
        </footer>
    )
}

export default DonateFooter
