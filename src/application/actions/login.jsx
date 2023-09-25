export const SEND_LOGIN = "[login] sending login";
export const CHECK_LOGIN = "[login] check login";
export const SET_LOGIN_STATE = "[login] set login state";
export const LOGIN_SUCCESS = "[login] login success";
export const LOGIN_FAILED = "[login] login failed";
export const LOGOUT = "[logout] logout";
export const GET_SYSTEM = "[system] get system";

export const sendLogin = {
  type: SEND_LOGIN,
};

export const getSystem = () => ({
  type: GET_SYSTEM,
});

export const doLogout = (userinfo) => ({
  type: LOGOUT,
  payload: { data: userinfo },
});

export const loginSuccess = (feedback) => ({
  type: LOGIN_SUCCESS,
  payload: feedback,
});

export const loginFailed = (error) => ({
  type: LOGIN_FAILED,
  payload: error,
});

export const checkLogin = (dataUser) => ({
  type: CHECK_LOGIN,
  payload: { data: dataUser },
});

export const setLoginState = (feedback) => ({
  type: SET_LOGIN_STATE,
  payload: {
    data: feedback,
  },
});
