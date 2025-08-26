import NavBar from "./NavBar"
import Profile from "./Profile"
import About from "./About"
import Details from "./Details"
import Vision from "./Vision"
import Mission from "./Mission"
import { useRef } from "react"

const Home = () => {
    const NavRef = useRef(null)
    const HomeRef = useRef(null)
    const aboutRef = useRef(null)
    const ProfileRef = useRef(null)
    const VisionRef = useRef(null)

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" })
    }
    return (
        <>
            <div ref={NavRef}>
                <NavBar scrollToSection={scrollToSection} refs={{ NavRef, HomeRef, aboutRef, ProfileRef, VisionRef }} />
            </div>
            <div ref={HomeRef}>
                <Profile />
            </div>
            <div ref={aboutRef}>
                <About />
            </div>
            {/* <div ref={ProfileRef}>
                <Details />
            </div> */}
            <div ref={VisionRef}>
                <Vision />
            </div>
            <Mission />
        </>
    )
}

export default Home
