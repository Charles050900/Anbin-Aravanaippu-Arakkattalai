import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import axios from "axios"
import "../CSS/RequestBloodForm.css"
import toast, { Toaster } from "react-hot-toast"

const RequestBloodForm = () => {
    // Quotes for motivation
    const quotes = [
        "Don’t worry, brighter days are coming. Get well soon.",
        "Stay strong, your healing journey has already begun.",
        "Every day you’re getting closer to recovery.",
        "This is just a chapter, not your whole story. You will rise again.",
        "Keep faith, good health is on its way to you.",
        "Your courage inspires everyone around you. Stay positive.",
        "Rest, recover, and come back stronger than ever.",
        "Your strength is greater than this struggle.",
        "You are not alone — we’re all praying for your recovery.",
        "Healing takes time, but your spirit is unbreakable.",
    ]

    const [currentQuote, setCurrentQuote] = useState(0)
    // Rotate quotes every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % quotes.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [quotes.length])

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

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        reason: "",
        bloodType: "",
        district: "",
        place: "",
        date: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let payload = {
            bloodRequesterName: formData.name,
            bloodRequesterPhoneNo: formData.phone,
            bloodRequestReason: formData.reason,
            bloodGroup: formData.bloodType,
            bloodRequesterDistrict: formData.district,
            bloodRequestingPlace: formData.place,
            bloodRequestingDate: formData.date,
        }
        // axios.post("http://localhost:8080/bloodRequester", payload)
        toast.promise(
            fetch("https://anbin-aravanaippu-arakkattalai-50034377645.development.catalystappsail.in/bloodRequester", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            }),
            {
                loading: "Sending Request...",
                success: <b>Your blood request has been sent successfully!</b>,
                error: (
                    <b>
                        Something went wrong. <br /> Please try again later.
                    </b>
                ),
            }
        )

        setFormData({
            name: "",
            phone: "",
            reason: "",
            bloodType: "",
            district: "",
            place: "",
            date: "",
        })
    }
    return (
        <div className="p-5 request-blood-form ">
            {/* Quotes */}
            <div className="p-3">
                <div className="text-center" style={{ minHeight: "40px" }}>
                    <AnimatePresence mode="wait">
                        <motion.h5
                            key={currentQuote}
                            className="fw-bold text-white"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.8 }}
                        >
                            “{quotes[currentQuote]}”
                        </motion.h5>
                    </AnimatePresence>
                </div>
            </div>

            <div className=" mt-5  d-flex flex-column justify-content-center  align-items-center">
                <h3 className="mb-4 text-center text-white fw-bold">Blood Requesting Form</h3>
                <div>
                    <Toaster />
                </div>
                <form onSubmit={handleSubmit} className="p-2  shadow-sm col-lg-4">
                    <div className="mb-3">
                        <label className="form-label fw-bold text-white">Name</label>
                        <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold text-white">Phone</label>
                        <input type="tel" name="phone" maxLength={10} className="form-control" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold text-white">Reason</label>
                        <textarea name="reason" className="form-control" rows="3" value={formData.reason} onChange={handleChange} placeholder="Enter the reason for request"></textarea>
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold text-white">Blood Type</label>
                        <select name="bloodType" className="form-select" value={formData.bloodType} onChange={handleChange} required>
                            <option value="">Select blood type</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold text-white">District</label>
                        <select name="district" className="form-select" value={formData.district} onChange={handleChange} required>
                            <option value="">Select your district</option>
                            {districts.map((district, index) => (
                                <option key={index} value={district}>
                                    {district}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold text-white">Place</label>
                        <input type="text" name="place" className="form-control" value={formData.place} onChange={handleChange} placeholder="Enter place or hospital name" required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold text-white">Date</label>
                        <input type="date" name="date" className="form-control" value={formData.date} onChange={handleChange} required />
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-danger px-4">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RequestBloodForm
