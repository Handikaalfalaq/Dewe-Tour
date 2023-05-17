import Home from './page/Home'
import DetailTour from './page/DetailTour'
import {Route, Routes, BrowserRouter as Router,} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/DetailTour" element={<DetailTour/>} />
      </Routes>
    </Router>
  );
}

export default App;


