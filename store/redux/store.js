import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites.js";

export const store = configureStore({
  reducer: {
    favoritesMeals: favoritesReducer,
  },
});
