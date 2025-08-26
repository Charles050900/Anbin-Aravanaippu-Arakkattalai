import React, { useEffect, useRef, useState } from "react"
import "../CSS/Details.css"
import pic1 from "../assets/Anbin Aravanaippu Arakkattalai Logo.png"
import pic2 from "../assets/Group.jpg"
import pic3 from "../assets/About.jpg"
import pic4 from "../assets/Profile.jpg"
import title from "../assets/Profile.png"

const Details = () => {
    const leftRef = useRef(null)
    const rightRef = useRef(null)

    const [leftVisible, setLeftVisible] = useState(false)
    const [rightVisible, setRightVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight

            // Left element visibility
            const leftTop = leftRef.current.getBoundingClientRect().top
            if (leftTop < windowHeight - 50) setLeftVisible(true)

            // Right element visibility
            const rightTop = rightRef.current.getBoundingClientRect().top
            if (rightTop < windowHeight - 50) setRightVisible(true)
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll() // trigger on load

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="details">
            <div ref={leftRef} className={`details-left floating-up ${leftVisible ? "visible" : ""}`}>
                <img src={title} alt="" />
                <table cellSpacing={5}>
                    <tbody>
                        <tr>
                            <td>Name of the Institution</td>
                            <td>ANBIN ARAVANAIPPU ARAKKATTALAI</td>
                        </tr>
                        <tr>
                            <td>Type of Institution</td>
                            <td>TRUST</td>
                        </tr>
                        <tr>
                            <td> Name of the Head of the Institution with Designation</td>
                            <td>B.BOMBAI - CHAIRMAN</td>
                        </tr>
                        <tr>
                            <td> Address of the Institution</td>
                            <td>No. 91, Mettu Street, Ekanapuram (Vill & Post), Ekanapuram, Sriperumbudur Taluk, Kanchipuram District - 631 553.</td>
                        </tr>
                        <tr>
                            <td>Name of the city</td>
                            <td>Kanchipuram</td>
                        </tr>
                        <tr>
                            <td>Name of the State</td>
                            <td>Tamil Nadu</td>
                        </tr>
                        <tr>
                            <td>Name of the Country</td>
                            <td>India</td>
                        </tr>
                        <tr>
                            <td>Contact Details</td>
                            <td>
                                <ul>
                                    <li>Name : B.Kawaskar - 9994216991 / 9900157744</li>

                                    <li>Mail Id: aaa28102020@gmail.com</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Date of Start this Service</td>
                            <td>31/10/2016</td>
                        </tr>
                        <tr>
                            <td>Date of Establised this Service</td>
                            <td>28/10/2020</td>
                        </tr>
                        <tr>
                            <td>Registration. No</td>
                            <td>Govt.Reg.NO : 48/2020</td>
                        </tr>
                        <tr>
                            <td>PAN Card Number of Instituion</td>
                            <td>AAITA3406E (ANBIN ARAVANAIPPU)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div ref={rightRef} className={`details-right floating-up ${rightVisible ? "visible" : ""}`}>
                <div className="images">
                    <img src={pic1} alt="" className="profile-logo" />
                    <img src={pic2} alt="" className="pic" />
                    <img src={pic3} alt="" className="pic" />
                    <img src={pic4} alt="" className="pic" />
                </div>
            </div>
        </div>
    )
}

export default Details
