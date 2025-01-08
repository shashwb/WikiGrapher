import React from "react";

interface ArticleCardProps {
  title: string;
  articles: string[];
  onArticleClick: (articleTitle: string) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, articles }) => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg hover:bg-gray-600/20 cursor-pointer">
      <h3 className="text-xl font-bold text-green-400 hover:text-white text-center">
        {title}
      </h3>
      <ul className="mt-4 space-y-2">
        {articles.length > 0 &&
          articles.map((article, index) => {
            return (
              <li key={index}>
                <a className="px-2 text-green-200 hover:underline">{article}</a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ArticleCard;
