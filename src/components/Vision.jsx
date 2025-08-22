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
import ribbon from "../assets/Ribbon.png"

const Vision = () => {
    return (
        <div className="vision">
            <h1>Vision</h1>
            <img src={ribbon} alt="" id="ribbon" />
            <div className="vision-notes">
                <p>Everyone should have access to everything and everyone should live equally.</p>
                <p>அனைவருக்கும் அனைத்தும் கிடைக்கவேண்டும், அனைவரும் சமநிலையில் வாழவேண்டும்</p>
            </div>
            <div className="vision-pics">
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
        </div>
    )
}

export default Vision
