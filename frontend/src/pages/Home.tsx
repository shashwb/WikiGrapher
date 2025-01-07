/** landing page for unauthenticated users  */
import React from "react";
import SearchBar from "../components/SearchBar";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col px-6 py-4 pt-10 items-center justify-start min-h-screen bg-gray-600/5 rounded-2xl">
      {/* search component */}
      <SearchBar
        onSearch={(test) => {
          console.log("func:onSearch() -> SEARCHING for : " + test);
        }}
      />
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
};

export default Home;
