import {call, put, takeEvery, takeLatest, select} from 'redux-saga/effects';
import {NEW_ORDER, MY_ORDERS} from '../../confing/urls';
import {
  createOrderSuccess,
  createOrderFail,
  myOrdersSuccess,
  myOrdersFail,
} from '../Slice/orderSlice';
import {productSuccess, productFail} from '../Slice/productSlice';
import axios from 'axios';
import {useSelector} from 'react-redux';

function* postOrder(action) {
  try {
    order = action.payload;
    // console.log(order);
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const {data} = yield call(() => axios.post(NEW_ORDER, order, config));

    yield put(createOrderSuccess(data));
  } catch (e) {
    console.log(`er ${e.response.data.message}`);

    yield put(createOrderFail(e));
  }
}
//fech my orders
function* fetchMyOrder(action) {
  try {
    const data = yield call(() => axios.get(MY_ORDERS));

    yield put(myOrdersSuccess(data));
  } catch (e) {
    yield put(myOrdersFail(e));
  }
}

export function* watchOrderAsync() {
  yield takeEvery('order/createOrderRequst', postOrder);
  yield takeEvery('order/myOrdersRequst', fetchMyOrder);
}
