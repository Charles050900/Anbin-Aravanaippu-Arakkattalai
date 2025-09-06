import React, { useState } from "react"
import logo from "../assets/Anbin Aravanaippu Arakkattalai Logo.png"
import "../CSS/NavBar.css"
import Vortex from "./Vortex"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

const NavBar = ({ scrollToSection, refs }) => {
    return (
        <nav className="navbar navbar-expand-lg  border-bottom border-3 border-primary">
            <Vortex particleCount={50} colors={["#f228abff", "#0059ffff"]} speedFactor={0.02} />
            <div className="container-fluid">
                {/* Use a flex container to align the image and text */}
                <div className="d-flex flex-column flex-md-row align-items-center gap-2">
                    <img src={logo} alt="Logo" height={60} className="logo" />
                    <div className="d-flex flex-column text-center">
                        <p className="mb-0 fs-5 flex-grow-1 trust-name trust-heading text-lg-center ">அன்பின் அரவணைப்பு அறக்கட்டளை</p>
                        <p className="mb-0 trust-name text-lg-center trust-vision">அனைவருக்கும் அனைத்தும் கிடைக்க வேண்டும், அனைவரும் சம நிலையில் வாழ வேண்டும்.</p>
                    </div>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
            </div>
            <div className="collapse navbar-collapse me-3" id="navbarNav">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <p className="nav-link mb-0 ms-0 px-3 d-flex justify-content-center" onClick={() => scrollToSection(refs.NavRef)}>
                            Home
                        </p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link mb-0 ms-0 px-3 d-flex justify-content-center" onClick={() => scrollToSection(refs.aboutRef)}>
                            About
                        </p>
                    </li>
                    {/* <li className="nav-item">
                        <p className="nav-link mb-0 ms-0 px-3 d-flex justify-content-center" onClick={() => scrollToSection(refs.ProfileRef)}>
                            Profile
                        </p>
                    </li> */}
                    <li className="nav-item">
                        <p className="nav-link mb-0 ms-0 px-3 d-flex justify-content-center" onClick={() => scrollToSection(refs.VisionRef)}>
                            Vision
                        </p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link mb-0 ms-0 px-3 d-flex justify-content-center" onClick={() => scrollToSection(refs.MissionRef)}>
                            Mission
                        </p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link mb-0 ms-0 px-3 d-flex justify-content-center" onClick={() => scrollToSection(refs.ServiceRef)}>
                            Services
                        </p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link mb-0 ms-0 px-3 d-flex justify-content-center" onClick={() => scrollToSection(refs.VolunteerRef)}>
                            Volunteer
                        </p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link mb-0 ms-0 px-3 d-flex justify-content-center" onClick={() => scrollToSection(refs.ContactRef)}>
                            Contact
                        </p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link mb-0 ms-0 px-3 d-flex justify-content-center">Donate</p>
                    </li>
                </ul>
            </div>
            <div className="top-arrow bg-white" onClick={() => scrollToSection(refs.NavRef)}>
                <FontAwesomeIcon icon={faArrowUp} bounce style={{ color: "#0d40a5ff" }} />
            </div>
        </nav>
    )
}

export default NavBar
