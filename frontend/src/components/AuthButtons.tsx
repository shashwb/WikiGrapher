import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

/**
 * AuthButtons component.
 *
 * This component displays authentication buttons based on the user's authentication status.
 * If the user is not authenticated, a "Login" button is displayed.
 * If the user is authenticated, a "Logout" button is displayed.
 */
const AuthButtons: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div className="flex items-center space-x-4">
      {isAuthenticated ? (
        <button
          onClick={() => logout({ returnTo: window.location.origin })}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 shadow-md"
        >
          Logout
        </button>
      ) : (
        <>
          <button
            onClick={loginWithRedirect}
            className="px-4 py-2 mr-2 bg-gray-800 text-white rounded hover:bg-gray-700"
          >
            Log In
          </button>
          <button
            onClick={loginWithRedirect}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
          >
            Sign Up
          </button>
        </>
      )}
    </div>
  );
};

export default AuthButtons;
