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

function App() {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/Anbin-Aravanaippu-Arakkattalai" element={<Home />} />
                    <Route path="/Anbin-Aravanaippu-Arakkattalai/Donate-Funds" element={<DonateFunds />} />
                    <Route path="/Anbin-Aravanaippu-Arakkattalai/Donate-Blood" element={<DonateBlood />} />
                    <Route path="/Anbin-Aravanaippu-Arakkattalai/Request-Blood" element={<RequestBlood />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
