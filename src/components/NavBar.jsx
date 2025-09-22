import React, { useState, useEffect } from "react"
import logo from "../assets/Anbin Aravanaippu Arakkattalai Logo.png"
import "../CSS/NavBar.css"
import Vortex from "./Vortex"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

const NavBar = ({ scrollToSection, refs }) => {
    const [show, setShow] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY

            if (currentY < 50) {
                setShow(true) // always show near top
            } else if (currentY > lastScrollY + 10) {
                setShow(false) // scrolling down → hide
            } else if (currentY < lastScrollY - 10) {
                setShow(true) // scrolling up → show
            }

            setLastScrollY(currentY)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY])

    return (
        <nav className={`navbar navbar-expand-lg border-bottom border-3 border-primary fixed-top ${show ? "navbar--visible" : "navbar--hidden"}`}>
            <Vortex particleCount={50} colors={["#f228abff", "#0059ffff"]} speedFactor={0.02} />

            <div className="container-fluid">
                <div className="d-flex flex-column flex-md-row align-items-center gap-2">
                    <img src={logo} alt="Logo" height={60} className="logo" />
                    <div className="d-flex flex-column text-center">
                        <p className="mb-0 fs-5 flex-grow-1 trust-name trust-heading text-lg-center">அன்பின் அரவணைப்பு அறக்கட்டளை</p>
                        <p className="mb-0 trust-name text-lg-center trust-vision">அனைவருக்கும் அனைத்தும் கிடைக்க வேண்டும், அனைவரும் சம நிலையில் வாழ வேண்டும்.</p>
                    </div>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>

            <div className="collapse navbar-collapse me-3" id="navbarNav">
                <ul className="navbar-nav me-auto">
                    {[
                        { name: "Home", ref: refs.NavRef },
                        { name: "About", ref: refs.aboutRef },
                        { name: "Vision", ref: refs.VisionRef },
                        { name: "Mission", ref: refs.MissionRef },
                        { name: "Services", ref: refs.ServiceRef },
                        { name: "Volunteer", ref: refs.VolunteerRef },
                        { name: "Contact", ref: refs.ContactRef },
                        { name: "Donate", ref: refs.DonateRef },
                    ].map((item, idx) => (
                        <li className="nav-item" key={idx}>
                            <p className="nav-link mb-0 ms-0 px-3 d-flex justify-content-center" onClick={() => scrollToSection(item.ref)}>
                                {item.name}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* <div className="top-arrow bg-danger" onClick={() => scrollToSection(refs.NavRef)}>
                <FontAwesomeIcon icon={faArrowUp} bounce style={{ color: "#0d40a5ff" }} />
            </div> */}
        </nav>
    )
}

export default NavBar
