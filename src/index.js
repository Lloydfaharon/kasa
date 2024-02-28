import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import reportWebVitals from './reportWebVitals';

import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";

const HeaderFooterLayout = () =>{
  return <>
    <Navbar/>
    <Outlet/>
    <Footer/> 
  </>
}
const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout/>,
    errorElement:<h1>404 not found</h1>,
    children:[
      {
        path: "/",
        element:<App/>
      },
      {
        path: "/about",
        element: (
          <>
           <h1>A propos</h1>
          </>
        ),
      },
      {
        path: "/apart",
        element: (
          <>
            <h1>Nos appartements</h1>
          </>
        ) 
      },
    ]
  },
  
  
  {
    path: "/404",
    element: (
      <>
        <Navbar/>
          <h1>404</h1>
        <Footer/>
      </>
    ),
  }
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
