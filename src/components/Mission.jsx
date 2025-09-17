import "../CSS/Mission.css"
import pic1 from "../assets/mission1.jpg"
import pic2 from "../assets/mission2.jpg"
import title from "../assets/Mission.png"

const Mission = () => {
    return (
        <div className="mission  px-5 pb-5">
            {/* Title */}
            <div className={`text-center p-5`}>
                <img src={title} alt="Mission" className="img-fluid" style={{ height: "100px", objectFit: "contain" }} />
            </div>

            {/* First Section */}
            <div className={`row align-items-center mb-5 `}>
                <div className="col-lg-9 order-2 order-lg-1 sec-1  ps-5 py-4 text-white">
                    <ol>
                        <li>Benefiting the vulnerable communities through government schemes for their welfare.</li>
                        <li>Fighting for the rights of women in society.</li>
                        <li>Striving for the economic development of the people below the poverty line.</li>
                        <li>
                            To create awareness among the people living in abject poverty throughout Tamil Nadu about the welfare schemes of the government village by village for their livelihood.
                        </li>
                        <li>
                            Acting as a training center for charities, voluntary organizations, welfare organizations, self-help groups for leadership, communication skills, human resource
                            development, employment, skills development.
                        </li>
                        <li>To take up the concessions made by the Government in every Union in Tamil Nadu.</li>
                        <li>Raising awareness about the terrible diseases that threaten man.</li>
                        <li>Producing documentaries and short films on public health at very low cost.</li>
                        <li>
                            Acquisition of goods, movable or immovable property from private or charitable organizations, companies, institutions etc. to fulfill the above objectives. And making all
                            necessary efforts to achieve the above objectives.
                        </li>
                    </ol>
                </div>
                <div className="col-lg-3 text-center  order-1 order-lg-2 mb-4 mb-lg-0 d-lg-flex justify-content-center">
                    <img src={pic1} alt="Mission Pic 1" className="img-fluid rounded mission-pic-1" style={{ height: "250px" }} />
                </div>
            </div>

            {/* Second Section */}
            <div className={`row align-items-center`}>
                <div className="col-lg-3 text-center mb-4 mb-lg-0 mission_left_img p-5">
                    <img src={pic2} alt="Mission Pic 2" className="img-fluid rounded  mission-pic-2" style={{ height: "250px" }} />
                </div>
                <div className="col-lg-9 sec-2 text-white">
                    <ol>
                        <li>நலிந்த சமுதாய மக்கள் நல்வாழ்வு பெறும் வகையில் அரசு திட்டங்கள் மூலம் பயன்பெறச் செய்வது.</li>
                        <li>சமுதாயத்தில் பெண்கள் சமூதாய வாழ்வு உரிமைகளுக்காக போராடுதல்.</li>
                        <li>வறுமைக் கோட்டிற்கு கீழ் உள்ள மக்களின் பொருளாதார மேம்பாட்டிற்காக பாடுபடுதல்.</li>
                        <li>தமிழ்நாடு முழுவதிலுமுள்ள நலிந்த வறுமையில் வாழும் மக்களுக்கு அவர்கள் வாழ்வாதாரத்திற்காக கிராமம் கிராமமாக அரசின் நலத் திட்டங்கள் குறித்து விழிப்புணர்ச்சியடைச் செய்தல்.</li>
                        <li>
                            தொண்டு நிறுவனங்கள், தன்னார்வு அமைப்புகள், பொதுநல அமைப்புகள், சுய உதவிக் குழுக்கள் ஆகியவற்றிற்கு தலைமைப் பண்பு, ஆளுமைத் திறன், தொடர்புத் திறன், மனிதவள மேம்பாடு,
                            வேலைவாய்ப்பு, திறன் வளர்த்தல் போன்றவற்றிற்கு தேவையான பயிற்சி அளிக்கும் பயிற்சிமையமாக செயல்படுவது.
                        </li>
                        <li>தமிழகத்தில் உள்ள ஒவ்வொரு ஒன்றியத்திலும் அரசினரால் வழங்கப்படும் சலுகைகளை எடுத்துச் சொல்வது.</li>
                        <li>மனிதனை அச்சுறுத்தும் கொடூர நோய்கள் குறித்த விழிப்புணர்ச்சி ஏற்படுத்துதல்.</li>
                        <li>மக்கள் உடல் நலம் சார்ந்த ஆவணப்படங்கள், குறும்படங்கள் ஆகியவற்றை மிக குறைந்த செலவில் தயாரிப்பது.</li>
                        <li>கிராமப்புற மாணவர்களுக்கு இலவச மாலைநேர கல்விச்சேவை.</li>
                        <li>அரசு பள்ளி மாணவர்களுக்கு கழிப்பறை வசதி மேம்படுத்தி தருவது.</li>
                        <li>பெண் பிள்ளைகளுக்கு தற்காப்பு கலைகளை இலவசமாக பயிற்சி அளிக்கப்படும்.</li>
                        <li>படித்த இளைஞர்களுக்கு தனியார் நிறுவனங்களில் பணியில் சேர்வதற்கான இலவச பயிற்சி மற்றும் வேலை வாய்ப்பு தகவல்கள் வழங்கப்படும்.</li>
                        <li>ஏழை எளிய மாணவர்களுக்கு படிக்கத் தேவையான உபகரணங்கள் வழங்கப்படும்.</li>
                        <li>நூலகம் இல்லாத கிராமங்களில் மாணவர்களுக்கு நூலக வசதி செய்யப்படும்.</li>
                        <li>ஆதரவு அற்ற முதியவர்களுக்கு இலவசமாக அரசு முதியவர் பணம் கிடைக்க வழிவகை செய்யப்படும்.</li>
                        <li>ஊனமுற்றோருக்கு இலவசமாக அரசு ஊனமுற்றோர் பணம் கிடைக்க வழிவகை செய்யப்படும்.</li>
                        <li>கிராமப்புறங்களில் இலவச மருத்துவ முகாம் நடத்தப்படும்.</li>
                        <li>ரோட்டோரங்களில் உள்ள ஆதரவற்ற முதியவர்களுக்கு இலவச உணவு வழங்கப்படும்.</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Mission
