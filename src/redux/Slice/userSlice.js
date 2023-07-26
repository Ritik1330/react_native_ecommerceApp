import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  token: null,
  isAuthecated: false,
  user: null,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRequst: (state, action) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.token = action.payload.data.token;
      state.isAuthecated = true;
      //   state.user = action.payload.data.user;
    },
    loginFail: (state, action) => {
      state.loading = false;

      state.error = action.payload.response.data.message;
    },
    //get profile
    profileRequst: (state, action) => {
      state.loading = true;
    },
    profileSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.data.user;
    },
    profileFail: (state, action) => {
      state.loading = false;
      state.token = null;
      state.isAuthecated = false;
      state.error = action.payload.response.data.message;
    },
    // log out user
    logoutRequest: (state, action) => {
      state.loading = true;
    },
    logoutSuccess: (state, action) => {
      state.loading = false;
      state.user = null;
      state.token = null;
      state.isAuthecated = false;
    },

    logoutFail(state, action) {
      state.loading = false;
      state.error = action.payload.response.data.message;
    },
  },
});

export const {
  loginRequst,
  loginSuccess,
  loginFail,
  logoutRequest,
  logoutSuccess,
  logoutFail,
  profileRequst,
  profileSuccess,
  profileFail,
} = userSlice.actions;

export default userSlice.reducer;
