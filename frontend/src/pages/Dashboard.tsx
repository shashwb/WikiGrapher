/** landing page for authenticated users */
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

/**
 * Dashboard component.
 *
 * This component serves as the landing page for authenticated users.
 * It checks the user's authentication status using Auth0.
 * If the user is authenticated, it displays a welcome message.
 * Otherwise, it prompts the user to log in to view the dashboard.
 */
const Dashboard: React.FC = () => {
  // Destructuring isAuthenticated from useAuth0 hook
  const { isAuthenticated } = useAuth0();

  // Declare a variable to hold content based on authentication status
  let content;

  // Check if the user is authenticated
  if (isAuthenticated) {
    // Set content to welcome message for authenticated users
    content = (
      <h1 className="text-2xl text-center">
        You are logged in! Welcome to your Dashboard!
      </h1>
    );
  } else {
    // Set content to prompt for unauthenticated users
    content = (
      <p className="text-2xl text-center">Log in to view your Dashboard...</p>
    );
  }

  // Return the rendered component
  return (
    <div className="h-screen flex justify-center bg-white rounded-lg">
      <div className="px-10 py-10 text-gray-600 text-bold text-2xl text-center">
        {content}
      </div>
      {/* {user specific components here} */}
    </div>
  );
};

export default Dashboard;
