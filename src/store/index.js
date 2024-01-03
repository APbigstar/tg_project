import { configureStore } from "@reduxjs/toolkit";
import footerReducer from "../features/footer/footer";
import gameStateReducer from "../features/game/game";

export default configureStore({
  reducer: {
    footerState: footerReducer,
    gameState: gameStateReducer,
  },
});
