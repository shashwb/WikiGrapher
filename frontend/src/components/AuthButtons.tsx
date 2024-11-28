import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AuthButtons: React.FC = () => {
  /** auth0 hook provides the following contexts */
  const { loginWithDirect, logout, isAuthenticated } = useAuth0();

  return (
    <>
      <div>
        {!isAuthenticated && (
          <button onClick={() => loginWithDirect()}>Login</button>
        )}
        {isAuthenticated && (
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </button>
        )}
      </div>
    </>
  );

  //   return <div>test</div>;
};
