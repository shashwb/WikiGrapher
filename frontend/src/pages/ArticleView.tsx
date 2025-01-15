/** left pane: article content and metadata */
/** right pain: graph */

import React from "react";
import GraphView from "./GraphView";
import GraphVisualizationView from "./GraphVisualizationView";

const ArticleView: React.FC<{ articleTitle: string }> = ({ articleTitle }) => {
  /** example data */
  const articleContent = `Content for ${articleTitle}`;
  const metadata = {
    hits: 123456,
    lastUpdated: "2025-01-06",
    wordCount: 2345,
  };

  return (
    <>
      <div className="min-h-screen p-10 mt-20 flex bg-gray-900 text-gray-100 gap-6 rounded-xl">
        {/* left pane */}
        <div className="bg-gray-700 p-6 rounded-xl">
          <h2 className="text-3xl font-bold m-3">{articleTitle}</h2>
          <p className="text-sm text-gray-400 mb-4">
            Hits: {metadata.hits} | Last Updated: {metadata.lastUpdated} | Word
            Count: {metadata.wordCount}
          </p>
          <p>{articleContent}</p>
        </div>
        {/* right pane */}
        <div className="bg-gray-800 p-6 rounded-xl">
          <GraphVisualizationView />
        </div>
      </div>
    </>
  );
};

export default ArticleView;
