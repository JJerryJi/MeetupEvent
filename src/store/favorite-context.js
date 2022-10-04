import { createContext, useState } from "react";

const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itIsFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUseFavorites) => {return prevUseFavorites.concat(favoriteMeetup)});
    
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites(prevUseFavorites => {return prevUseFavorites.filter(meetup=> meetup.id !== meetupId)})
  }

  function itIsFavoriteHandler(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId)
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itIsFavorite: itIsFavoriteHandler
  };

  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContext