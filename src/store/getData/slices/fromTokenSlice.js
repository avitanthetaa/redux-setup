import { createSlice } from "@reduxjs/toolkit";
import { getFromTokens } from "../actions";

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const fromTokens = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getFromTokens.pending]: (state) => {
      state.isLoading = true;
    },
    [getFromTokens.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },
    [getFromTokens.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default fromTokens.reducer;
