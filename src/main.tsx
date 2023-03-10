import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@/styles/_global.scss'
import "@/styles/_headings.scss";
import "@/styles/_components.scss";
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
