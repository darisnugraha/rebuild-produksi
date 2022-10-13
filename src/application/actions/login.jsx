export const SEND_LOGIN = "[login] sending login";
export const CHECK_LOGIN = "[login] check login";
export const SET_LOGIN_STATE = "[login] set login state";
export const LOGIN_SUCCESS = "[login] login success";
export const LOGIN_FAILED = "[login] login failed";
export const LOGOUT = "[logout] logout";

export const sendLogin = {
  type: SEND_LOGIN,
};

export const doLogout = {
  type: LOGOUT,
};

export const loginSuccess = (feedback) => ({
  type: LOGIN_SUCCESS,
  payload: feedback,
});

export const loginFailed = (error) => ({
  type: LOGIN_FAILED,
  payload: error,
});

export const checkLogin = {
  type: CHECK_LOGIN,
};

export const setLoginState = (feedback) => ({
  type: SET_LOGIN_STATE,
  payload: {
    data: feedback,
  },
});
