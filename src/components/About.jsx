import React, { useEffect, useRef, useState } from "react"
import about_image from "../assets/About.jpg"
import "../CSS/About.css"
import title from "../assets/About.png"

const About = () => {
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
        <div className="about row py-4 px-5 text-white">
            <div ref={rightRef} className={`about-right p-3 col-12 col-lg-8 d-lg-flex flex-column justify-content-center align-items-center floating-up ${rightVisible ? "visible" : ""}`}>
                <img src={title} alt="" className="mb-4 " />
                <p id="p2" className="text-center mb-5">
                    அன்பின் அரவணைப்பு அறக்கட்டளை நிர்வாக அறங்காவலர் திரு.பொம்பாய் அவர்களால் 28/10/2020 அன்று ஏகனாபுரம் கிராமம், காஞ்சிபுரம் மாவட்டத்தில் நிறுவப்பட்டுள்ளது. இதன் நோக்கம் நலிந்த
                    வறுமையில் வாடும் மக்கள் நல்வாழ்வு பெறவேண்டும் என்பதற்காக உருவாக்கப்பட்டுள்ளது.
                </p>
                <p id="p1" className="text-center fw-bold">
                    Anbin Aravanaippu Arakkattalai was Established by Managing Trustee Mr.B.Bombai from 2020, October 28th at the place of Ekanapuram Village Kanchipuram District. Various programs are
                    conducted by our staffs in different villages. AAA was created for the rural uneducated people who are suffered by their poor situation.
                </p>
            </div>
            <div ref={leftRef} className={`about-left col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center floating-up ${leftVisible ? "visible" : ""}`}>
                <img src={about_image} alt="" className="img-fluid rounded-5" />
            </div>
        </div>
    )
}

export default About
