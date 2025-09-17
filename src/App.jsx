import React from "react"
import Vortex from "./components/Vortex"
import Home from "./components/Home"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
<<<<<<< HEAD
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
=======

function App() {
    return (
        <div>
            <Home />
        </div>
>>>>>>> be0176f1cfa24eaecc063ed54bbf2516e7cc2b2d
    )
}

export default App
