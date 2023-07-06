
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./components/services/services";
import Forher from "./components/services/Forher";
import Forhim from "./components/services/Forhim";
import Hair from "./components/services/Hair";
import Makeup from "./components/services/makeup";
import Skin from "./components/services/Skin";
import Prices from "./components/services/Prices";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/services/her" element={<Forher/>}/>
        <Route path="/services/him" element={<Forhim/>}/>
        <Route path="/services/hair" element={<Hair/>}/>
        <Route path="/services/makeup" element={<Makeup/>}/>
        <Route path="/services/skin" element={<Skin/>}/>
        <Route path="/services/prices" element={<Prices/>}/>
        <Route path="/services/her/hair" element={<Prices/>}/>
        <Route path="/products" />
        <Route path="/contact" />
      </Routes>
    </Router>
  );
}

export default App;