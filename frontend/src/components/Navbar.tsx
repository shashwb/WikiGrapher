import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
      <nav>
        {/* eventually a LOGO will go here */}
        <Link to="/">Wikigrapher</Link>
        <div>
          <Link to="login">Login</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
