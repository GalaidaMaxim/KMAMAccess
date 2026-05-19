import { configureStore } from "@reduxjs/toolkit";
import { userSlice, loadingSlice, courseSlice, sorting, level } from "./slises";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    loading: loadingSlice.reducer,
    course: courseSlice.reducer,
    sorting: sorting.reducer,
    level: level.reducer,
  },
});
