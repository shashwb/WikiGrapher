import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/** pages */
import Home from "./pages/Home";
// import GraphView from "./pages/GraphView";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

/** components */
import Navbar from "./components/Navbar";

/**
 * App component.
 *
 * This is the main component for the application. It renders a gradient
 * background, a navigation bar, and a main section that contains the routes
 * for the application.
 */
const App: React.FC = () => (
  <div className="h-screen bg-gradient-to-b from-blue-100 to-white text-gray-800">
    <Router>
      {/* Navigation bar */}
      <Navbar />
      {/* Main section with routes */}
      <main className="container mx-auto p-4">
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />
          {/* Login page */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* Dashboard page */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </Router>
  </div>
);

export default App;
