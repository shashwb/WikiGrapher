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

// const App: React.FC = () => {
//   const inlineStyle = {
//     backgroundColor: "red",
//     minHeight: "100vh",
//   };

//   return (
//     <div className="bg-blue-500 min-h-screen">
//       {/* <div style={inlineStyle}>hello</div> */}
//       <Router>
//         <Navbar />
//         <main className="container mx-auto p-4">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/graph" element={<GraphView />} />
//           </Routes>
//         </main>
//       </Router>
//     </div>
//   );
// };

const App: React.FC = () => {
  return (
    <div className="bg-red-500 min-h-screen flex items-center justify-center">
      <h1 className="text-white text-3xl font-bold">
        Tailwind CSS is working!
      </h1>
    </div>
  );
};
export default App;
