/** page for displaying the graph view  */
import React, { useEffect } from "react";

/** adding d3 */
import * as d3 from "d3";

import { useAuth0 } from "@auth0/auth0-react";

const GraphView: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    // const svg = sum([1, 2, 3]);
    // console.log("svg", svg);
  }, []); // run once, on load

  if (!isAuthenticated) {
    return <div>Log In to view your Graph</div>;
  }

  return (
    <>
      <div>
        <h1>Your Graph</h1>
      </div>
    </>
  );
};

export default GraphView;
