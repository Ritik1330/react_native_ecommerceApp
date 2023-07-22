import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  product: {},
  loading: null,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productRequst: (state, action) => {
      state.loading = true;
    },
    productSuccess: (state, action) => {
      state.loading = false;
   
      state.product = action.payload.data.product;
    },
    productFail: (state, action) => {
      state.loading = false;
      state.error = action.payload.response.data.message;
    },
  },
});

// 1Action creators are generated for each case reducer function
export const {productRequst, productSuccess, productFail} =
  productSlice.actions;

export default productSlice.reducer;
