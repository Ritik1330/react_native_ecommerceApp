import{logOutSuccess,logOutFail} from "../actions/userAction"

// loguout user
export const logOut = () => async (dispatch) => {
    try {
      // dispatch(userDataRequest());
  
      const { data } = await axios.get("/api/v1/logout");
      dispatch(logOutSuccess(data));
    } catch (error) {
      dispatch(logOutFail(error.response.data.message));
    }
  };
  