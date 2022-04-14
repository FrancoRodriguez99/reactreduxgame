import { configureStore } from "@reduxjs/toolkit";
import battelSlice from "./slices/battelSlice";
import enemySlice from "./slices/enemySlice";
import heroSlice from "./slices/heroSlice";
import langSlice from "./slices/langSlice";

const store = configureStore({
  reducer: {
    enemy: enemySlice,
    hero: heroSlice,
    battel: battelSlice,
    lang: langSlice,
  },
});

export default store;
