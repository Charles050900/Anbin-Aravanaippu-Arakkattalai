import React, { useState } from "react"
import "../CSS/Contact.css"
import title from "../assets/Contact.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons"
import { height } from "@fortawesome/free-brands-svg-icons/faChromecast"

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }
    const handleSendMail = () => {
        window.location.href = "mailto:aaa28102020@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you."
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", form)
        // Hook into API or email service here
        alert("Thank you! We received your message.")
        setForm({ name: "", email: "", message: "", phone: "" })
    }

    return (
        <div className="pb-5 p-5 contact d-lg-flex flex-column justify-content-center align-items-center ">
            <img src={title} alt="" className="contact-title mb-5" />
            {/* <h2 className="text-center mb-5 fw-bold text-white">Contact Us</h2> */}
            <div className=" w-100">
                <div className="row gap-lg-3 gap-md-3 justify-content-center">
                    <div className="col-md-8 col-lg-4 p-lg-5 form-outer  d-flex justify-content-center">
                        <form onSubmit={handleSubmit} className="form  mt-5 p-4 w-75">
                            {/* Name */}
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label fw-bold">
                                    Name
                                </label>
                                <input type="text" id="name" name="name" className="form-control fw-bold" placeholder="Your name" value={form.name} onChange={handleChange} required />
                            </div>
                            {/* Email */}
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label fw-bold">
                                    Email
                                </label>
                                <input type="email" id="email" name="email" className="form-control fw-bold" placeholder="Your email" value={form.email} onChange={handleChange} required />
                            </div>
                            {/* Phone */}
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label fw-bold ">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="form-control fw-bold "
                                    placeholder="Enter 10-digit phone number"
                                    value={form.phone}
                                    onChange={handleChange}
                                    pattern="[6-9]{1}[0-9]{9}" // Only starts 6-9, total 10 digits
                                    maxLength="10"
                                    required
                                />
                                {/* <div className="form-text text-muted">Must be a valid 10-digit Indian mobile number.</div> */}
                            </div>
                            {/* Message */}
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label fw-bold ">
                                    Message
                                </label>
                                <textarea id="message" name="message" rows="5" className="form-control fw-bold" placeholder="Your message" value={form.message} onChange={handleChange} required />
                            </div>
                            {/* Button */}
                            <div className="d-grid">
                                <button type="submit" className="message-button p-1 border-0 rounded fw-bold">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="col-lg-6 col-md-4 d-lg-flex flex-column justify-content-center align-items-center mt-5 address ">
                        <div className="address-details text-white d-lg-flex flex-column justify-content-center align-items-center p-5  fw-bold">
                            <h4 className="text-center fw-bold mb-4">Address</h4>
                            <p className="text-center">
                                <FontAwesomeIcon icon={faLocationDot} style={{ color: "#ffffffff" }} /> - Anbin Aravanaippu Arakkattalai,
                                <br /> No. 91, Mettu Street, Ekanapuram, <br />
                                Sriperumbudur Taluk, Kanchipuram District <br />
                                PIN code: 631 553
                            </p>
                            <p className="text-center">
                                <FontAwesomeIcon icon={faPhoneVolume} style={{ color: "#ffffffff" }} /> - 9994216991
                            </p>
                            <p className="mail text-center" onClick={handleSendMail}>
                                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffffff" }} /> - aaa28102020@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
