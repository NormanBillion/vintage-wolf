import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NewArrival from './Pages/NewArrival.jsx'

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home/>,
  },
  {
    path: "/About",
    element: <About/>,
  },
  {
    path: "/Contact",
    element: <Contact/>,
  },
  {
    path: "/NewArrival",
    element: <NewArrival/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
    
  </React.StrictMode>,
)
