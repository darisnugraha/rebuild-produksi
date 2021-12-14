// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_SETOR_OUTSTAND_CASTING_SUCCESS,
  SET_DATA_SETOR_OUTSTAND_CASTING_FAILED,
} from "../actions/abutukangcor";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
};

const abutukangcor = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_SETOR_OUTSTAND_CASTING_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_SETOR_OUTSTAND_CASTING_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default abutukangcor;
