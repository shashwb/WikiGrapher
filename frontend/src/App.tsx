import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/** pages */
import Home from "./pages/Home";
import GraphView from "./pages/GraphView";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

const App: React.FC = () => {
  const layout = (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/graph" element={<GraphView />} />
      </Routes>
    </Router>
  );

  return layout;
};

export default App;
