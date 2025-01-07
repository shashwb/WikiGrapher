/** landing page for unauthenticated users  */
import React from "react";
import SearchBar from "../components/SearchBar";
import ArticleCard from "../components/ArticleCard";

const Home: React.FC = () => {
  const trendingArticles = ["Bollywood", "Mahatma Gandhi", "Quantum Physics"];
  const mostViewedArticles = ["ChatGPT", "World War II", "Climate Change"];
  const featuredArticles = [
    "Artificial Intelligence",
    "The Renaissance",
    "Black Holes",
  ];

  return (
    <main className="flex flex-col px-6 py-4 pt-10 items-center justify-start min-h-screen bg-gray-600/5 rounded-2xl">
      {/* search component */}
      <SearchBar
        onSearch={(test) => {
          console.log("func:onSearch() -> SEARCHING for : " + test);
        }}
      />

      {/* Article cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        <ArticleCard title="Trending Articles" articles={trendingArticles} />
        <ArticleCard
          title="Most Viewed This Week"
          articles={mostViewedArticles}
        />
        <ArticleCard title="Featured Articles" articles={featuredArticles} />
      </div>
    </main>
  );
};

export default Home;
