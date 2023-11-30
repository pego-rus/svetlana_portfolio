import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../home/Home";
import PortfolioSection from "../../portfolioSections/PortfolioSection"

const Router = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route element={<Home />} path='/' />
                <Route element={<PortfolioSection />} path='/section/:name' />
                <Route element={<span>This should be errorPage</span>} path='*' />
            </Routes>
        </BrowserRouter>
    )
}

export default Router