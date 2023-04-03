import { configureStore } from "@reduxjs/toolkit";
import chainsReducer from "./getData/slices/chainsSlice";
import fromTokens from "./getData/slices/fromTokenSlice";

const store = configureStore({
  reducer: {
    chain: chainsReducer,
    fromTokens,
  },
});

export default store;
