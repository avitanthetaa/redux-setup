import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseUrl from "../../BaseUrl/BaseUrl";

export const getChains = createAsyncThunk(
  "user/getChains",
  async (istestnet, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${BaseUrl}api/v1/lifi/chains?isTestnet=${istestnet}`
      );
      return data.chains;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getFromTokens = createAsyncThunk(
  "user/getChains",
  async (istestnet, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${BaseUrl}api/v1/lifi/tokens?isTestnet=${istestnet}&chainId=${1}`
      );
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    } finally {
    }
  }
);
