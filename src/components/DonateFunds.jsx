import React from "react"
import DonateNavBar from "./DonateNavBar"
import DonateFundForm from "./DonateFundForm"
import DonateFooter from "./DonateFooter"
import DonateFundProfile from "./DonateFundProfile"

const DonateFunds = () => {
    return (
        <>
            <DonateNavBar />
            <DonateFundProfile />
            <DonateFundForm />
            <DonateFooter />
        </>
    )
}

export default DonateFunds
