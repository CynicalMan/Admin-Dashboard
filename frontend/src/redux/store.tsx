import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./slices/Items.slice"
import themeReducer from "./slices/Theme.slice"

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    theme: themeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


