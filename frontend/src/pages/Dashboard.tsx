/** landing page for authenticated users */
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <div>Log In to view your Dashboard</div>;
  }

  return (
    <div>
      <h1>Your Dasboard</h1>
      {/* {user specific components here} */}
    </div>
  );
};

export default Dashboard;
