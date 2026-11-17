import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { suppressNetlifyBadge } from './utils/netlifyBadge.js'

// Suppress and hide Netlify injected badge (#nl-badge)
suppressNetlifyBadge()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
