import { createContext, useState } from "react";

const FavContext = createContext({
  favourites: [],
  totalFav: 0,
  addFavourite: () => {},
  removeFavourite: () => {},
  isFavourite: () => {},
});

export function FavouriteContexteProvider(props) {
  const [tabFav, setTabFav] = useState([]);

  function addFavouriteNj(film) {
    setTabFav((previous) => {
      return [...previous, film];
    });
  }
  function removeFavouriteNj(film) {
    setTabFav((previous) => {
      let i = previous.indexOf(film);
      previous.splice(i, 1);
      console.log("Dans remove Context", previous.length);
      return [...previous];
    });
  }
  function isFavouriteNj(id) {
    if (tabFav.find((element) => element.id == id)) return true;
    else return false;
  }

  const c = {
    favourites: tabFav,
    totalFav: tabFav.length,
    addFavourite: addFavouriteNj,
    removeFavourite: removeFavouriteNj,
    isFavourite: isFavouriteNj,
  };

  return <FavContext.Provider value={c}>{props.children}</FavContext.Provider>;
}

export default FavContext;
