import React from 'react'
import ReactDOM from 'react-dom/client'
//  
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/router.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <div className='max-w-screen-2xl mx-auto'>
    <RouterProvider router={router}></RouterProvider>
    </div>
   </AuthProvider>
  </React.StrictMode>,
)
