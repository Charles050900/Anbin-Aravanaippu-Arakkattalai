import React, { useState, useEffect } from "react"
import axios from "axios"
import DonateNavBar from "./DonateNavBar"
import DonateBloodProfile from "./DonateBloodProfile"
import RequestBloodForm from "./RequestBloodForm"
import DonateFooter from "./DonateFooter"
import RequestBloodProfile from "./RequestBloodProfile"

const RequestBlood = () => {


    return (
        <>
            <DonateNavBar />
            <RequestBloodProfile />
            <RequestBloodForm />
            <DonateFooter/>
        </>
    )
}

export default RequestBlood
