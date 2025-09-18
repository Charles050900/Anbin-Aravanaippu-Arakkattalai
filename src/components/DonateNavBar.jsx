import React from "react"
import Vortex from "./Vortex"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import logo from "../assets/Anbin Aravanaippu Arakkattalai Logo.png"

const DonateNavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg  border-bottom border-3 border-primary">
            <Vortex particleCount={50} colors={["#f228abff", "#0059ffff"]} speedFactor={0.02} />
            <div className="container-fluid">
                {/* Use a flex container to align the image and text */}
                <div className="d-flex flex-column flex-lg-row justify-content-lg-around align-items-center gap-2 w-100 ">
                    <p className="mb-0 fs-5  trust-name trust-heading text-center ">அன்பின் அரவணைப்பு அறக்கட்டளை</p>
                    <img src={logo} alt="Logo" height={60} className="" />

                    <p className="mb-0 trust-name text-center trust-vision">
                        அனைவருக்கும் அனைத்தும் கிடைக்க வேண்டும்,
                        <br /> அனைவரும் சம நிலையில் வாழ வேண்டும்.
                    </p>
                </div>

                
            </div>
        </nav>
    )
}

export default DonateNavBar
