import React, { useState } from "react"
import "../CSS/DonateFundsForm.css"
import donation_pic from "../assets/donation pic wobg.png"
import { height } from "@fortawesome/free-brands-svg-icons/faChromecast"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"
const DonateFundForm = () => {
    const [formData, setFormData] = useState({
        transactionId: "",
        amount: "",
        payerName: "",
        contactNo: "",
        message: "",
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let payload = {
            transactionNo: formData.transactionId,
            transactionAmount: formData.amount,
            payerName: formData.payerName,
            payerPhoneNo: formData.contactNo,
            payerMessage: formData.message,
        }

        toast.promise(
            fetch("https://anbin-aravanaippu-arakkattalai-50034377645.development.catalystappsail.in/fundTransfer", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            }),
            {
                loading: "Sending details...",
                success: (
                    <b>
                        Thank you for your donation! <br /> We appreciate your support.
                    </b>
                ),
                error: (
                    <b>
                        Submission failed. <br /> Please try again later.
                    </b>
                ),
            }
        )

        setFormData({
            transactionId: "",
            amount: "",
            payerName: "",
            contactNo: "",
            message: "",
        })
    }

    return (
        <div className="donate-funds-form p-5 d-flex flex-column justify-content-evenly align-items-center gap-5">
            <div className="card p-5 rounded-4 shadow-lg">
                <h3 className="mb-4 text-center fw-bold">How Our Trusts Use Donated Funds</h3>
                <div>
                    <Toaster />
                </div>

                <p className="mb-4 fw-bold text-center ">
                    When you donate to our trust, your contribution can support many meaningful initiatives. <br />
                    Here are some common areas where funds are used:
                </p>

                <ol className="list-group text-center list-group-numbered">
                    <li className="list-group-item">
                        <strong>Education</strong>
                    </li>
                    <li className="list-group-item">
                        <strong>Healthcare</strong>
                    </li>
                    <li className="list-group-item">
                        <strong>Environment</strong>
                    </li>
                    <li className="list-group-item">
                        <strong>Welfare and Relief</strong>
                    </li>
                    <li className="list-group-item">
                        <strong>Community Development</strong>
                    </li>
                    {/* <li className="list-group-item"></li> */}
                </ol>

                {/* <div className="alert alert-info mt-4 mb-0">
                    <strong>Tip:</strong> Before donating, check if the trust is registered (e.g., 12A/80G in India) and ask for receipts or reports on how funds are used.
                </div> */}
            </div>

            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-top gap-5">
                <div className="donate-funds-form-left bg-white px-5 py-3">
                    <h5 className=" text-center fw-bold p-3">For Bank Transfer</h5>

                    <p>
                        <strong>Acc Name:</strong> Anbin Aravanaippu
                    </p>

                    <p>
                        <strong>Acc No:</strong> 1357101021298
                    </p>

                    <p>
                        <strong>Bank Name:</strong> Canara Bank
                    </p>

                    <p>
                        <strong>Branch:</strong> Maduramangalam
                    </p>

                    <p>
                        <strong>IFSC Code:</strong> CNRB0001357
                    </p>
                    <div className="d-flex justify-content-center align-items-center ">
                        <img src={donation_pic} alt="" className="img-fluid rounded-5" style={{ height: "200px" }} />
                    </div>
                </div>
                <div className="donate-funds-form-right bg-white p-5">
                    <h3 className="mb-5 text-center fw-bold">Bank Transaction Details</h3>
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <div className="mb-3">
                            <input type="text" className="form-control" id="transactionId" placeholder="Transaction Number" value={formData.transactionId} onChange={handleChange} required />
                        </div>

                        <div className="mb-3">
                            <input type="text" className="form-control" id="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} required />
                        </div>

                        <div className="mb-3">
                            <input type="text" className="form-control" id="payerName" placeholder="Name of Payer" value={formData.payerName} onChange={handleChange} required />
                        </div>

                        <div className="mb-3">
                            <input type="tel" className="form-control" id="contactNo" placeholder="Contact Number" value={formData.contactNo} onChange={handleChange} required />
                        </div>

                        <div className="mb-3">
                            <textarea className="form-control fixed-textarea" id="message" placeholder="Write your query or message" value={formData.message} onChange={handleChange} required />
                        </div>

                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary w-50">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DonateFundForm
