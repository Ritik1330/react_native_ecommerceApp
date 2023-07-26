import {SIGNIN, SIGNOUT, PROFILR} from '../../confing/urls';
import {
  loginSuccess,
  loginFail,
  logoutSuccess,
  logoutFail,
  profileSuccess,
  profileFail,
} from '../Slice/userSlice';
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    const login = {
      email: action.payload.email,
      password: action.payload.password,
    };

    const config = {headers: {'Content-Type': 'application/json'}};
    const data = yield call(() => axios.post(SIGNIN, login, config));
    // console.log("data");
    yield put(loginSuccess(data));
  } catch (e) {
    // console.log('e');

    yield put(loginFail(e));
  }
}
//get  User profile
function* fetchProfile(action) {
  try {
    const data = yield call(() => axios.get(PROFILR));
    console.log(data.user);
    yield put(profileSuccess(data));
  } catch (e) {
    // console.log('e');

    yield put(profileFail(e));
  }
}
//logout User
function* logoutUserSaga(action) {
  try {
    const data = yield call(() => axios.get(SIGNOUT));
    // console.log("data");
    yield put(logoutSuccess(data));
  } catch (e) {
    // console.log('e');

    yield put(logoutFail(e));
  }
}

export function* watchUsersAsync() {
  yield takeEvery('user/loginRequst', fetchUser);
  yield takeEvery('user/profileRequst', fetchProfile);
  yield takeEvery('user/logoutRequest', logoutUserSaga);
  // yield takeEvery(GET_USERS, getUsersSaga)
  // yield takeEvery(GET_USER_BY_ID, getUserByIdSaga)
  // yield takeEvery(CREATE_USER, createUserSaga)
  // yield takeEvery(UPDATE_USER_BY_ID, updateUserSaga)
  // yield takeEvery(DELETE_USER_BY_ID, deleteUserByIdSaga)
}

// function*userSaga() {
//   yield takeLatest('user/userRequst', fetchuser)
// }
