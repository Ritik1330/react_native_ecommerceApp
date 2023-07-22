import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {PRODUCT_LIST, PRODUCT_DETAILS} from '../../confing/urls';
import {productsSuccess, productsFail} from '../Slice/productsSlice';
import {productSuccess, productFail} from '../Slice/productSlice';
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
//get product details
function* fetchProduct(action) {
  id = action.payload;
  // console.log("id")
  // console.log(`${PRODUCT_DETAILS}${id}`)
  try {
    const data = yield call(() => axios.get(`${PRODUCT_DETAILS}/${id}`));

    yield put(productSuccess(data));
  } catch (e) {
    yield put(productFail(e));
  }
}

export function* watchProductsAsync() {
  yield takeEvery('products/productsRequst', fetchProducts);
  yield takeEvery('product/productRequst', fetchProduct);
}

// function* productSaga() {
//   yield takeLatest('products/productsRequst', fetchProducts)
// }

// export default productSaga
