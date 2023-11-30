import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.css'
import ScrollPositionProvider from './providers/ViewPositionProvider'
import Router from './components/screens/ui/modalWindow/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScrollPositionProvider>
      <Router />
    </ScrollPositionProvider>
  </React.StrictMode>,
)
