import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from '../component/navbar/Navbar';
import FotoDetailTour from '../component/detailTour/FotoDetailTour'
import InformationTrip from '../component/informationTrip/InformationTrip';
import Copyright from '../component/copyright/Copyright';
import PricePerson from '../component/pricePerson/PricePerson';
import FolderImage from '../component/img/FolderImg'

function DetailTour() {
    return (
      <div style={{height:'1432px', width:'1440px', margin:'auto', position:'relative'}}>
          <img src={FolderImage.HibiscusLanding} alt="destination" style={{position:'absolute', right:'0px', top:'23%', zIndex:'1'}}/>
          <img src={FolderImage.PalmLanding} alt="destination" style={{position:'absolute', left:'0px', top:'41%', zIndex:'1'}}/>
          <Navbars/>
          <FotoDetailTour/>
          <InformationTrip/>
          <PricePerson/>
          <Copyright/>
      </div>
    );
  }
  
export default DetailTour;