import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import productReducer from "./slices/productSlice";

const reducer = {
  auth: authReducer,
  product: productReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
