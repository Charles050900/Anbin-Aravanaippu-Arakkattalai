import React from "react"
import logo from "../assets/Anbin Aravanaippu Arakkattalai Logo.png"
import "../CSS/NavBar.css"

const NavBar = () => {
    return (
        <nav>
            <div className="nav-left">
                <img src={logo} alt="Logo" />
                <h1>அன்பின் அரவணைப்பு அறக்கட்டளை</h1>
            </div>

            <div className="nav-right">
                <p>Home</p>
                <p>About</p>
                <p>Profile</p>
                <p>Vision</p>
                <p>Mission</p>
                <p>Services</p>
                <p>Gallery</p>
                <p>Contact</p>
            </div>
        </nav>
    )
}

export default NavBar
