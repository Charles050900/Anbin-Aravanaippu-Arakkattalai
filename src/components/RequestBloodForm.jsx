import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import axios from "axios"
import "../CSS/RequestBloodForm.css"

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
    const [formData, setFormData] = useState({
        bloodType: "",
        district: "",
    })

    const [results, setResults] = useState([]) // API response
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

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

    // Rotate quotes every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % quotes.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [quotes.length])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError("")
        setResults([])

        try {
            // Replace with your actual API
            const res = await axios.get("https://api.example.com/blood-requests", {
                params: {
                    bloodType: formData.bloodType,
                    city: formData.city,
                    district: formData.district,
                },
            })

            setResults(res.data || [])
        } catch (err) {
            setError("Failed to fetch results. Try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="p-5 request-blood-form">
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

            <div className="p-3">
                <h2 className="text-center mb-4 text-white fw-bold ">Search for Blood Donors</h2>

                {/* Form */}
                <form className="text-white d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit}>
                    {/* Blood Type */}
                    <div className="mb-4 col-4">
                        <label className="form-label fw-semibold">Blood Type</label>
                        <select className="form-select" name="bloodType" value={formData.bloodType} onChange={handleChange} required>
                            <option value="">Select Blood Type</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>
                    </div>

                    {/* District Dropdown */}
                    <div className="mb-4 col-4">
                        <label className="form-label fw-semibold">District</label>
                        <select className="form-select" name="district" value={formData.district} onChange={handleChange} required>
                            <option value="">Select District</option>
                            {districts.map((dist, idx) => (
                                <option key={idx} value={dist}>
                                    {dist}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Submit */}
                    <div className="text-center col-4">
                        <button type="submit" className="btn btn-light col-3 fw-semibold">
                            Search
                        </button>
                    </div>
                </form>
            </div>

            {/* Results Section */}
            <div className="mt-5">
                {loading && <p className="text-center">Loading...</p>}
                {error && <p className="text-center fw-semibold text-white">{error}</p>}

                {!loading && !error && results.length > 0 && (
                    <motion.div className="p-3 border rounded bg-white" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h4 className="text-center text-white">Available Requests</h4>
                        {results.map((item, idx) => (
                            <div key={idx} className="border-bottom py-2">
                                <p>
                                    <strong>Blood Type:</strong> {item.bloodType}
                                </p>
                                <p>
                                    <strong>City:</strong> {item.city}
                                </p>
                                <p>
                                    <strong>District:</strong> {item.district}
                                </p>
                                <p>
                                    <strong>Contact:</strong> {item.contact || "N/A"}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                )}

                {!loading && !error && results.length === 0 && <p className="text-center fw-semibold text-white">No results found.</p>}
            </div>
        </div>
    )
}

export default RequestBloodForm
