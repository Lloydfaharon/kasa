import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './page/App.js';
import AproposPage from './page/AproposPage.js'
import ErrorPage from './page/ErrorPage.js';
import AppartmentPage from './page/ApartmentPage.js';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import reportWebVitals from './reportWebVitals.js';

import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";

//import Appartment from './components/Appartment/Appartment.js';


// Définit un composant qui enveloppe chaque page enfant avec la barre de navigation et le pied de page
const HeaderFooterLayout = () =>{
  return <>
    <Navbar/>
    <Outlet/>{/* Affiche le contenu de la page courante */}
    <Footer/> 
  </>
}
//cree sur tout les page enfant un navbar et un footer
const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout/>,// Utilise le composant HeaderFooterLayout pour envelopper chaque page
    errorElement:<ErrorPage/>,//Utilise la page d'erreur en cas de route non trouvée
    children:[
      {
        path: "/",// Chemin pour la page d'accueil
        element:<App/> // Utilise le composant App pour la page d'accueil
      },
      {
        path: "/about",
        element:<AproposPage/>
      },
      {
        path:"/apart" ,
        element:<AppartmentPage/> 
      },
    ]
  },

]);

// Rendu de l'application dans la racine du DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



