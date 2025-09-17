import { configureStore } from "@reduxjs/toolkit";
import { userSlice, loadingSlice } from "./slises";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    loading: loadingSlice.reducer,
  },
});
