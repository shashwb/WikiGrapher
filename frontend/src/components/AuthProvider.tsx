import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

/** Provide authentication to all the child components within the app */
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Auth0Provider
      domain="dev-3vinuj746r0iz12j.us.auth0.com"
      clientId="5tqRE0MTDwoIEJZtdKism0ymgHEmCoFD"
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
