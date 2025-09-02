import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const Volunteer2 = () => {
    return (
        <div className="volunteer2 p-5">
            <h4 className="text-center mb-4 fw-bold">Publisher</h4>

            <div className="row">
                <div className="col d-lg-flex justify-content-center">
                    {/* Top Advisory */}
                    <div className="card p-4 mb-5 shadow rounded text-center bg-primary text-white box">
                        <h4 className="mb-1">Dr. V. Murugan</h4>
                        <p className="mb-0">Advisory of Board & Editor/Publisher – Nigalkalam News</p>
                    </div>
                </div>
            </div>

            {/* Advisory Members */}
            <h4 className="text-center mb-4 fw-bold">Advisory Members</h4>
            <div className="row mb-5">
                <div className="col-lg-6 mb-3 d-lg-flex justify-content-end">
                    <div className="card p-3 w-50 shadow rounded text-center bg-primary text-white">
                        <h5 className="mb-1">M. Deepa, MBA</h5>
                        <p className="mb-0">Advisory of Board</p>
                    </div>
                </div>
                <div className="col-md-6 mb-3 d-lg-flex justify-content-start">
                    <div className="card p-3 w-50 shadow rounded text-center bg-primary text-white">
                        <h5 className="mb-1">V. Abisha, MBA</h5>
                        <p className="mb-0">Advisory of Board</p>
                    </div>
                </div>
            </div>

            {/* Board Members */}
            <h4 className="text-center mb-4 fw-bold">Board Members</h4>
            <div className="row">
                <div className="col-md-6 mb-3 d-lg-flex justify-content-end">
                    <div className="card p-3 w-50 shadow rounded text-center">
                        <h5 className="mb-1">M. Jabadurai, B.A., B.L., B.Ed</h5>
                        <p className="mb-0">Member of Board / Advocate</p>
                    </div>
                </div>
                <div className="col-md-6 mb-3 d-lg-flex justify-content-start">
                    <div className="card p-3 w-50 shadow rounded text-center">
                        <h5 className="mb-1">M. Kathirvel</h5>
                        <p className="mb-0">Member of Board / Govt. Doc Registrar</p>
                    </div>
                </div>
                <div className="col-md-6 mb-3 d-lg-flex justify-content-end">
                    <div className="card p-3 w-50 shadow rounded text-center">
                        <h5 className="mb-1">K. Kamali, B.Sc.</h5>
                        <p className="mb-0">Member of Board</p>
                    </div>
                </div>
                <div className="col-md-6 mb-3 d-lg-flex justify-content-start">
                    <div className="card p-3 w-50 shadow rounded text-center">
                        <h5 className="mb-1">D. Preethi, MBA</h5>
                        <p className="mb-0">Member of Board</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Volunteer2
