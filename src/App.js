import {Route, Routes, BrowserRouter as Router,} from "react-router-dom"
import Home from './page/Home'
import DetailTour from './page/DetailTour'
import PaymentPage from './page/Payment'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/DetailTour" element={<DetailTour/>} />
        <Route exact path="/Payment" element={<PaymentPage/>} />
      </Routes>
    </Router>
  );
}

export default App;


