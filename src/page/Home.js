import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from '../component/navbar/Navbar';
import Search from '../component/search/Search'
import Information from '../component/information/Information';
import CardTour from '../component/cardTour/CardTour';
import Copyright from '../component/copyright/Copyright';
import FolderImage from '../component/img/FolderImg'

function Home() {
    return (
      <div style={{backgroundColor:"#E5E5E5", height:'1999px', width:'1440px', margin:'auto', position:'relative'}}>
          <img src={FolderImage.HibiscusLanding} alt="destination" style={{position:'absolute', right:'0px', top:'23%', zIndex:'1'}}/>
          <img src={FolderImage.PalmLanding} alt="destination" style={{position:'absolute', left:'0px', top:'41%', zIndex:'1'}}/>
          <img src={FolderImage.LeafLanding} alt="destination" style={{position:'absolute', right:'0px', bottom:'0px', zIndex:'1'}}/>
          <Navbars/>
          <Search/>
          <Information/>
          <CardTour/>
          <Copyright/>
      </div>
    );
  }
  
  export default Home;
  // <div style={{backgroundColor:"#E5E5E5"}}></div>