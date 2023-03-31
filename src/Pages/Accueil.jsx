import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from '../components/Header/navbar';

function Accueil() {
  return (
    <div className="Accueil">
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Outlet />
    </div>
  );
}

export default Accueil;