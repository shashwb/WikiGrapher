/** landing page for unauthenticated users  */
import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

const Home: React.FC = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  const loadingContent = isLoading && <div>Loading</div>;
  const contentBasedOnAuthentication = (
    <>
      {isAuthenticated ? (
        <p className="text-lg text-gray-600 text-center mb-8">
          You are logged in!
        </p>
      ) : (
        <>
          <span>
            Sign Up to view your
            <span className="font-bold"> Dashboard</span>
          </span>
          <div className="mt-2">
            <button
              onClick={() => {
                loginWithRedirect();
              }}
              className="text-white bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 shadow-lg"
            >
              Get Started
            </button>
          </div>
        </>
      )}
    </>
  );
  const mainContent = (
    <>
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to <span className="font-extrabold">WikiGraph</span>
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        Search and explore articles. Build an visual map to understand how the
        world is connected.
      </p>
      {contentBasedOnAuthentication}
    </>
  );

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="text-center bg-white p-10 rounded-lg shadow-md">
          {isLoading ? loadingContent : mainContent}
        </div>
      </div>
    </>
  );
};

export default Home;
