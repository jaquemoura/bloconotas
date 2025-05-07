import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DadosContextProvider from './dadosContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DadosContextProvider>
      <App />
    </DadosContextProvider>
  </StrictMode>,
)
