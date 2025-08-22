import React from "react"
import "../CSS/Profile.css"
import Vortex from "./Vortex"
import group_pic from "../assets/Group Pic.png"
import grass from "../assets/grass.png"
import thoranam from "../assets/thoranam.png"

const Profile = () => {
    return (
        <>
            <Vortex particleCount={50} colors={["#f228abff", "#00ccff"]} speedFactor={0.02} />
            <div className="profile">
                <img src={grass} alt="" id="grass1" />
                <img src={grass} alt="" id="grass2" />
                <img src={thoranam} alt="" id="thoranam0" />
                <img src={thoranam} alt="" id="thoranam1" />
                <img src={thoranam} alt="" id="thoranam2" />
                <img src={thoranam} alt="" id="thoranam3" />
                <img src={thoranam} alt="" id="thoranam4" />
                <img src={thoranam} alt="" id="thoranam5" />
                <img src={thoranam} alt="" id="thoranam6" />
                <img src={thoranam} alt="" id="thoranam7" />
                <div className="profile-left">
                    <h1>அன்பின் அரவணைப்பு அறக்கட்டளை</h1>
                    <p>
                        அனைவருக்கும் அனைத்தும் கிடைக்க வேண்டும், <br />
                        அனைவரும் சம நிலையில் வாழ வேண்டும்.
                    </p>
                </div>
                <div className="profile-right">
                    <img src={group_pic} alt="" />
                </div>
            </div>
        </>
    )
}

export default Profile
