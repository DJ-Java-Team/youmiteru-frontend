import React from 'react';

const UserDetails = ({ user }) => {
  if (!user) return null;

  const { userId } = user;

  return (
    <div className="userDetails">
      <p>User ID: {userId}</p>
    </div>
  );
};

export default UserDetails;
