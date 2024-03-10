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

const HeaderFooterLayout = () =>{
  return <>
    <Navbar/>
    <Outlet/>
    <Footer/> 
  </>
}
//cree sur tout les page enfant un navbar et un footer
const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path: "/",
        element:<App/>
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
