import React from "react"
import title from "../assets/Volunteer.png"
import pic from "../assets/Anbin Aravanaippu Arakkattalai Logo.png"
import "../CSS/Volunteer.css"

const Volunteer1 = () => {
    return (
        <div className="volunteer py-4">
            <div className="title d-flex justify-content-center mb-4">
                <img src={title} alt="" className="m" />
            </div>
            {/* <!-- B. BOMBAY --> */}
            <div className="row justify-content-center">
                <div className="col-10 col-sm-8 col-md-6 col-lg-3 text-center">
                    <h2 className="mb-5 fw-bold text-white">Organisers</h2>
                    <div className="org-box">
                        {/* <img src={pic} alt="" className="img-fluid w-50 rounded-4 mb-4" /> */}
                        <h5 className="fw-bold ">B. BOMBAY</h5>
                        {/* <p className="mb-0">Founder & President of Trustee</p> */}
                    </div>
                    <div className="org-connector"></div>
                </div>
            </div>

            {/* <!-- B. KAWASKAR --> */}
            <div className="row justify-content-center">
                <div className=" col-10 col-sm-8 col-md-6 col-lg-3 text-center">
                    <div className="org-box">
                        {/* <img src={pic} alt="" className="img-fluid w-50 rounded-4 mb-4" /> */}
                        <h5 className="fw-bold">B. KAWASKAR</h5>
                        {/* <p className="mb-0">General Secretary of Trustee</p> */}
                    </div>
                    <div className="org-connector"></div>
                    <div className="row  d-lg-flex justify-content-center px-4">
                        <div className="org-connector-x col-lg-9  "></div>
                    </div>
                </div>
            </div>

            {/* <!-- Treasurers --> */}
            <div className="row justify-content-center">
                <div className="col-10 col-sm-5 col-md-4 col-lg-2 text-center">
                    <div className="org-connector-y"></div>
                    <div className="org-box">
                        {/* <img src={pic} alt="" className="img-fluid w-50 rounded-4 mb-4" /> */}
                        <h5 className="fw-bold">K. KAMALI</h5>
                        <p className="mb-0">Trustee</p>
                    </div>
                    <div className="org-connector"></div>
                </div>

                <div className="col-10 col-sm-5 col-md-4 col-lg-2 text-center">
                    <div className="org-connector-y"></div>
                    <div className="org-box">
                        {/* <img src={pic} alt="" className="img-fluid w-50 rounded-4 mb-4" /> */}
                        <h5 className="fw-bold">B. KABILDEV</h5>
                        <p className="mb-0">Trustee</p>
                    </div>
                    <div className="org-connector"></div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-10 col-sm-5 col-md-4 col-lg-2 text-center">
                    <div className="org-box">
                        {/* <img src={pic} alt="" className="img-fluid w-50 rounded-4 mb-4" /> */}
                        <h5 className="fw-bold">D. KANISHKAR</h5>
                        <p className="mb-0">Trustee</p>
                    </div>
                    {/* <div className="org-connector"></div> */}
                </div>

                <div className="col-10 col-sm-5 col-md-4 col-lg-2 text-center">
                    <div className="org-box">
                        {/* <img src={pic} alt="" className="img-fluid w-50 rounded-4 mb-4" /> */}
                        <h5 className="fw-bold">G. THENRAL NILAVAN</h5>
                        <p className="mb-0">Trustee</p>
                    </div>
                    {/* <div className="org-connector"></div> */}
                </div>
            </div>
        </div>
    )
}

export default Volunteer1
