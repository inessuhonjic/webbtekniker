import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import Card from './components/Card.jsx'

import { motion } from 'motion/react'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
    <NavBar />
    
    <motion.h1
  className="lead bold text-center"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  Welcome!
</motion.h1>
    <Card />
    <Footer />
  </StrictMode>,
)
