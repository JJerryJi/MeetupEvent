import {useContext} from 'react'

import FavoriteContext from '../store/favorite-context';
import MeetupList from '../component/meetups/MeetupList';

function FavoritesPage() {
  const favoriteCtx = useContext(FavoriteContext)

  let content;

  if (favoriteCtx.totalFavorites ===0){
    content = <p1> You got not favorites</p1>
  }else{
    content = <MeetupList meetups={favoriteCtx.favorites} />
  }


  
  return <section>
    <h1> My Favorites</h1>
    {content}
  </section>;
}
export default FavoritesPage;