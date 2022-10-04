import { Route, Routes } from "react-router-dom";

import Layout from "./component/layout/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="new-meetup" element={<NewMeetupPage />} />
          <Route path="favorite" element={<FavoritesPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
