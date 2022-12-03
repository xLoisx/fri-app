import './App.css';
import Navbar from './Navbar.js'

import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Features from './pages/Features'
function App() {
  return (
    <div>
    
      <Navbar/>
      <div>
        <Routes>
          <Route path="/fri-app/" element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Pricing" element={<Pricing/>}/>
          <Route path="/Features" element={<Features/>}/>
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
