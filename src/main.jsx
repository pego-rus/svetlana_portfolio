import React from 'react'
import ReactDOM from 'react-dom/client'
import MainScreen from './components/screens/home/mainScreen/MainScreen'
import PortfolioPage from './components/screens/home/portfolioPage/PortfolioPage'
import './assets/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainScreen />
    <PortfolioPage />
  </React.StrictMode>,
)
