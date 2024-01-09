import { createSlice } from "@reduxjs/toolkit";

export const BackReducer = createSlice({
  name: "back_state",
  initialState: {
    value: "/",
  },
  reducers: {
    setBackState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setBackState } = BackReducer.actions;
export default BackReducer.reducer;
