import React, { useEffect, useRef, useState } from "react"
import about_image1 from "../assets/About2.jpg"
import about_image2 from "../assets/About.jpg"
import "../CSS/About.css"
import title from "../assets/About.png"

const About = () => {


    return (
        <div className="about  pt-4 px-5 text-white">
            <div className={`about-right p-3 col-12 col-lg-12 d-lg-flex flex-column justify-content-center align-items-center `}>
                <img src={title} alt="" className="mb-4 about-title" />
            </div>
            <div className=" col-12 d-lg-flex justify-content-center align-items-center gap-lg-5 p-5">
                <p id="p2" className="text-center mb-5 col-12 col-lg-8">
                    அன்பின் அரவணைப்பு அறக்கட்டளை நிர்வாக அறங்காவலர் திரு.பொம்பாய் அவர்களால் 28/10/2020 அன்று ஏகனாபுரம் கிராமம், காஞ்சிபுரம் மாவட்டத்தில் நிறுவப்பட்டுள்ளது. இதன் நோக்கம் நலிந்த
                    வறுமையில் வாடும் மக்கள் நல்வாழ்வு பெறவேண்டும் என்பதற்காக உருவாக்கப்பட்டுள்ளது.
                </p>
                <img src={about_image1} alt="" className="img-fluid rounded-5 about-img-1"/>
            </div>
            <div className=" col-12 d-lg-flex justify-content-center align-items-center gap-lg-5 p-5">
                <img src={about_image2} alt="" className="img-fluid rounded-5 mb-5" />
                <p id="p1" className="text-center  mb-5 col-12 col-lg-8 fw-bold">
                    Anbin Aravanaippu Arakkattalai was Established by Managing Trustee Mr.B.Bombai from 2020, October 28th at the place of Ekanapuram Village Kanchipuram District. Various programs are
                    conducted by our staffs in different villages. AAA was created for the rural uneducated people who are suffered by their poor situation.
                </p>
            </div>
        </div>
    )
}

export default About
