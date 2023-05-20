import {Route, Routes, BrowserRouter as Router,} from "react-router-dom"
import Index from "./page/Home"
import DetailTour from './page/DetailTour'
import PaymentPage from './page/Payment'
import Profile from "./page/Profile"
import DropDown from "./component/dropDown/DropDown"
import PopUp from "./component/popUp/PopUp"
import Navbars from "./component/navbar/Navbar"
import Copyright from './component/copyright/Copyright';
import { Container } from "react-bootstrap"
import FolderImage from "./component/img/FolderImg"

function App() {
  return (
    <Container style={{maxWidth:'1440px', maxheight:'1999px', padding:'0px', position:'relative'}}>
      <div style={{backgroundImage:`url(${FolderImage.Wallpaper})`, backgroundSize:'cover', height:'535px', width:'1440px', position:'absolute'}}></div>
      <div style={{backgroundColor:'#E5E5E5', position:'absolute', height:'100%', width:'100%', zIndex:'-1'}}></div>
      <img src={FolderImage.HibiscusLanding} alt="destination" style={{position:'absolute', right:'0px', top:'23%', zIndex:'1'}}/>
      <img src={FolderImage.PalmLanding} alt="destination" style={{position:'absolute', left:'0px', top:'41%', zIndex:'1'}}/>
      <Navbars/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index/>} />
          <Route exact path="/DetailTour/:id" element={<DetailTour/>} />
          <Route exact path="/Payment" element={<PaymentPage/>} />
          <Route exact path="/Profile" element={<Profile/>} />
          <Route exact path="/DropDown" element={<DropDown/>} />
          <Route exact path="/PopUp" element={<PopUp/>} />
        </Routes>
      </Router>
      <Copyright/>
    </Container>
  );
}

export default App;


