import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/** pages */
import Home from "./pages/Home";
import GraphView from "./pages/GraphView";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

/** components */
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    // creates a gradient background from top to (b)ottom (blue 100 to white)
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen text-gray-800">
      <Router>
        <Navbar />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/graph" element={<GraphView />} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
