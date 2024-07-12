import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Briefing from './pages/Briefing';
import CounterDynamical from '/pages/CounterDynamical';
import ExoticTech from '/pages/ExoticTech';
import HomePage from '/pages/HomePage';


function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/Briefing" element={<Briefing/>}/>
        <Route path="/CounterDynamical" element={<CounterDynamical/>}/>
        <Route path="/ExoticTech" element={<ExoticTech/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
