import React from "react"
import title from "../assets/Organisers.png"
import pic from "../assets/Anbin Aravanaippu Arakkattalai Logo.png"
import "../CSS/Volunteer.css"

const Volunteer1 = () => {
    return (
        <div className="volunteer py-4">
            <div className="title d-flex justify-content-center mb-5">
                <img src={title} alt="" className="" />
            </div>
            {/* <!-- B. BOMBAY --> */}
            <div className="row justify-content-center ">
                <div className="col-10  col-md-6 col-lg-3 text-center">
                    {/* <h2 className="mb-5 fw-bold text-white">Organisers</h2> */}
                    <div className="org-box vol-shadow">
                        {/* <img src={pic} alt="" className="img-fluid w-50 rounded-4 mb-4" /> */}
                        <h5 className="fw-bold ">B. Bombay</h5>
                        <p className="mb-0">Founder & President of the Trust</p>
                    </div>
                    <div className="org-connector"></div>
                </div>
            </div>

            {/* <!-- B. KAWASKAR --> */}
            <div className="row justify-content-center ">
                <div className="col-10 col-sm-8 col-md-6 col-lg-3 text-center">
                    <div className="org-box vol-shadow">
                        {/* <img src={pic} alt="" className="img-fluid w-50 rounded-4 mb-4" /> */}
                        <h5 className="fw-bold">B. Kawaskar</h5>
                        <p className="mb-0">General Secretary of the Trust</p>
                    </div>
                    <div className="org-connector"></div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-0"></div>
                        <div className="org-connector-x col-lg-8  d-md-block col-6 rounded   "></div>
                    </div>
                </div>
            </div>

            {/* <!-- Trustees --> */}
            <div className="row justify-content-center">
                <div className="col-5  col-md-4 col-lg-2 text-center ">
                    <div className="org-connector-y rounded-5  d-md-block"></div>
                    <div className="org-box vol-shadow">
                        {/* <img src={pic} alt="" className="img-fluid w-50 rounded-4 mb-4" /> */}
                        <h5 className="fw-bold">K. Kamali</h5>
                        <p className="mb-0">Trustee</p>
                    </div>
                    <div className="org-connector  d-md-block"></div>
                </div>

                <div className="col-5 col-md-4 col-lg-2 text-center">
                    <div className="org-connector-y rounded-5"></div>
                    <div className="org-box vol-shadow">
                        {/* <img src={pic} alt="" className="img-fluid w-50 rounded-4 mb-4" /> */}
                        <h5 className="fw-bold">B. Kabildev</h5>
                        <p className="mb-0">Trustee</p>
                    </div>
                    <div className="org-connector"></div>
                </div>
            </div>

            <div className="row justify-content-center ">
                <div className="col-5 col-md-4 col-lg-2 text-center ">
                    <div className="org-box vol-shadow h-100">
                        {/* <img src={pic} alt="" className="img-fluid w-50 rounded-4 mb-4" /> */}
                        <h5 className="fw-bold">D. Kanishkar</h5>
                        <p className="mb-0">Trustee</p>
                    </div>
                    <div className="org-connector d-none d-md-none"></div>
                </div>

                <div className="col-5 col-md-4 col-lg-2 text-center  mt-md-0">
                    <div className="org-box vol-shadow">
                        {/* <img src={pic} alt="" className="img-fluid w-50 rounded-4 mb-4" /> */}
                        <h5 className="fw-bold">G. Thenral Nilavan</h5>
                        <p className="mb-0">Trustee</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Volunteer1
