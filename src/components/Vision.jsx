import "../CSS/Vision.css"
import vision1 from "../assets/vision1.jpeg"
import vision2 from "../assets/vision2.jpeg"
import vision3 from "../assets/vision3.jpeg"
import vision4 from "../assets/vision4.jpeg"
import vision5 from "../assets/vision5.jpeg"
import vision6 from "../assets/vision6.jpg"
import vision7 from "../assets/vision7.jpg"
import vision8 from "../assets/vision8.jpg"
import vision9 from "../assets/vision9.jpg"
import vision10 from "../assets/vision10.jpg"
import vision11 from "../assets/vision11.jpg"
import vision12 from "../assets/vision12.jpg"
import vision13 from "../assets/vision13.jpg"
import vision14 from "../assets/vision14.jpg"
import vision15 from "../assets/vision15.jpg"
import vision16 from "../assets/vision16.jpg"
import vision17 from "../assets/vision17.jpg"
import vision18 from "../assets/vision18.jpg"
import vision19 from "../assets/vision19.jpg"
import vision20 from "../assets/vision20.jpg"
// import ribbon from "../assets/Ribbon.png"
import title from "../assets/Vision.png"
import { useEffect, useRef, useState } from "react"

const Vision = () => {
    const leftRef = useRef(null)
    // const rightRef = useRef(null)

    const [leftVisible, setLeftVisible] = useState(false)
    // const [rightVisible, setRightVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight

            // Left element visibility
            const leftTop = leftRef.current.getBoundingClientRect().top
            if (leftTop < windowHeight - 50) setLeftVisible(true)

            // // Right element visibility
            // const rightTop = rightRef.current.getBoundingClientRect().top
            // if (rightTop < windowHeight - 50) setRightVisible(true)
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll() // trigger on load

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <div className="vision text-white pb-5">
            {/* <h1>Vision</h1> */}
            <div ref={leftRef} className={`vision-notes floating-up ${leftVisible ? "visible" : ""}`}>
                <img src={title} alt="" className="mb-4" />
                <p className="fw-bold">Everyone should have access to everything and everyone should live equally.</p>
                <p className="fw-bold">அனைவருக்கும் அனைத்தும் கிடைக்கவேண்டும், அனைவரும் சமநிலையில் வாழவேண்டும்</p>
            </div>
            <div className="vision-pics mt-5">
                <div className="scroll-track">
                    <img src={vision1} alt="" />
                    <img src={vision2} alt="" />
                    <img src={vision3} alt="" />
                    <img src={vision4} alt="" />
                    <img src={vision5} alt="" />
                    <img src={vision6} alt="" />
                    <img src={vision7} alt="" />
                    <img src={vision8} alt="" />
                    <img src={vision9} alt="" />
                    <img src={vision10} alt="" />
                    <img src={vision1} alt="" />
                    <img src={vision2} alt="" />
                    <img src={vision3} alt="" />
                    <img src={vision4} alt="" />
                    <img src={vision5} alt="" />
                    <img src={vision6} alt="" />
                    <img src={vision7} alt="" />
                    <img src={vision8} alt="" />
                    <img src={vision9} alt="" />
                    <img src={vision10} alt="" />
                </div>
            </div>

            <div className="vision-pics mt-5">
                <div className="scroll-track-right">
                    <img src={vision11} alt="" />
                    <img src={vision12} alt="" />
                    <img src={vision13} alt="" />
                    <img src={vision14} alt="" />
                    <img src={vision15} alt="" />
                    <img src={vision16} alt="" />
                    <img src={vision17} alt="" />
                    <img src={vision18} alt="" />
                    <img src={vision19} alt="" />
                    <img src={vision20} alt="" />
                    <img src={vision11} alt="" />
                    <img src={vision12} alt="" />
                    <img src={vision13} alt="" />
                    <img src={vision14} alt="" />
                    <img src={vision15} alt="" />
                    <img src={vision16} alt="" />
                    <img src={vision17} alt="" />
                    <img src={vision18} alt="" />
                    <img src={vision19} alt="" />
                    <img src={vision20} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Vision
