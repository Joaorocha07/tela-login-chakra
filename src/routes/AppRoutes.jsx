import React from "react"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PageLogin from "../pages/PageLogin";
import PageCadastro from "../pages/PageCadastro";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<PageLogin />}></Route>
                <Route exact path="/cadastro" element={<PageCadastro />}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;