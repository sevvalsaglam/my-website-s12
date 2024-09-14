import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalProvider } from './context/GlobalContext.jsx'

createRoot(document.getElementById('root')).render(
  <GlobalProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </GlobalProvider>,
)
