// productSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProductById = createAsyncThunk(
  'product/fetchProductById',
  async (productId) => {
    const response = await fetch(`http://localhost:9000/products/${productId}`);
    const data = await response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;