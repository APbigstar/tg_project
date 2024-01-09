import { configureStore } from "@reduxjs/toolkit";
import footerReducer from "../features/footer/footer";
import gameStateReducer from "../features/game/game";
import BackReducer from "../features/navbar/back";

export default configureStore({
  reducer: {
    footerState: footerReducer,
    gameState: gameStateReducer,
    backState: BackReducer,
  },
});
