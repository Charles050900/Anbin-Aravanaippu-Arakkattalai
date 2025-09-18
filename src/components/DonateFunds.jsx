import React from "react"
import DonateNavBar from "./DonateNavBar"
import NavBar from "./NavBar"
import DonateProfile from "./DonateProfile"
import DonateFundForm from "./DonateFundForm"

const DonateFunds = () => {
    return (
        <>
            <DonateNavBar />
            <DonateProfile />
            <DonateFundForm/>
        </>
    )
}

export default DonateFunds
