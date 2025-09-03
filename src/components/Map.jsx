import React from "react"

const Map = () => {
    return (
        <div className="map-responsive d-lg-flex justify-content-center" style={{ height: "400px", width: "100%", border: "10px solid rgb(87, 168, 249)" }}>
            <iframe
                title="Trust_Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1759.3249982889572!2d79.78012297144423!3d12.956820707880182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52ebc79fd0e8c5%3A0x95a0194810f7d458!2sAnbin%20Aravanaippu%20arakkattalai%20ekanapuram!5e1!3m2!1sen!2sin!4v1756894766148!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}

export default Map
