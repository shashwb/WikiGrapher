/** landing page for unauthenticated users  */
import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ArticleCard from "../components/ArticleCard";
import ArticleView from "./ArticleView";

const Home: React.FC = () => {
  // const trendingArticles = ["Bollywood", "Mahatma Gandhi", "Quantum Physics"];
  // const mostViewedArticles = ["ChatGPT", "World War II", "Climate Change"];
  // const featuredArticles = [
  //   "Artificial Intelligence",
  //   "The Renaissance",
  //   "Black Holes",
  // ];

  const [trendingArticles, setTrendingArticles] = useState<any>([]);
  const [mostViewedArticles, setMostViewedArticles] = useState<any>([]);
  const [featuredContent, setFeaturedContent] = useState<any>([]);

  /** fetch card content */
  useEffect(() => {
    console.log("<Home.tsx /> :: useEffect");
    const fetchArticles = async () => {
      const trending = await fetch("/api/trending").then((res) => res);
      const mostViewed = await fetch("/api/most-viewed").then((res) => res);
      const featured = await fetch("/api/featured").then((res) => res);

      setTrendingArticles(trending);
      setMostViewedArticles(mostViewed);
      setFeaturedContent(featured);
    };

    fetchArticles();
  }, []); // initial load, only once

  /** methods */
  const handleArticleClick = (articleTitle: string) => {
    /** TODO: navigate to article view */
    console.log("article clicked: " + articleTitle);
  };

  /** render */
  return (
    <div className="flex-grow flex flex-col px-6 py-4 pt-10 items-center justify-start bg-gray-600/5 rounded-2xl">
      {/* search component */}
      <SearchBar
        onSearch={(test) => {
          /** TODO: implement */
          console.log("func:onSearch() -> SEARCHING for : " + test);
        }}
      />

      {/* Article cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        <ArticleCard
          title="Trending Articles"
          articles={trendingArticles}
          onArticleClick={handleArticleClick}
        />
        <ArticleCard
          title="Most Viewed This Week"
          articles={mostViewedArticles}
          onArticleClick={handleArticleClick}
        />
        <ArticleCard
          title="Featured Content"
          articles={featuredContent}
          onArticleClick={handleArticleClick}
        />
      </div>

      {/* Article view */}
      <ArticleView articleTitle="European History" />
    </div>
  );
};

export default Home;
