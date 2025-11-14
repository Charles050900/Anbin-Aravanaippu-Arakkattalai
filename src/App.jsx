import React from "react"
import Vortex from "./components/Vortex"
import Home from "./components/Home"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import DonateFunds from "./components/DonateFunds"
import DonateBlood from "./components/DonateBlood"
import ScrollToTop from "./components/ScrollToTop"
import RequestBlood from "./components/RequestBlood"
import VolunteerRegistration from "./components/VolunteerRegistration"

function App() {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Donate-Funds" element={<DonateFunds />} />
                    <Route path="/Donate-Blood" element={<DonateBlood />} />
                    <Route path="/Request-Blood" element={<RequestBlood />} />
                    <Route path="/Volunteer-Registration" element={<VolunteerRegistration />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
