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
import vision21 from "../assets/vision21.jpg"
import vision22 from "../assets/vision22.jpg"
import vision23 from "../assets/vision23.jpg"
import vision24 from "../assets/vision24.jpg"
import vision25 from "../assets/vision25.jpg"
import vision26 from "../assets/vision26.jpg"
import vision27 from "../assets/vision27.jpg"
import vision28 from "../assets/vision28.jpg"
import vision29 from "../assets/vision29.jpg"
import vision30 from "../assets/vision30.jpg"
import vision31 from "../assets/vision31.jpg"
import vision32 from "../assets/vision32.jpg"
import vision33 from "../assets/vision33.jpg"
import vision34 from "../assets/vision34.jpg"
import vision35 from "../assets/vision35.jpg"
import vision36 from "../assets/vision36.jpg"
// import ribbon from "../assets/Ribbon.png"
import title from "../assets/Vision.png"
import { useEffect, useRef, useState } from "react"
import VisionScrollFromRight from "./VisionScrollFromRight"
import VisionScrollFromLeft from "./VisionScrollFromLeft"

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

            // const rightTop = rightRef.current.getBoundingClientRect().top
            // if (rightTop < windowHeight - 50) setRightVisible(true)
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll() // trigger on load

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const images1 = [vision1, vision2, vision3, vision4, vision5, vision6, vision7, vision8, vision9, vision10]
    const images2 = [vision11, vision12, vision13, vision14, vision15, vision16, vision17, vision18, vision19, vision20]
    const images3 = [vision21, vision22, vision23, vision24, vision25, vision26, vision27, vision28, vision29, vision30, vision31, vision32, vision33, vision34, vision35, vision36]
    return (
        <div className="vision  text-white pb-5 px-4 p-lg-5">
            {/* <h1>Vision</h1> */}
            <div ref={leftRef} className={`vision-notes floating-up ${leftVisible ? "visible" : ""}`}>
                <img src={title} alt="" className="mb-4" />
                <p className="fw-bold">Everyone should have access to everything and everyone should live equally.</p>
                <p className="fw-bold">அனைவருக்கும் அனைத்தும் கிடைக்கவேண்டும், அனைவரும் சமநிலையில் வாழவேண்டும்</p>
            </div>

            <VisionScrollFromRight images={images1} speed={1} />
            <VisionScrollFromLeft images={images2} speed={2} />
            <VisionScrollFromRight images={images3} speed={1} />
        </div>
    )
}

export default Vision
