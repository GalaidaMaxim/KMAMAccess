import { configureStore } from "@reduxjs/toolkit";
import { studentSlice, loadingSlice, appStateSlice } from "./slises";

export const store = configureStore({
  reducer: {
    student: studentSlice.reducer,
    loading: loadingSlice.reducer,
    appState: appStateSlice.reducer,
  },
});
