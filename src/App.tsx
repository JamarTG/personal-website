import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, About, Contact} from "./pages/index";
import "./App.css";

import Navbar from "./components/Navbar";
import Resume from "./components/Resume";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
