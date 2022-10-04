import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";


import {FavoritesContextProvider} from './store/favorite-context'


ReactDOM.createRoot(document.getElementById("root")).render(
  <FavoritesContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </FavoritesContextProvider>
);
