import React from "react"
import Vortex from "./components/Vortex"
import Home from "./components/Home"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/Anbin-Aravanaippu-Arakkattalai" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
