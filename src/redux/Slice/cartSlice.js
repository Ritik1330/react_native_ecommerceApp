import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addToCart: (state, action) => {
      product = action.payload.product;
      let paylod = {
        productId: product._id,
        name: product.name,
        price: product.price,
        image: product.images[0].url,
        stock: product.stock,
        quantity: action.payload.quantity,
      };

      let item = paylod;

      const isItemExist = state.cartItems.find(
        i => i.productId === item.productId,
      );
      if (isItemExist) {
        // console.log('ifcalled');
        state.cartItems = state.cartItems.map(
          i => (i.productId === isItemExist.productId ? item : i),
          // console.log('if'),
        );
      } else {
        state.cartItems.push(item);
        // console.log('else');
      }
    },
    removeToCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        i => i.productId !== action.payload,
      );
    },
    removeToCartAll: (state, action) => {
      state.cartItems = [];
    },
    //update quantityr
    updateQuantity: (state, action) => {
      const isItemExist = state.cartItems.find(i => {
        if (i.productId === action.payload.id) {
          i.quantity = action.payload.quantity;
        }
      });
    },

    saveShippingInfo: (state, action) => {
      state.shippingInfo = action.payload;
    },
    orderInfo: (state, action) => {
      state.orderInfo = action.payload;
    },
  },
});

export const {
  addToCart,
  removeToCart,
  saveShippingInfo,
  updateQuantity,
  removeToCartAll,
  orderInfo,
} = cartSlice.actions;
export default cartSlice.reducer;
