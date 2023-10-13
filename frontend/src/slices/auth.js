import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/auth";

const user = JSON.parse(localStorage.getItem("user"));

export const register = createAsyncThunk(
  "auth/register",
  async ({ firstName, lastName, email, password, phoneNumber }, thunkApi) => {
    try {
      const response = await authService.register(
        firstName,
        lastName,
        email,
        password,
        phoneNumber
      );
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue();
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkApi) => {
    try {
      const data = await authService.login(email, password);
      return { user: data };
    } catch (error) {
      return thunkApi.rejectWithValue();
    }
  }
);
