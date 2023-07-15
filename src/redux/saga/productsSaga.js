import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {PRODUCT_LIST} from '../../confing/urls';
import {productsSuccess, productsFail} from '../Slice/productsSlice';
import axios from 'axios';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchProducts(action) {
  try {
    const data = yield call(() => axios.get(PRODUCT_LIST));

    yield put(productsSuccess(data));
  } catch (e) {
    yield put(productsFail(e));
  }
}

export  function* watchProductAsync() {
  yield takeEvery('products/productsRequst', fetchProducts);
}

// function* productSaga() {
//   yield takeLatest('products/productsRequst', fetchProducts)
// }

// export default productSaga
