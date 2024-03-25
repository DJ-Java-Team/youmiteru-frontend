import React from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import UserProfile from '../../components/UserProfile/UserProfile';
import UserDetails from '../../components/UserDetails/UserDetails';
import FavoriteAnime from '../../components/FavoriteAnime/FavoriteAnime';
import { useDashBoardQuery } from '../../hooks/useDashBoardQuery';

const User = () => {
  const dashBoardQuery = useDashBoardQuery();

  if (dashBoardQuery.isLoading) {
    return <h1>Loading ....</h1>;
  }

  if (dashBoardQuery.isError) {
    return <h1>Error ....</h1>;
  }

  const userData = dashBoardQuery.data.user;

  console.log(userData)

  return (
    <div>
      <NavigationBar />
      {userData && (
        <div>
          <UserProfile user={userData} />
          <UserDetails user={userData} />
          <FavoriteAnime favoriteAnime={userData.favoriteAnime} />
        </div>
      )}
    </div>
  );
};

export default User;
