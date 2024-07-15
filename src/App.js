import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Briefing from './pages/Briefing';
import Response from './pages/Response';
import Tech from './pages/Tech';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/Briefing" element={<Briefing />} />
          <Route path="/Counter_Dynamical" element={<Response />} />
          <Route path="/Exotic_Tech" element={<Tech />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
