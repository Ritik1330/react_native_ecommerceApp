import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  products: [],
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productsRequst: (state, action) => {
      state.loading = true;
    },
    productsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload.data.products;
    },
    productsFail: (state, action) => {
      state.loading = false;

      state.error = action.payload.response.data.message;
    },
  },
});

export const {productsRequst, productsSuccess, productsFail} =
  productsSlice.actions;

export default productsSlice.reducer;
