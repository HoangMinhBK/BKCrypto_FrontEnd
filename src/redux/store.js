import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import identitySlice from "./identitySlice";

export default configureStore({
  reducer: {
    themeSlice: themeSlice,
    identitySlice: identitySlice,
  },
});
