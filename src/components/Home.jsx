import NavBar from "./NavBar"
import Profile from "./Profile"
import About from "./About"
import Details from "./Details"
import Vision from "./Vision"
import Mission from "./Mission"
import { useRef } from "react"
import Service from "./Service"
// import Volunteer from "./Volunteer1"
import Volunteer1 from "./Volunteer1"
import Volunteer2 from "./Volunteer2"
import Clients from "./Clients"

const Home = () => {
    const NavRef = useRef(null)
    const HomeRef = useRef(null)
    const aboutRef = useRef(null)
    const ProfileRef = useRef(null)
    const VisionRef = useRef(null)
    const MissionRef = useRef(null)
    const ServiceRef = useRef(null)
    const VolunteerRef = useRef(null)

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" })
    }
    return (
        <>
            <div ref={NavRef}>
                <NavBar scrollToSection={scrollToSection} refs={{ NavRef, HomeRef, aboutRef, ProfileRef, VisionRef, MissionRef, ServiceRef, VolunteerRef }} />
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
            <div ref={MissionRef}>
                <Mission />
            </div>
            <div ref={ServiceRef}>
                <Service />
            </div>
            <div ref={VolunteerRef}>
                <Volunteer1 />
            </div>
            <Volunteer2 />
            <Clients />
        </>
    )
}

export default Home
