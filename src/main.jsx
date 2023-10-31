import React from 'react'
import ReactDOM from 'react-dom/client'
import MainScreen from './components/screens/home/mainScreen/MainScreen'
import PortfolioPage from './components/screens/home/portfolioPage/PortfolioPage'
import Footer from './components/screens/home/footer/Footer'
import './assets/styles/global.css'
import ContactMe from './components/screens/home/contactForm/ContactMe'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainScreen />
    <PortfolioPage />
    <ContactMe />
    <Footer />
  </React.StrictMode>,
)
