import {Route, Routes, BrowserRouter as Router,} from "react-router-dom"
import Home from './page/Home'
import DetailTour from './page/DetailTour'
import PaymentPage from './page/Payment'
import Profile from "./page/Profile"
import DropDown from "./component/dropDown/DropDown"
import PopUp from "./component/popUp/PopUp"
import Navbars from "./component/navbar/Navbar"

function App() {
  return (
    <>
      <Navbars/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/DetailTour" element={<DetailTour/>} />
          <Route exact path="/Payment" element={<PaymentPage/>} />
          <Route exact path="/Profile" element={<Profile/>} />
          <Route exact path="/DropDown" element={<DropDown/>} />
          <Route exact path="/PopUp" element={<PopUp/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


