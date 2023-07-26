import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isOuder: false,
  loading: false,
  error: null,
  newOrder: {},
  orders: [],
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    createOrderRequst: (state, action) => {
      state.loading = true;
    },
    createOrderSuccess: (state, action) => {
      state.loading = false;
      state.isOuder = true;
      state.newOrder = action.payload.order;
    },
    createOrderFail: (state, action) => {
      state.loading = false;
      state.error = action.payload.response.data.message;
    },

    //get my orders requst
    myOrdersRequst: (state, action) => {
      state.loading = true;
    },
    myOrdersSuccess: (state, action) => {
      state.loading = false;
      state.orders = action.payload.data.order;
     
    },
    myOrdersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload.response.data.message;
    },
  },
});

// 1Action creators are generated for each case reducer function
export const {
  createOrderRequst,
  createOrderSuccess,
  createOrderFail,
  myOrdersRequst,
  myOrdersSuccess,
  myOrdersFail,
} = orderSlice.actions;

export default orderSlice.reducer;
