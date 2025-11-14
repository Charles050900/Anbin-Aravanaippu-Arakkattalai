import React from "react"
import title from "../assets/Services.png"
import "../CSS/Service.css"
import NightStudy from "../assets/NightStudy.jpg"
import FreeEquipment from "../assets/FreeEquipment.jpg"
import FreeProjector from "../assets/Projector.jpg"
import FreeSelfDefence from "../assets/FreeSelfDefence.jpg"
import service5 from "../assets/service5.jpg"
import service6 from "../assets/service6.jpg"
import service7 from "../assets/service7.jpg"
import service8 from "../assets/service8.jpg"
import service9 from "../assets/service9.jpg"
import service10 from "../assets/service10.jpg"
import service11 from "../assets/service11.jpg"
import service12 from "../assets/service12.jpg"
import service13 from "../assets/service13.jpg"
import service14 from "../assets/service14.jpg"
import service15 from "../assets/service15.jpg"
import service16 from "../assets/service16.jpg"

const Service = () => {
    return (
        <div className="service d-flex flex-column p-4">
            <img src={title} alt="service" className="img-fluid" style={{ height: "100px", objectFit: "contain" }} />
            <div className="row row-cols-1 row-cols-md-4 g-5 p-5">
                {/* Card 1 */}
                <div className="flip-container ">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={NightStudy} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">மாணவர்களுக்கு இலவச மாலைநேர கல்வி</h5>
                                    <h5 className="card-title text-center">Free Evening Education</h5>
                                </div>
                            </div>
                        </div>

                        <div className="flip-back">
                            <div className="card h-100 border-3 border-light">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    {/* <h5 className="card-title">Details</h5> */}
                                    <p className="card-text service-details">
                                        மாலை நேர பாடசாலையில் படிக்கும் மாணவர்களின் பெற்றோர்களை அழைத்து மாணவர்களை ஊக்கப்படுத்திய தருணம். அவர்களுக்கு போட்டிகள் நடத்தப்பட்டு பரிசுகள் வழங்கப்பட்டன.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={FreeEquipment} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">மாணவர்களுக்கு இலவச உபகரணங்கள்</h5>
                                    <h5 className="card-title text-center">Free Equipment to students</h5>
                                </div>
                            </div>
                        </div>

                        <div className="flip-back">
                            <div className="card h-100 border-3 border-light">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    {/* <h5 className="card-title">Details</h5> */}
                                    <p className="card-text service-details">சிறுமாங்காடு கிராமத்தில் இருக்கும் அரசு ஆரம்ப நிலை பள்ளி மாணவர்களுக்கு தேவையான உபகரணங்கள் வழங்கப்பட்டது.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={FreeProjector} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">மாணவர்களுக்கு இலவச படமெறிகருவி</h5>
                                    <h5 className="card-title text-center">Free projector for students</h5>
                                </div>
                            </div>
                        </div>

                        <div className="flip-back">
                            <div className="card h-100 border-3 border-light">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    {/* <h5 className="card-title">Details</h5> */}
                                    <p className="card-text service-details">
                                        கல்லம்பேடு கிராமத்தில் உள்ள RCM உயர்நிலைப் பள்ளிக்கு மாணவர்கள் பயன்படுத்த படமெறிகருவி வழங்கப்பட்டது. இதன் மூலம் ஆசிரியர்களால் மாணவர்களுக்கு சிறந்த முறையில்
                                        பயிற்சி வழங்கப்பட்டு வருகின்றது.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 4 */}
                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={FreeSelfDefence} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">மாணவர்களுக்கு இலவச சுய பாதுகாப்பு பயிற்சி</h5>
                                    <h5 className="card-title text-center">Free Self-Defence Training</h5>
                                </div>
                            </div>
                        </div>

                        <div className="flip-back">
                            <div className="card h-100 border-3 border-light">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    {/* <h5 className="card-title">Details</h5> */}

                                    <p className="card-text service-details">
                                        கிராமபுற மாணவர்களுக்கு நமது அறக்கட்டளை மூலமாக பெண்கள் மற்றும் ஆண் குழந்தைகள் பாதுகாப்பு கருதி தற்காப்பு கலை பயிற்சி ஏகனாபுரம் கிராமத்தில் சுற்று வட்டாரத்தில்
                                        உள்ள அனைவருக்கும் பயிற்சி வழங்கப்படுகின்றது.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 5 */}
                <div className="flip-container ">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={service5} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">மாணவர்களுக்காண கல்வி விழிப்புணர்வு</h5>
                                    <h5 className="card-title text-center">Education Awareness for Students</h5>
                                </div>
                            </div>
                        </div>

                        <div className="flip-back">
                            <div className="card h-100 border-3 border-light">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    {/* <h5 className="card-title">Details</h5> */}
                                    <p className="card-text service-details">
                                        இருளர் பகுதியில் உள்ள குழந்தைகளை படிக்க வைக்க அவர்களை ஊக்கப்படுத்தும் விதமாக அணிச்சல் (Cake) வெட்டி கொண்டாடி அவர்களுக்கு கல்வி பற்றிய போதனைகள் வழங்கப்பட்டு
                                        வருகின்றது .
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 6 */}
                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={service6} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">மாணவருக்கான பள்ளி கல்வி கட்டண உதவி</h5>
                                    <h5 className="card-title text-center">Support for Students’ School Fees</h5>
                                </div>
                            </div>
                        </div>

                        <div className="flip-back">
                            <div className="card h-100 border-3 border-light">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    {/* <h5 className="card-title">Details</h5> */}
                                    <p className="card-text service-details ">
                                        O.நித்திஷ் என்ற மாணவரின் பெற்றோர்க்கு வேலை திடீர் என்று போகையில் அவர்கள் கல்வி கட்டணம் செலுத்த முடியாத சூழ்நிலையில் நமது அறக்கட்டளை அவருடைய கல்விக்காக காசோலை
                                        வழங்கியது.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 7 */}
                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={service7} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">பள்ளி மாணவர்களை ஊக்குவித்தல்</h5>
                                    <h5 className="card-title text-center">Encouraging School Students</h5>
                                </div>
                            </div>
                        </div>

                        <div className="flip-back">
                            <div className="card h-100 border-3 border-light">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    {/* <h5 className="card-title">Details</h5> */}
                                    <p className="card-text service-details ">பூவனூர் கிராமத்தில் மாணவர்களை படிக்க உதவும் உபகரணங்கள் வழங்கி ஊக்கப்படுத்திய தருணம்.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 8 */}
                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={service8} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">முதியோரின் நலனுக்காக உடை உதவி</h5>
                                    <h5 className="card-title text-center">Clothing Support for the Elderly</h5>
                                </div>
                            </div>
                        </div>

                        <div className="flip-back">
                            <div className="card h-100 border-3 border-light">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    {/* <h5 className="card-title">Details</h5> */}
                                    <p className="card-text service-details">விடுதிகளில் இருக்கும் முதியர்வர்களுக்கு அடிக்கடி உடைகள் வழங்கப்பட்டு வருகின்றது.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 9 */}
                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={service9} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">விளையாட்டு வீரர்களை ஊக்குவித்தல்</h5>
                                    <h5 className="card-title text-center">Motivating Players for Success</h5>
                                </div>
                            </div>
                        </div>

                        <div className="flip-back">
                            <div className="card h-100 border-3 border-light">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    {/* <h5 className="card-title">Details</h5> */}
                                    <p className="card-text service-details">தண்டலம் கிராமத்தில் இளைஞர்கள் சிறந்து விளங்க விளையாட்டு உபகரணங்கள் வழங்கப்பட்டது.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 10 */}
                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={service10} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">முதியோருக்கான வீடுகளை சீரமைத்தல்</h5>
                                    <h5 className="card-title text-center">Rebuilding Home for Senior</h5>
                                </div>
                            </div>
                        </div>

                        <div className="flip-back">
                            <div className="card h-100 border-3 border-light">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    {/* <h5 className="card-title">Details</h5> */}
                                    <p className="card-text service-details ">கல்லம்பேடு கிராமத்தில் வசித்து வந்த மூதாடிக்கு அவரின் வீட்டு கூரை சீரமைத்து தரப்பட்டது. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 11 */}
                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={service11} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">மாணவர்களுக்கு இலவச மாலைநேர கல்வி</h5>
                                    <h5 className="card-title text-center">Free Evening Education</h5>
                                </div>
                            </div>
                        </div>

                        <div className="flip-back">
                            <div className="card h-100 border-3 border-light">
                                <div className="card-body d-flex flex-column justify-content-start align-items-center overflow-scroll ">
                                    {/* <h5 className="card-title">Details</h5> */}
                                    <p className="card-text service-details  ">
                                        பூவனூர் கிராமத்தில் செங்கல் சூளையில் வேலை செய்யும் பெற்றோர்கள் அவர்களுடைய குழந்தைகளை படிக்க வைக்காமல் அவர்கள் பெற்ற குழந்தைகளை வீட்டில் வைத்து பார்த்து கொள்ள
                                        அவர்களை பள்ளிக்கு அனுப்புவதில்லை இவர்களை போன்ற குழந்தைகளுக்கு அவர்கள் படிக்க மாலை நேர பாடசாலை நடத்தப்படுகின்றது ஏகனாபுரம் மற்றும் குணகரம்பாக்கம் கிராமங்களில்
                                        அரசு பள்ளி மாணவர்களுக்கு இலவச மாலை நேர சிறப்பு வகுப்புகள் நடத்தப்படுகின்றது.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 12 */}
                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={service12} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">மாணவருக்கான பள்ளி கல்வி கட்டண உதவி</h5>
                                    <h5 className="card-title text-center">Support for Students’ School Fees</h5>
                                </div>
                            </div>
                        </div>

                        <div className="flip-back">
                            <div className="card h-100 border-3 border-light">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    {/* <h5 className="card-title">Details</h5> */}
                                    <p className="card-text service-details ">
                                        மாணவரின் பெற்றோர்க்கு வேலை திடீர் என்று போகையில் அவர்கள் கல்வி கட்டணம் செலுத்த முடியாத சூழ்நிலையில் நமது அறக்கட்டளை அவருடைய கல்விக்காக காசோலை வழங்கியது.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 13 */}
                <div className="flip-container ">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={service13} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">சிறுவர்களுக்கு உணவு விருந்து</h5>
                                    <h5 className="card-title text-center">Giving Food, Bringing Smiles to Children</h5>
                                </div>
                            </div>
                        </div>

                        <div className="flip-back">
                            <div className="card h-100 border-3 border-light">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    {/* <h5 className="card-title">Details</h5> */}
                                    <p className="card-text service-details">சிறப்பு குணம் மற்றும் திறமை கொண்ட மாணவர்களுக்கு விருந்து வழங்கப்பட்டது.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 14 */}
                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={service14} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">கராத்தே மாணவர்களுக்கு பரிசளிப்பு விழா</h5>
                                    <h5 className="card-title text-center">Rewarding Karate Students for Their Outstanding Performance</h5>
                                </div>
                            </div>
                        </div>

                        <div className="flip-back">
                            <div className="card h-100 border-3 border-light">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    {/* <h5 className="card-title">Details</h5> */}
                                    <p className="card-text service-details ">நமது அறக்கட்டளையில் பயிற்சிபெறும் கராத்தே மாணவர்களுக்கு சான்றிதழ் மற்றும் பரிசு வழங்கப்பட்டது. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 15 */}
                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={service15} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">மாற்றுத்திறனாளிகளுக்கான நிதி உதவி</h5>
                                    <h5 className="card-title text-center">Financial Support for Differently-Abled</h5>
                                </div>
                            </div>
                        </div>

                        <div className="flip-back">
                            <div className="card h-100 border-3 border-light">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    {/* <h5 className="card-title">Details</h5> */}
                                    <p className="card-text service-details ">
                                        பிறந்ததில் இருந்து காது கேட்காமல், வாய் பேச முடியாமல் தன் அடிப்படை தேவைகளை கூட பூர்த்தி செய்து கொள்ள முடியாதவரை பராமரிப்பதற்காக காசோலை வழக்கப்பட்டது.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 16 */}
                <div className="flip-container">
                    <div className="flip-card">
                        <div className="flip-front">
                            <div className="card fixed-card">
                                <img src={service16} className="card-img-top fixed-img" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title text-center">மாணவர்களுக்கு இலவச சுய பாதுகாப்பு பயிற்சி</h5>
                                    <h5 className="card-title text-center">Empowering Students Through Free Self-Defense Training</h5>
                                </div>
                            </div>
                        </div>

                        <div className="flip-back">
                            <div className="card h-100 border-3 border-light">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    {/* <h5 className="card-title">Details</h5> */}
                                    <p className="card-text service-details ">
                                        கிராமபுற மாணவர்களுக்கு நமது அறக்கட்டளை மூலமாக பெண்கள் மற்றும் ஆண் குழந்தைகள் பாதுகாப்பு கருதி தற்காப்பு கலை பயிற்சி ஏகனாபுரம் கிராமத்தில் சுற்று வட்டாரத்தில்
                                        உள்ள அனைவருக்கும் பயிற்சி வழங்கப்படுகின்றது.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
