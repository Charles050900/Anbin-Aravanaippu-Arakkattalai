import React, { useState } from "react"
import "../CSS/DonateBloodForm.css"
import blood_donate_image from "../assets/blood donation image wobg.png"
import toast, { Toaster } from "react-hot-toast"
import axios from "axios"

const DonateBloodForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        age: "",
        bloodGroup: "",
        mobile: "",
        email: "",
        district: "",
        agree: false,
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        let payload = {
            bloodDonorName: formData.fullName,
            bloodDonorAge: formData.age,
            bloodGroup: formData.bloodGroup,
            bloodDonorPhonoNo: formData.mobile,
            bloodDonorEmail: formData.email,
            bloodDonorDistrict: formData.district,
            bloodDonoteContact: formData.agree,
        }
        // await axios.post("http://localhost:8080/bloodDonorRegistration", payload),
        toast.promise(
            fetch("https://anbin-aravanaippu-arakkattalai-50034377645.development.catalystappsail.in/bloodDonorRegistration", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            }),
            {
                loading: "Registering donor...",
                success: (
                    <b>
                        Thank you for registering! <br /> Your willingness to donate can save lives.
                    </b>
                ),
                error: (
                    <b>
                        Registration failed. <br /> Please try again after some time.
                    </b>
                ),
            }
        )

        setFormData({
            fullName: "",
            age: "",
            bloodGroup: "",
            mobile: "",
            email: "",
            district: "",
            agree: false,
        })
    }

    // Tamil Nadu districts
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
        "Kanchipuram",
        "Karur",
        "Krishnagiri",
        "Madurai",
        "Mayiladuthurai",
        "Nagapattinam",
        "Kanyakumari",
        "Namakkal",
        "Perambalur",
        "Pudukottai",
        "Ramanathapuram",
        "Ranipet",
        "Salem",
        "Sivaganga",
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
        "The Nilgiris",
        "Vellore",
        "Villupuram",
        "Virudhunagar",
    ]

    return (
        <div className="container-fluid p-lg-5 py-3 blood-form d-flex flex-column flex-lg-row justify-content-evenly gap-5 ">
            <div className="col-md-4 m-4">
                <div className="card py-5 px-4 h-100 blood-donate-content d-lg-flex justify-content-lg-center align-items-lg-center">
                    <h3 className="text-danger mb-4 text-center fw-bold">Pledge to Donate Blood</h3>
                    <p className="text-center fw-bold mb-4">
                        Every two seconds, someone needs blood. <br />
                        One donation can save up to three lives.
                    </p>
                    <blockquote className="blockquote mb-2">
                        <p className="mb-0">“Be someone’s hero - donate blood.”</p>
                    </blockquote>
                    <blockquote className="blockquote mb-2">
                        <p className="mb-0">“Your blood is replaceable, someone’s life isn’t.”</p>
                    </blockquote>
                    <ul className="mt-3 custom-bullets">
                        <li>Age 18 - 65, minimum 50 kg</li>
                        <li>Healthy on the day of donation</li>
                        <li>Can donate every 3 months</li>
                    </ul>
                    <div className=" d-flex justify-content-center align-items-center ">
                        <img src={blood_donate_image} alt="blood_donate_image" />
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="col-md-5 m-4 ">
                <div className="card p-5  h-100 blood-donate-form">
                    <h4 className="mb-5 text-center text-danger fw-bold">Donor Registration Form</h4>
                    <div>
                        <Toaster />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col mb-3">
                                <label className="form-label">Full Name</label>
                                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="form-control" required />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Age</label>
                                <input type="text" name="age" value={formData.age} onChange={handleChange} className="form-control" required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Blood Group</label>
                                <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} className="form-select" required>
                                    <option value="">Select</option>
                                    <option>A+</option>
                                    <option>A-</option>
                                    <option>B+</option>
                                    <option>B-</option>
                                    <option>O+</option>
                                    <option>O-</option>
                                    <option>AB+</option>
                                    <option>AB-</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Mobile</label>
                            <input type="text" name="mobile" maxLength={10} value={formData.mobile} onChange={handleChange} className="form-control" required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
                        </div>

                        <div className="mb-5">
                            <label className="form-label">District</label>
                            <select name="district" value={formData.district} onChange={handleChange} className="form-select" required>
                                <option value="">Select District</option>
                                {districts.map((dist, idx) => (
                                    <option key={idx} value={dist}>
                                        {dist}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-check mb-5">
                            <input className="form-check-input custom-check" type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} required />
                            <label className="form-check-label">I agree to be contacted for blood donation requests</label>
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-danger">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DonateBloodForm
