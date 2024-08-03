import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; //check this in hashrouter
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';


function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/post/:id" element={<DetailPage />} />
            </Routes>
        </Router>

  );
}

export default App;
