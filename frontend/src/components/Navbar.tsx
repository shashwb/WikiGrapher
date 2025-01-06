import React from "react";
import { Link } from "react-router-dom";

import AuthButtons from "./AuthButtons";

const Navbar: React.FC = () => {
  return (
    <nav className={"bg-blue-600 p-4 shadow-lg"}>
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link to="/" className="text-white text-2xl font-bold hover:opacity-80">
          <div>WikiGraph</div>
        </Link>
        {/* menu */}
        <div className="flex space-x-4">
          {/* <div>testing 1</div>
          <div>testing 2</div>
          <div>testing 3</div> */}
          <AuthButtons />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
