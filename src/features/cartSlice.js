import { createSlice } from "@reduxjs/toolkit";
import { data } from "../productData";

const initialState = {
  cart: [],
  items: data,
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
