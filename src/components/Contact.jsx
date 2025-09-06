import React, { useState } from "react"
import "../CSS/Contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons"

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
        setForm({ name: "", email: "", message: "" })
    }

    return (
        <div className="pb-5 contact ">
            <h2 className="text-center mb-5 fw-bold text-white">Contact Us</h2>
            <div className="row gap-lg-5 gap-md-3 gap-5  justify-content-center">
                <div className="col-md-8 col-lg-4">
                    <form onSubmit={handleSubmit} className="form p-5">
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

                <div className="col-lg-5 col-md-4 d-lg-flex flex-column justify-content-center align-items-center address ">
                    <div className="address-details d-lg-flex flex-column justify-content-center align-items-center p-4 fw-bold">
                        <p className="text-center">
                            <strong>Address</strong>
                        </p>
                        <p className="text-lg-center">
                            <FontAwesomeIcon icon={faLocationDot} style={{ color: "#000000" }} /> - No. 91, Mettu Street, Ekanapuram, Sriperumbudur Taluk, <br />
                            Kanchipuram District – 631 553
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faPhoneVolume} style={{ color: "#000000" }} /> - 9994216991
                        </p>
                        <p className="mail" onClick={handleSendMail}>
                            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#000000" }} /> - aaa28102020@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
