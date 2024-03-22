import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importe le fichier CSS principal pour le style global
import App from './page/App'; // Importe le composant principal de l'application
import AproposPage from './page/AproposPage'; // Importe le composant de la page "À propos"
import ErrorPage from './page/ErrorPage'; // Importe le composant pour la page d'erreur
import AppartmentPage from './page/ApartmentPage'; // Importe le composant de la page de détail d'appartement
import Navbar from './components/Navbar/Navbar'; // Importe le composant de la barre de navigation
import Footer from './components/Footer/Footer'; // Importe le composant du pied de page
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Importe les outils de routing de React Router v6

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
    path: "/", // Définit la route racine
    element: <LayoutWithHeaderFooter><App /></LayoutWithHeaderFooter>, // Utilise LayoutWithHeaderFooter pour intégrer le composant App
  },
  {
    path: "/about", // Définit la route pour la page À propos
    element: <LayoutWithHeaderFooter><AproposPage /></LayoutWithHeaderFooter>, // Intègre AproposPage avec le layout
  },
  {
    path: "/apart/:id", // Définit une route paramétrée pour les détails des appartements
    element: <LayoutWithHeaderFooter><AppartmentPage /></LayoutWithHeaderFooter>, // Intègre AppartmentPage avec le layout
  },
  {
    path: "*", // Route joker qui capture tous les chemins non définis
    element: <LayoutWithHeaderFooter><ErrorPage /></LayoutWithHeaderFooter>, // Affiche la page d'erreur directement sans passer par le layout avec Navbar et Footer
  },
]);

// Initialise le rendu de l'application React dans l'élément root du DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);

reportWebVitals(); // Fonction utilitaire pour mesurer la performance de l'application




