import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './page/App';
import AproposPage from './page/AproposPage';
import ErrorPage from './page/ErrorPage';
import AppartmentPage from './page/ApartmentPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const LayoutWithHeaderFooter = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWithHeaderFooter><App /></LayoutWithHeaderFooter>,
  },
  {
    path: "/about",
    element: <LayoutWithHeaderFooter><AproposPage /></LayoutWithHeaderFooter>,
  },
  {
    path: "/apart/:id",
    element: <LayoutWithHeaderFooter><AppartmentPage /></LayoutWithHeaderFooter>,
  },
  {
    path: "*", // Cette route attrape tous les chemins non définis
    element: <ErrorPage />, // Affiche directement la page d'erreur sans le layout
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();



