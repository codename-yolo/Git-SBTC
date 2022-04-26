import React from 'react'
import { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import store from './pages/TableReduxToolkit/redux/store'
import { Provider } from 'react-redux'
import './styles/index.css'
import App from './pages/AppPage/App'

function AppWithCallbackAfterRender() {
  useEffect(() => {})
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(<AppWithCallbackAfterRender />)
