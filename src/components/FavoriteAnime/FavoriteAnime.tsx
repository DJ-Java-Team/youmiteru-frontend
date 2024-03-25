import React from 'react';
import './FavoriteAnime.scss';

const FavoriteAnime = ({ favoriteAnime }) => {
  if (!favoriteAnime || favoriteAnime.length === 0) return null;

  return (
    <div className="favoriteAnime">
      <nav className="Navigation_Favorite">
        <ul className="Navigation_Favorite">
          <li className="li_favorite"><a href="#favorite">Любимое</a></li>
          <li className="li_favorite"><a href="#watching">Смотрю</a></li>
          <li className="li_favorite"><a href="#planned">Запланировано</a></li>
          <li className="li_favorite"><a href="#watched">Просмотрено</a></li>
          <li className="li_favorite"><a href="#on-hold">Отложено</a></li>
          <li className="li_favorite"><a href="#dropped">Брошено</a></li>
        </ul>
      </nav>
      <section id="favorite">
        <h3>Любимое</h3>
        <ul>
          {favoriteAnime.map((anime, index) => (
            <li key={index}>
              <img src={anime.imageUrl} alt={anime.name} />
              <p>{anime.name}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default FavoriteAnime;
