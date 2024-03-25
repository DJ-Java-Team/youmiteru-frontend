import React from 'react';

const UserProfile = ({ user }) => {
  if (!user) return null;

  const { profileImageUrl, username } = user;

  return (
    <div className="userProfile">
      <img src={profileImageUrl} alt="User Avatar" />
      <h3>{username}</h3>
    </div>
  );
};

export default UserProfile;
