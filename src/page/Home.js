import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from '../component/navbar/Navbar';
import Search from '../component/search/Search'
import Information from '../component/information/Information';
import CardTour from '../component/cardTour/CardTour';
import Copyright from '../component/copyright/Copyright';


function Home() {
    return (
      <div style={{backgroundColor:"#E5E5E5"}}>
          <Navbars/>
          <Search/>
          <Information/>
          <CardTour/>
          <Copyright/>
      </div>
    );
  }
  
  export default Home;