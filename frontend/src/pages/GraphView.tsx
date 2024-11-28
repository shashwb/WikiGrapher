/** page for displaying the graph view  */
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const GraphView: React.FC = () => {
  const { isAuthenticated } = useAuth0();

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
