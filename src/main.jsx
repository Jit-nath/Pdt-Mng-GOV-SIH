import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './components/navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import './index.css';
import { createBrowserRouter, RouterProvider, Route, Link, } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Navbar /><Home /></>
  },
  {
    path: '/about',
    element: <><Navbar /><About /></>
  },
  {
    path: '/contact',
    element: <><Navbar /><Contact /></>
  },
  {
    path: '/login',
    element: <><Navbar /><Login /></>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
