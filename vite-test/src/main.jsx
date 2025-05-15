import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../src/';
import Testing from './components/myFirstComponen.jsx'
import ExamplePopover from './components/Popover.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Testing />
    <ExamplePopover/>
  </StrictMode>,
)
