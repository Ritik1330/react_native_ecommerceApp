import {combineReducers, configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// import userSlice from './Slice/userSlice';
import productsSlice from './Slice/productsSlice';
import productSlice from './Slice/productSlice';
import userSlice from './Slice/userSlice';
import cartSlice from './Slice/cartSlice';
import orderSlice from './Slice/orderSlice';
import {rootSaga} from '../redux/saga/index';
// redux prisist
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,

  // whitelist: [userSlice, productsSlice], // List the slices you want to persist
};
const rootReducers = combineReducers({
  products: productsSlice,
  user: userSlice,
  cart: cartSlice,
  product:productSlice,
  order:orderSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [saga],
});
const persistor = persistStore(store);

saga.run(rootSaga);

export {store, persistor};
