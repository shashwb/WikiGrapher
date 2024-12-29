/** page for users to log in */
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    loginWithRedirect();
  }, [loginWithRedirect]);

  /** styled */
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="text-lg text-gray-700">Redirecting...</div>
    </div>
  );

  // return <div>Redirecting...</div>;
};

export default Login;
