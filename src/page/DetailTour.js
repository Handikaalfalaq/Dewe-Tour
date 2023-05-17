import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from '../component/navbar/Navbar';
import FotoDetailTour from '../component/DetailTour/FotoDetailTour'
import InformationTrip from '../component/informationTrip/InformationTrip';
import Copyright from '../component/copyright/Copyright';
import PricePerson from '../component/pricePerson/PricePerson';

function DetailTour() {
    return (
      <div>
          <Navbars/>
          <FotoDetailTour/>
          <InformationTrip/>
          <PricePerson/>
          <Copyright/>
      </div>
    );
  }
  
export default DetailTour;