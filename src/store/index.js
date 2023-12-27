import { configureStore } from "@reduxjs/toolkit";
import footerReducer from "../features/footer/footer";

export default configureStore({
  reducer: {
    footerState: footerReducer,
  },
});
