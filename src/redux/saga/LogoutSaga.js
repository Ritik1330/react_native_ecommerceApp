// import {SIGNOUT} from '../../confing/urls';
// import {logoutSuccess, logoutFail} from '../Slice/userSlice';
// import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
// import axios from 'axios';

// // worker Saga: will be fired on USER_FETCH_REQUESTED actions
// function* logouUser(action) {
//   try {
//     const config = {headers: {'Content-Type': 'application/json'}};
//     const data = yield call(() => axios.get(SIGNOUT, config));
//     // console.log("data");
//     yield put(logoutSuccess(data));
//   } catch (e) {
//     // console.log('e');

//     yield put(logoutFail(e));
//   }
// }

// export default function* userSaga() {
//   yield takeEvery('user/logoutRequest', logouUser);
// }

// // function*userSaga() {
// //   yield takeLatest('user/userRequst', fetchuser)
// // }
