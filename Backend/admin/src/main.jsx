import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import './index.css';
// import { createBrowserRouter, RouterProvider, Route, Link, } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <><Background /></>
//   },
//   {
//     path: '/about',
//     element: <><Background /></>
//   },
//   {
//     path: '/contact',
//     element: <><Background /></>
//   },
//   {
//     path: '/login',
//     element: <><Background /></>
//   }
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </StrictMode>,
)
