import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/** pages */
import Home from "./pages/Home";
import GraphView from "./pages/GraphView";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

/** components */
import Navbar from "./components/Navbar";

/** styling using tailwind */

const App: React.FC = () => {
  const style = {
    red: {
      backgroundColor: "red",
    },
  };

  const layout = (
    <>
      {/* <div className="bg-blue-50 min-h-screen"> */}
      <div className="bg-blue-50 min-h-screen">
        <div className={"background-color: red"}>testing linkin park</div>
        <Router>
          <Navbar />
          <main className="container mx-auto p-4">
            <div>ya</div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/graph" element={<GraphView />} />
            </Routes>
          </main>
        </Router>
      </div>
    </>
  );

  return layout;
};

export default App;
