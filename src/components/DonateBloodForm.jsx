import React, { useState } from "react"
import '../CSS/DonateBloodForm.css'
import blood_donate_image from '../assets/blood donation image wobg.png'

const DonateBloodForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        age: "",
        bloodGroup: "",
        mobile: "",
        email: "",
        address: "",
        location: "",
        availability: "",
        history: "",
        medical: "",
        agree: false,
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        alert("Thank you for pledging to donate blood!")
    }

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
                    {/* <blockquote className="blockquote">
                        <p className="mb-0">“A drop of kindness can fill a heart with life.”</p>
                    </blockquote> */}
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

                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Full Name</label>
                                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="form-control" required />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label className="form-label">Age</label>
                                <input type="text" name="age" value={formData.age} onChange={handleChange} className="form-control" required />
                            </div>
                            <div className="col-md-3 mb-3">
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
                            <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} className="form-control" required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Address / City</label>
                            <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control" required />
                        </div>

                        <div className="row">
                            <div className="mb-4">
                                <label className="form-label">Preferred Location</label>
                                <input type="text" name="location" value={formData.location} onChange={handleChange} className="form-control" required />
                            </div>
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
        //         </div>
        //     </div>
        // </div>
    )
}

export default DonateBloodForm
