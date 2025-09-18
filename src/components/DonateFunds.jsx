import React from "react"
import DonateNavBar from "./DonateNavBar"
import NavBar from "./NavBar"
import DonateProfile from "./DonateProfile"
import DonateFundForm from "./DonateFundForm"
import DonateFooter from "./DonateFooter"

const DonateFunds = () => {
    return (
        <>
            <DonateNavBar />
            <DonateProfile />
            <DonateFundForm />
            <DonateFooter/>
        </>
    )
}

export default DonateFunds
