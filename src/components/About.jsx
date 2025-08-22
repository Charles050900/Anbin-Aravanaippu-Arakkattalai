import React from "react"
import about_image from "../assets/About.jpg"
import "../CSS/About.css"
import ribbon from '../assets/Ribbon.png'

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <img src={about_image} alt="" />
            </div>
            <div className="about-right">
                <h1>About</h1>
                <img src={ribbon} alt="" />
                <p id="p1">
                    Anbin Aravanaippu Arakkattalai was Established by Managing Trustee Mr.B.Bombai from 2020, October 28th at the place of Ekanapuram Village Kanchipuram District. Various programs are
                    conducted by our staffs in different villages. AAA was created for the rural uneducated people who are suffered by their poor situation.
                </p>
                <p id="p2">
                    அன்பின் அரவணைப்பு அறக்கட்டளை நிர்வாக அறங்காவலர் திரு.பொம்பாய் அவர்களால் 28/10/2020 அன்று ஏகனாபுரம் கிராமம், காஞ்சிபுரம் மாவட்டத்தில் நிறுவப்பட்டுள்ளது. இதன் நோக்கம் நலிந்த
                    வறுமையில் வாடும் மக்கள் நல்வாழ்வு பெறவேண்டும் என்பதற்காக உருவாக்கப்பட்டுள்ளது.
                </p>
            </div>
        </div>
    )
}

export default About
