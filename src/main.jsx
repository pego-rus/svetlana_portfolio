import React from 'react'
import ReactDOM from 'react-dom/client'
import MainScreen from './components/screens/home/mainScreen/MainScreen'
import PortfolioPage from './components/screens/home/portfolioPage/PortfolioPage'
import Footer from './components/screens/home/footer/Footer'
import './assets/styles/global.css'
import { useRef } from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      const ref = useRef(null)
      const ref2 = useRef(null)
      const ref3 = useRef(null)
    <MainScreen ref ={ ref }/>
    <PortfolioPage ref ={ ref }/>
    <Footer />
  </React.StrictMode>,
)
