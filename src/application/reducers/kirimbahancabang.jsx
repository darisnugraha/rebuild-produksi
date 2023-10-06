// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_DIVISI_SUCCESS,
  SET_DATA_DIVISI_FAILED,
  SET_TUKANG_DIVISI_FAILED,
  SET_TUKANG_DIVISI_SUCCESS,
} from "../actions/kirimbahancabang";

const initialState = {
  feedback: [],
  feedbackTukang: [],
  error: null,
  isEdit: false,
};

const kirimbahancabang = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_DIVISI_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_DIVISI_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_TUKANG_DIVISI_SUCCESS:
      return {
        ...state,
        feedbackTukang: action.payload.data,
      };
    case SET_TUKANG_DIVISI_FAILED:
      return {
        ...state,
        feedbackTukang: action.payload.data,
      };
    default:
      return state;
  }
};

export default kirimbahancabang;
