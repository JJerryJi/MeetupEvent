import { useContext } from "react";

import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavoriteContext from "../../store/favorite-context";

function MainNavigation() {
  const favoriteCtx = useContext(FavoriteContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}> React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="new-meetup">New Meetings</Link>
          </li>
          <li>
            <Link to="favorite">
              Favorite Meeting <span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
