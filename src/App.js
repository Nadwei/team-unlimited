import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BriefingPage from './pages/BriefingPage';
import CounterDynamicalPage from './pages/CounterDynamicalPage';
import TechPage from './pages/TechPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/Briefing" element={<BriefingPage />} />
          <Route path="/Counter_Dynamical" element={<CounterDynamicalPage />} />
          <Route path="/Exotic_Tech" element={<TechPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
