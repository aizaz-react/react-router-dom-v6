import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();
  return <div>This is profile page {username}...</div>;
};

export default Profile;
