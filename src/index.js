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

// Définit un composant fonctionnel pour intégrer Navbar et Footer autour du contenu enfant
const LayoutWithHeaderFooter = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

// Crée un routeur en utilisant la fonction createBrowserRouter de React Router
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
    path: "*", 
    element: <LayoutWithHeaderFooter><ErrorPage /></LayoutWithHeaderFooter>, 
  },
]);

// Initialise le rendu de l'application React dans l'élément root du DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);

reportWebVitals();




