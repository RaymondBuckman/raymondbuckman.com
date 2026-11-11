import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/anton/400.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/space-mono/400.css'
import './fonts.css'
import './index.css'
import './textures.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
