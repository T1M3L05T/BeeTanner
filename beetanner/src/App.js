import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Navigation/NavBar.js'
import Home from './Pages/Home/Home.js'
import Bees from './Pages/Bees/Bees.js'
import ContactUs from './Pages/ContactUs/ContactUs.js';
import Services from './Pages/Services/Services.js';
import Honey from './Pages/Honey/Honey';


function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Router>
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Honey" element={<Honey />} />
          <Route exact path="/Bees" element={<Bees />} />
          <Route exact path="/Services" element={<Services />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </Router>
      <br /><br />
    </div>
  );
}


export default App;
