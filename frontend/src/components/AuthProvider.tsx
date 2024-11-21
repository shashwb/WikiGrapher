import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

/** Provide authentication to all the child components within the app */
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Auth0Provider
      domain="YOUR_AUTH0_DOMAIN"
      clientId="YOUR_AUTH0_CLIENT_ID"
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
