import React from 'react'
import { Link } from 'react-router-dom';
import'./ErrorPage.css';
import'../components/Navbar/Navbar.js';
import Navbar from '../components/Navbar/Navbar.js';

function ErrorPage() {
  return (
    <>
        <Navbar/>
        <div className='error'>
            <h1>404</h1>
            <h2>ooops! La page que vous demandez n'existe pas</h2>
            <Link to ="/">
                <h3> Retourner sur la page d'accueil</h3>
            </Link> 
        </div>
    </>
  )
}

export default ErrorPage