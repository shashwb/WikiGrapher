import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

/** Provides authentication to all child components within the app */
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const domain = "dev-3vinuj746r0iz12j.us.auth0.com"; // Auth0 tenant domain
  const clientId = "5tqRE0MTDwoIEJZtdKism0ymgHEmCoFD"; // Auth0 client ID
  const redirectUri = window.location.origin; // URL to redirect back to after authentication

  /**
   * Wrap the children in the Auth0Provider component
   * @param children React components to be wrapped
   * @returns Auth0Provider component with the configured domain, client ID, and redirect URI
   */
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri }}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
