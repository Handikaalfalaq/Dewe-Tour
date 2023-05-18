import {Route, Routes, BrowserRouter as Router,} from "react-router-dom"
import Home from './page/Home'
import DetailTour from './page/DetailTour'
import Registration from './page/Registration'
import Login from './page/Login'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/DetailTour" element={<DetailTour/>} />
        <Route exact path="/FormRegister" element={<Registration/>} />
        <Route exact path="/FormLogin" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;


