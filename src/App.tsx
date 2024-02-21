import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, About, Contact } from "./pages/index";
import "./App.css";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
