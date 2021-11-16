import { LOGIN_FAILED, LOGIN_SUCCESS, SET_LOGIN_STATE } from '../actions/login';

const initialState = {
  feedback: [],
  error: null,
  isLogin: false,
};

const login1 = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { feedback: action.payload, error: null };
    case LOGIN_FAILED:
      return { feedback: [], error: action.payload };
    case SET_LOGIN_STATE:
      return { isLogin: action.payload.data, error: null };
    default:
      return state;
  }
};

export default login1;
