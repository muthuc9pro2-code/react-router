import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { StoreProvider } from 'easy-peasy';
import store from './store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreProvider store={store}>
    <Router>
      <App />
    </Router>
    </StoreProvider>
  </StrictMode>,
)
