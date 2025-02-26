import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './components/Users/Users.jsx';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:'/users',
    loader:()=>fetch('http://localhost:5000/users'),
    element:<Users></Users>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer/>
    <RouterProvider router={router} />    
  </StrictMode>
)
