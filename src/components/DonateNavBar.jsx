import React from "react"
import Vortex from "./Vortex"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowUp } from "@fortawesome/free-solid-svg-icons"
import logo from "../assets/Anbin_Aravanaippu_Arakkattalai_Logo.png"
import { useNavigate } from "react-router-dom"

const DonateNavBar = () => {
    let navigate = useNavigate()

    let fundProviousPage = () => {
        navigate(-1)
    }

    return (
        <nav className="navbar navbar-expand-lg  border-bottom border-3 border-primary">
            <Vortex particleCount={50} colors={["#f228abff", "#0059ffff"]} speedFactor={0.02} />

            <div className="container-fluid">
                {/* Use a flex container to align the image and text */}
                <div className="d-flex flex-column flex-lg-row justify-content-lg-between align-items-center gap-2 w-100 ">
                    <div className="donate-fund-previous-page  d-flex justify-content-center align-items-center fw-bold gap-2" onClick={fundProviousPage}>
                        <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#0d40a5ff" }} />
                        <p className=" m-0" style={{ color: "#0d40a5ff", cursor: "pointer" }}>
                            Previous Page
                        </p>
                    </div>
                    <img src={logo} alt="Logo" height={60} className="" />
                    <p className="mb-0 fs-5  trust-name trust-heading text-center ">அன்பின் அரவணைப்பு அறக்கட்டளை</p>

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
