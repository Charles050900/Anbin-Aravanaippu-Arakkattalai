import React from "react"
import logo from "../assets/AnbinAravanaippuArakkattalaiLogo.png"
import "../CSS/Footer.css"
const Footer = ({ scrollToSection, refs }) => {
    return (
        <footer className="py-4 footer text-white">
            <div className="px-5">
                <div className="row align-items-center">
                    {/* Logo + Name */}
                    <div className="col-md-4 text-center text-md-start mb-3 mb-md-0 ">
                        <div className="d-flex  flex-column flex-lg-row justify-content-center align-items-center gap-3">
                            <img src={logo} alt="NGO Logo" className="footer-logo" style={{ width: "50px", marginRight: "10px" }} />
                            <span className="fw-bolder fst-italic ">அன்பின் அரவணைப்பு அறக்கட்டளை</span>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="col-md-4 mb-3 mb-md-0 ">
                        <ul className="nav justify-content-center ">
                            <li className="nav-item me-4 ">
                                <a className="nav-link text-dark fw-medium text-white" onClick={() => scrollToSection(refs.NavRef)}>
                                    Home
                                </a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link text-dark fw-medium text-white" onClick={() => scrollToSection(refs.AboutRef)}>
                                    About
                                </a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link text-dark fw-medium text-white" onClick={() => scrollToSection(refs.VisionRef)}>
                                    Vision
                                </a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link text-dark fw-medium text-white" onClick={() => scrollToSection(refs.MissionRef)}>
                                    Mission
                                </a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link text-dark fw-medium text-white" onClick={() => scrollToSection(refs.ServiceRef)}>
                                    Services
                                </a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link text-dark fw-medium text-white" onClick={() => scrollToSection(refs.VolunteerRef)}>
                                    Volunteer
                                </a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link text-dark fw-medium text-white" onClick={() => scrollToSection(refs.ContactRef)}>
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link text-dark fw-medium text-white" onClick={() => scrollToSection(refs.DonateRef)}>
                                    Donate
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Copyright */}
                    <div className="col-md-4 text-center text-md-end fw-bold copy-right d-lg-flex justify-content-center ">
                        <small>Copyright © {new Date().getFullYear()}. All Rights Reserved.</small>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
