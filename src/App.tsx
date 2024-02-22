import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/404";
import { useState } from "react";

function App() {
  const [showNav, setShowNav] = useState(true);
  
  return (
    <Router>
      <Navbar showNav={showNav} />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route path="*" element={<PageNotFound setShowNav={setShowNav} />} />
      </Routes>
    </Router>
  );
}

export default App;
