import React, { useState } from "react"
import logo from "../assets/Anbin Aravanaippu Arakkattalai Logo.png"
import "../CSS/NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav>
            {/* Left section */}
            <div className="nav-left">
                <img src={logo} alt="Logo" />
                <h1>அன்பின் அரவணைப்பு அறக்கட்டளை</h1>
            </div>

            {/* Right section */}
            <div className={`nav-right ${menuOpen ? "open" : ""}`}>
                <p>Home</p>
                <p>About</p>
                <p>Profile</p>
                <p>Vision</p>
                <p>Mission</p>
                <p>Services</p>
                <p>Gallery</p>
                <p>Contact</p>
            </div>

            {/* Hamburger Icon */}
            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FontAwesomeIcon icon={faXmark} style={{ color: "#fff" }} size="lg" /> : <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} size="lg" />}
            </div>
        </nav>
    )
}

export default NavBar
