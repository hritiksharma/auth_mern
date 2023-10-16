import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import productService from "../services/product";

export const addProduct = createAsyncThunk(
  "add-product",
  async ({ name, description, price, category, quantity }, thunkApi) => {
    try {
      const response = await productService.addProduct(
        name,
        description,
        price,
        category,
        quantity
      );
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue();
    }
  }
);

export const getProducts = createAsyncThunk("getProducts", async (thunkApi) => {
  try {
    const data = await productService.getProducts();
    return data;
  } catch (error) {
    thunkApi.rejectWithValue();
  }
});

const initialState = {
  isLoading: false,
  products: {},
  success: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [addProduct.pending]: (state, action) => {
      state.isLoading = true;
      state.products = {};
    },
    [addProduct.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.success = true;
    },
    [addProduct.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [getProducts.pending]: (state, action) => {
      state.isLoading = true;
      state.products = {};
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.products = action.payload;
      state.success = true;
    },
    [getProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.products = {};
      state.success = false;
    },
  },
});

const { reducer } = productSlice;
export default reducer;
