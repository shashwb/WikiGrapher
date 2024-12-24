/** landing page for unauthenticated users  */
import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

const Home: React.FC = () => {
  const { isAuthenticated } = useAuth0();
  console.log("isAuthenticated: ", isAuthenticated);

  if (isAuthenticated) {
    alert("AUTHENTICATED -- GREAT JOB!");
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="text-center bg-white p-10 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            Welcome to <span className="font-extrabold">WikiGraph</span>
          </h1>
          <p className="text-lg text-gray-600 text-center mb-8">
            Search and explore articles. Build an visual map to understand how
            the world is connected.
          </p>
          <p className="text-lg text-gray-600 text-center mb-8">
            {isAuthenticated ? (
              "You are logged in!"
            ) : (
              <span>
                Sign Up to view your
                <span className="font-bold"> Dashboard</span>
              </span>
            )}
          </p>
          <button className="text-white bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </>
  );

  //   return <h1>Welcome to WikiGrapher</h1>;
};

export default Home;
