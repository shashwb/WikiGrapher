/** page for users to log in */
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile: React.FC = () => {
  const { isAuthenticated, user } = useAuth0();

  console.log(
    "<Profile Page> isAuthenticated: ",
    isAuthenticated,
    "user",
    user
  );

  if (!isAuthenticated) {
    return (
      <>
        <div>Log in to view your Profile</div>
      </>
    );
  }

  return (
    <>
      <div>
        <img src={user?.picture} alt={user?.name} />
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
      </div>
    </>
  );
};

export default Profile;
