import React from "react"
import "../CSS/DonateFundsForm.css"
const DonateFundForm = () => {
    return (
        <div className="donate-funds-form p-5 d-flex flex-column flex-md-row justify-content-evenly align-items-center">
            <div className="donate-funds-form-left bg-white px-5">
                <h5 className=" text-center py-3">For Bank Transfer</h5>

                    <p className="">
                        <strong>Acc Name:</strong> Anbin Aravanaippu
                    </p>


                    <p>
                        <strong>Acc Name:</strong> 1357101021298
                    </p>


                    <p>
                        <strong>Bank Name:</strong> Canara Bank</p>

                    <p>
                        <strong>Branch:</strong> Maduramangalam</p>

                    <p>
                        <strong>IFSC Code:</strong> CNRB0001357</p>

            </div>
            <div className="donate-funds-form-right">
                <h3>Transaction Information</h3>
                <form action=""></form>
            </div>
        </div>
    )
}

export default DonateFundForm
