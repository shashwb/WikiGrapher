import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { redirect } from "react-router-dom";

/** Provide authentication to all the child components within the app */
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Auth0Provider
      domain="https://dev-3vinuj746r0iz12j.us.auth0.com"
      clientId="5tqRE0MTDwoIEJZtdKism0ymgHEmCoFD"
      redirectUri={window.location.origin}
      authorizationParams={{
        redirect_uri: window.location.origin,
        // audience: "https://dev-3vinuj746r0iz12j.us.auth0.com/api/v2/",
        // scope: "read:current_user update:current_user_metadata",
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
