import React from "react";
import { Link } from "react-router-dom";

import AuthButtons from "./AuthButtons";

/**
 * A functional component that renders the navigation bar.
 *
 * @returns {JSX.Element} A JSX element representing the navigation bar.
 */
const NavbarComponent: React.FC = () => {
  /**
   * JSX element representing the navigation bar.
   */
  return (
    <nav className="bg-gray-900 text-gray-100 flex justify-between items-center px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link
          to="/"
          className="text-green-500 text-2xl font-bold hover:opacity-80"
        >
          WikiGraph
        </Link>
        {/* menu */}
        <AuthButtons />
      </div>
    </nav>
  );
};

export default NavbarComponent;
