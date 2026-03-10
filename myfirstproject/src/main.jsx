import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Demo from './component.jsx/Demo.jsx'
import Temu from './component.jsx/Temu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Demo />
    <Temu />
  </StrictMode>,
)
