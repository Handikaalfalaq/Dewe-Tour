import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from '../component/navbar/Navbar';
import Tour from '../component/DetailTour/Tour'

function DetailTour() {
    return (
      <div>
          <Navbars/>
          <Tour/>
      </div>
    );
  }
  
export default DetailTour;