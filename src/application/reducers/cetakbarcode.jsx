// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_BY_NO_INDUK_JOB_ORDER,
  SET_DATA_BY_NO_JO,
  SET_NO_INDUK_JOB_ORDER,
} from "../actions/cetakbarcode";

const initialState = {
  feedback: [],
  feedbackJO: [],
  feedbackDetailJO: undefined,
  error: null,
  isEdit: false,
};

const cetakbarcode = (state = initialState, action) => {
  switch (action.type) {
    case SET_NO_INDUK_JOB_ORDER:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_BY_NO_INDUK_JOB_ORDER:
      return {
        ...state,
        feedbackJO: action.payload.data,
      };
    case SET_DATA_BY_NO_JO:
      return {
        ...state,
        feedbackDetailJO: action.payload.data,
      };
    default:
      return state;
  }
};

export default cetakbarcode;
