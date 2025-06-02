import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add upload and studio routes here later */}
    </Routes>
  </Router>
);

export default App;
