import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initFireBase } from './Firebase/Config.js'
// import './index.css'
initFireBase(
  
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
