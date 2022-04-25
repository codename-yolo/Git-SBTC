import React from 'react'
import { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './pages/AppPage/App'

function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log('rendered')
  })

  return (
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
  )
}
const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(<AppWithCallbackAfterRender />)
