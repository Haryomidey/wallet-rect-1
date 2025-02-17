import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import './index.css'
import App from './routes/main.routes'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
