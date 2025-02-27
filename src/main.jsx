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
import Update from './components/Update/Update.jsx';

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
  ,
  {
    path:'/users/:id',
    loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`),
    element:<Update></Update>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer/>
    <RouterProvider router={router} />    
  </StrictMode>
)
