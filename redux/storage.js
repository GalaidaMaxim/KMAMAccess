import { configureStore } from "@reduxjs/toolkit";
import { userSlice, loadingSlice, courseSlice, sorting } from "./slises";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    loading: loadingSlice.reducer,
    course: courseSlice.reducer,
    sorting: sorting.reducer,
  },
});
