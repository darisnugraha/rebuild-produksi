// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_JOB_ORDER_SUCCESS,
  SET_DATA_JOB_ORDER_FAILED,
  SET_NO_INDUK_JOB_ORDER,
  GET_DATA_BY_NO_INDUK_JOB_ORDER,
  SET_DATA_BY_NO_INDUK_JOB_ORDER,
} from "../actions/gabungjo";

const initialState = {
  feedback: [],
  feedbackNoInduk: [],
  jobOrder: "",
  noInduk: undefined,
  dataJobOrder: [],
  beratGabung: 0,
  error: null,
  isEdit: false,
};

const gabungjo = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_JOB_ORDER_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
        jobOrder: action.data,
        beratGabung: action.berat,
      };
    case SET_DATA_JOB_ORDER_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_NO_INDUK_JOB_ORDER:
      return {
        ...state,
        feedbackNoInduk: action.payload.data,
      };
    case GET_DATA_BY_NO_INDUK_JOB_ORDER:
      return {
        ...state,
        noInduk: action.payload.data,
      };
    case SET_DATA_BY_NO_INDUK_JOB_ORDER:
      return {
        ...state,
        dataJobOrder: action.payload.data,
      };
    default:
      return state;
  }
};

export default gabungjo;
