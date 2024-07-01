import { CssBaseline } from '@mui/material'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App'
import ErrorBoundary from './hof/ErrorBoundary.jsx'
import './index.scss'
import router from './router/router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseline />
    <ErrorBoundary>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ErrorBoundary>
  </StrictMode>
)
