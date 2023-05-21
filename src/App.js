import {Route, Routes, BrowserRouter as Router,} from "react-router-dom"
import Index from "./page/Home"
import DetailTour from './page/DetailTour'
import PaymentPage from './page/Payment'
import Profile from "./page/Profile"
import Navbars from "./component/navbar/Navbar"
import Copyright from './component/copyright/Copyright';
import { Container } from "react-bootstrap"
import FolderImage from "./component/img/FolderImg"
import Transaction from "./page/transaction"
import IncomeTripAdmin from "./page/IncomeTrip"
import AddTripForm from "./page/AddTrip"

function App() {
  return (
    <Router>
      <Container style={{maxWidth:'1440px', maxheight:'3000px', padding:'0px', position:'relative'}}>
        <div style={{backgroundImage:`url(${FolderImage.Wallpaper})`, backgroundSize:'cover', height:'535px', width:'1440px', position:'absolute'}}></div>
        <div style={{backgroundColor:'#E5E5E5', position:'absolute', height:'100%', width:'100%', zIndex:'-1'}}></div>
        <img src={FolderImage.HibiscusLanding} alt="destination" style={{position:'absolute', right:'0px', top:'23%', zIndex:'1'}}/>
        <img src={FolderImage.PalmLanding} alt="destination" style={{position:'absolute', left:'0px', top:'41%', zIndex:'1'}}/>
        <Navbars/>  
        <Routes>
          <Route exact path="/" element={<Index/>} />
          <Route exact path="/DetailTour/:id" element={<DetailTour/>} />
          <Route exact path="/Payment/:id" element={<PaymentPage/>} />
          <Route exact path="/Profile" element={<Profile/>} />
          <Route exact path="/TransactionList" element={<Transaction/>} />
          <Route exact path="/IncomeTrip" element={<IncomeTripAdmin/>} />
          <Route exact path="/AddTripForm" element={<AddTripForm/>} />
        </Routes>
        <Copyright/>
      </Container>
    </Router>
  );
}

export default App;


