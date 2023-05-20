import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FotoDetailTour from '../component/detailTour/FotoDetailTour'
import InformationTrip from '../component/informationTrip/InformationTrip';
import PricePerson from '../component/pricePerson/PricePerson';

function DetailTour() {
    return (
      <div style={{height:'1432px', width:'1440px', margin:'auto', position:'relative'}}>
          <FotoDetailTour/>
          <InformationTrip/>
          <PricePerson/>
      </div>
    );
  }
  
export default DetailTour;