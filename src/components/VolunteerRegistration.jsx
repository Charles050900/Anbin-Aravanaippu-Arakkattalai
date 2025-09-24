import React, { useState } from "react"
import DonateNavBar from "./DonateNavBar"
import DonateFooter from "./DonateFooter"
import VolunteerRegistrationForm from "./VolunteerRegistrationForm"
import VolunteerRegistrationProfile from "./VolunteerRegistrationProfile"
const VolunteerRegistration = ({ onSubmit }) => {
    return (
        <>
            <DonateNavBar />
            <VolunteerRegistrationProfile/>
            <VolunteerRegistrationForm />
            <DonateFooter />
        </>
    )
}

export default VolunteerRegistration
