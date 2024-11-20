import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className={"bg-blue-600 p-4 shadow-lg"}>
      <div className="container mx-auto flex justify-between items-center">
        {/* first */}
        <Link to="/" className="text-white text-xl font-bold">
          <div>WikiGrapher</div>
        </Link>
        {/* second */}
        <div>
          <Link to="/login" className="text-white hover:text-blue-200">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
