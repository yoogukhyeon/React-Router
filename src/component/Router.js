import React from "react";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import "../public/Router.css"
function AppRouter(){
    return(
        <>
            <BrowserRouter>
            <nav className="nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                
            </nav>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter