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
      <div className="flex   w-full  p-10 mt-20 bg-gray-900 text-gray-100 gap-6 rounded-xl">
        {/* left pane */}
        <div className="flex-grow bg-gray-700 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Article View</h2>
          <h2 className="text-3xl font-bold m-3">{articleTitle}</h2>
          <p className="text-xs text-green-400 m-3">
            Hits: {metadata.hits} | Last Updated: {metadata.lastUpdated} | Word
            Count: {metadata.wordCount}
          </p>
          <p className="text-md text-gray-400 m-4 p-4">{articleContent}</p>
        </div>
        {/* right pane
          flex grow is all about how much a flex item should take up available space on container
        
        */}
        <div className="flex-grow p-6 rounded-xl">
          <GraphVisualizationView />
        </div>
      </div>
    </>
  );
};

export default ArticleView;
