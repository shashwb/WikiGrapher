import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/** pages */
import Home from "./pages/Home";
// import GraphView from "./pages/GraphView";
import Dashboard from "./pages/Dashboard";

/** components */
import NavbarComponent from "./components/NavbarComponent";

/**
 * App component.
 *
 * This is the main component for the application. It renders a gradient
 * background, a navigation bar, and a main section that contains the routes
 * for the application.
 *
 * @returns {JSX.Element} The App component.
 */
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-gray-100">
      <Router>
        {/* Navigation bar */}
        <NavbarComponent />
        {/* Main section with routes */}
        <main className="container mx-auto p-4">
          <Routes>
            {/* Home page */}
            <Route path="/" element={<Home />} />
            {/* Dashboard page */}
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
