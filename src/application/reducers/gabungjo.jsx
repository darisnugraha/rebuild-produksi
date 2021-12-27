// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_JOB_ORDER_SUCCESS,
  SET_DATA_JOB_ORDER_FAILED,
  SET_DATA_JOB_ORDER_SUCCESS_DUA,
  SET_DATA_JOB_ORDER_FAILED_DUA,
} from "../actions/gabungjo";

const initialState = {
  feedback: [],
  feedbackDua: [],
  jobOrder: "",
  jobOrderDua: "",
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
    case SET_DATA_JOB_ORDER_SUCCESS_DUA:
      return {
        ...state,
        feedbackDua: action.payload.data,
        jobOrderDua: action.data,
        beratGabung: action.berat,
      };
    case SET_DATA_JOB_ORDER_FAILED_DUA:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default gabungjo;
