/** landing page for unauthenticated users  */
import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

const Home: React.FC = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  return (
    <main className="flex flex-col px-6 py-4 items-center justify-center min-h-screen bg-gray-600/40 rounded-2xl">
      {/* search component */}
      <div className="w-full max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-3">Welcome to WikiGraph</h2>
        <input
          type="text"
          placeholder="search Wikipedia articles..."
          className="w-full px-8 py-5 rounded-3xl text-gray-900"
        />
      </div>

      {/* Cards section */}
      <div className="mt-10 grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {/* Trending */}
        <div className="bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg hover:bg-gray-600 cursor-pointer ">
          <h3 className="text-xl font-bold text-green-400">Trending</h3>
        </div>
        {/* Most Viewed */}
        <div className="bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg hover:bg-gray-600 cursor-pointer ">
          <h3 className="text-xl font-bold text-green-400">Most Viewed</h3>
        </div>
        {/* Featured  */}
        <div className="bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg hover:bg-gray-600 cursor-pointer ">
          <h3 className="text-xl font-bold text-green-400">Featured</h3>
        </div>
      </div>
    </main>
  );

  // return (
  //   <>
  //     <div className="flex items-center justify-center">
  //       <div className="text-center bg-white p-10 rounded-lg shadow-md">
  //         <div>home</div>
  //       </div>
  //     </div>
  //   </>
  // );
};

// const Home: React.FC = () => {
//   const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

//   const loadingContent = isLoading && <div>Loading</div>;
//   const contentBasedOnAuthentication = (
//     <>
//       {isAuthenticated ? (
//         <p className="text-lg text-gray-600 text-center mb-8">
//           You are logged in!
//         </p>
//       ) : (
//         <>
//           <span>
//             Sign Up to view your
//             <span className="font-bold"> Dashboard</span>
//           </span>
//           <div className="mt-2">
//             <button
//               onClick={() => {
//                 loginWithRedirect();
//               }}
//               className="text-white bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 shadow-lg"
//             >
//               Get Started
//             </button>
//           </div>
//         </>
//       )}
//     </>
//   );
//   const mainContent = (
//     <>
//       <h1 className="text-4xl font-bold text-blue-600 mb-4">
//         Welcome to <span className="font-extrabold">WikiGraph</span>
//       </h1>
//       <p className="text-lg text-gray-600 text-center mb-8">
//         Search and explore articles. Build an visual map to understand how the
//         world is connected.
//       </p>
//       {contentBasedOnAuthentication}
//     </>
//   );

//   return (
//     <>
//       <div className="flex items-center justify-center">
//         <div className="text-center bg-white p-10 rounded-lg shadow-md">
//           {isLoading ? loadingContent : mainContent}
//         </div>
//       </div>
//     </>
//   );
// };

export default Home;
