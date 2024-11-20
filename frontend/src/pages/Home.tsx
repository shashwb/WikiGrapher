/** landing page for unauthenticated users  */
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Welcome to WikiGrapher test
        </h1>
        <p className="text-gray-600 mt-50 text-center">
          Search and explore articles. Build an visual map to understand how the
          world is connected.
        </p>
      </div>
    </>
  );

  //   return <h1>Welcome to WikiGrapher</h1>;
};

export default Home;
