import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import Card from './components/Card.jsx'
import BellPopover from './components/Popover.jsx'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
    <NavBar />
    <BellPopover/>
    <Card />
    <Footer />
  </StrictMode>,
)
