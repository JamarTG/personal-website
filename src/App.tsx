import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About } from "./pages/index";
import "./App.css";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
