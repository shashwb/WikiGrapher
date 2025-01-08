/** left pane: article content and metadata */
/** right pain: graph */

import React from "react";
import GraphView from "./GraphView";

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
      <div className="min-h-screen p-10 mt-20 flex bg-gray-900 text-gray-100">
        {/* left pane */}
        <div className="flex-1 p-6 overflow-auto bg-gray-800">
          <h2 className="text-3xl font-bold m-3">{articleTitle}</h2>
          <p className="text-sm text-gray-400 mb-4">
            Hits: {metadata.hits} | Last Updated: {metadata.lastUpdated} | Word
            Count: {metadata.wordCount}
          </p>
          <p>{articleContent}</p>
        </div>
        {/* right pane */}
        <div className="flex-1 p-6 border-5 border-gray-300">
          <h2 className="text-2xl font-semibold mb-4">Graph View</h2>
          <GraphView />
        </div>
      </div>
    </>
  );
};

export default ArticleView;
