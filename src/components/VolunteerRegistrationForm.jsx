import React, { useState, useEffect } from "react"
import pic1 from "../assets/vision2.jpeg"
import pic2 from "../assets/vision3.jpeg"
import pic3 from "../assets/vision6.jpg"
import pic4 from "../assets/vision10.jpg"
import pic5 from "../assets/vision22.jpg"
import pic6 from "../assets/vision24.jpg"
import pic7 from "../assets/vision29.jpg"
import "../CSS/VolunteerRegistraionForm.css"
import toast, { Toaster } from "react-hot-toast"
import axios from "axios"

const VolunteerRegistrationForm = () => {
    const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7]
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        phone: "",
        district: "",
        bloodGroup: "",
        bloodDonate: false,
        joinTrust: false,
    })

    const districts = [
        "Ariyalur",
        "Chengalpattu",
        "Chennai",
        "Coimbatore",
        "Cuddalore",
        "Dharmapuri",
        "Dindigul",
        "Erode",
        "Kallakurichi",
        "Kancheepuram",
        "Karur",
        "Krishnagiri",
        "Madurai",
        "Mayiladuthurai",
        "Nagapattinam",
        "Namakkal",
        "Nilgiris",
        "Perambalur",
        "Pudukkottai",
        "Ramanathapuram",
        "Ranipet",
        "Salem",
        "Sivagangai",
        "Tenkasi",
        "Thanjavur",
        "Theni",
        "Thiruvallur",
        "Thiruvarur",
        "Thoothukudi",
        "Tiruchirappalli",
        "Tirunelveli",
        "Tirupathur",
        "Tiruppur",
        "Tiruvannamalai",
        "Vellore",
        "Viluppuram",
        "Virudhunagar",
    ]

    const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log("Form submitted:", formData)

        let payload = {
            volunteerName: formData.name,
            volunteerAge: formData.age,
            volunteerEmail: formData.email,
            volunteerPhone: formData.phone,
            volunteerDistrict: formData.district,
            volunteerBloodGroup: formData.bloodGroup,
            workTogether: formData.joinTrust,
            bloodDonate: formData.bloodDonate,
        }
        // await axios.post("http://localhost:8080/volunteerRegistration", formDataToSend)
        toast.promise(
            fetch("https://anbin-aravanaippu-arakkattalai-50034377645.development.catalystappsail.in/volunteerRegistration", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            }),
            {
                loading: "Registering volunteer...",
                success: (
                    <b>
                        Registration successful! <br /> Thank you for joining as a volunteer.
                    </b>
                ),
                error: (
                    <b>
                        Registration failed. <br /> Please try again after some time.
                    </b>
                ),
            }
        )

        // Reset form
        setFormData({
            name: "",
            age: "",
            email: "",
            phone: "",
            district: "",
            bloodGroup: "",
            bloodDonate: false,
            joinTrust: false,
        })
    }

    return (
        <div className="register-form-outer p-lg-5 p-5 ">
            <div className="row d-flex flex-column flex-lg-row">
                {/* Left Side: Sliding Images */}
                <div className="col-md-5 d-flex justify-content-center align-items-center p-lg-5">
                    <div className="slider-image rounded-5">
                        <img src={images[currentIndex]} alt="Volunteer" className=" img-fluid " />
                    </div>
                </div>

                {/* Right Side: Registration Form */}
                <div className="col-md-7 mt-5 d-flex flex-column justify-content-center align-items-center ">
                    <div className="bg-white col-md-8 p-5 rounded-4 register-form ">
                        <div>
                            <Toaster />
                        </div>
                        <h3 className="mb-5 text-center fw-bold">Volunteer Registration</h3>
                        <form onSubmit={handleSubmit} className=" ">
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Name</label>
                                <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="mb-3 ">
                                <label className="form-label fw-semibold">Age</label>
                                <input type="text" name="age" className="form-control" value={formData.age} onChange={handleChange} required min="18" />
                            </div>
                            <div className="mb-3 ">
                                <label className="form-label fw-semibold">Email</label>
                                <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="mb-3 ">
                                <label className="form-label fw-semibold">Phone</label>
                                <input type="tel" name="phone" className="form-control" maxLength={10} value={formData.phone} onChange={handleChange} required pattern="[0-9]{10}" />
                            </div>
                            <div className="mb-3 ">
                                <label className="form-label fw-semibold">District</label>
                                <select name="district" className="form-select" value={formData.district} onChange={handleChange} required>
                                    <option value="">Select District</option>
                                    {districts.map((dist, idx) => (
                                        <option className="fw-semibold" key={idx} value={dist}>
                                            {dist}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-5 ">
                                <label className="form-label fw-semibold">Blood Group</label>
                                <select name="bloodGroup" className="form-select" value={formData.bloodGroup} onChange={handleChange} required>
                                    <option value="">Select Blood Group</option>
                                    {bloodGroups.map((bg, idx) => (
                                        <option className="fw-semibold" key={idx} value={bg}>
                                            {bg}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3 form-check fw-semibold">
                                <input type="checkbox" className="form-check-input register-check" name="joinTrust" checked={formData.joinTrust} onChange={handleChange} />
                                <label className="form-check-label">I wish to join the trust and work together.</label>
                            </div>
                            <div className="mb-5 form-check fw-semibold">
                                <input type="checkbox" className="form-check-input register-check" name="bloodDonate" checked={formData.bloodDonate} onChange={handleChange} />
                                <label className="form-check-label">I agree to donate blood when needed.</label>
                            </div>
                            <div className=" d-flex justify-content-center align-items-center">
                                <button type="submit" className="btn btn-primary">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VolunteerRegistrationForm
