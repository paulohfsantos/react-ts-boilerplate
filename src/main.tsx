import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import { RouterProvider } from "react-router-dom";
import { Router } from './routes/routes.tsx'
import { AuthProvider } from './providers/AuthProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
