import { createAsyncThunk } from "@reduxjs/toolkit";
import { signIn, logout, getUser } from "../service/api";
import { getAppState } from "../service/api";

export const signInOperation = createAsyncThunk(
  "user/signin",
  async (data, { rejectWithValue }) => {
    try {
      const result = await signIn(data);
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const logoutOperation = createAsyncThunk(
  "user/logout",
  async (data, { rejectWithValue }) => {
    try {
      const result = await logout(data);
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const refreshInfo = createAsyncThunk(
  "user/refresh",
  async (data, { rejectWithValue }) => {
    try {
      const result = await getUser(data);
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const getAppStateOperation = createAsyncThunk(
  "state/appSatate",
  async (data, { rejectWithValue }) => {
    try {
      const result = await getAppState();
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);
