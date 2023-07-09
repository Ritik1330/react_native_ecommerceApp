import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// import userSlice from './Slice/userSlice';
import productsSlice from './Slice/productsSlice';
import productSaga from './saga/productsSaga';


const saga = createSagaMiddleware();

export default configureStore({
  reducer: {
    products: productsSlice,
    // user: userSlice,
  },
  middleware: [saga],
});

saga.run(productSaga);
