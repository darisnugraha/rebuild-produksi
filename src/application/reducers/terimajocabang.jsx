// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_DETAIL_JO_SUCCESS,
  SET_DATA_DETAIL_JO_FAILED,
  SET_NO_INDUK_JOB_ORDER,
  GET_DATA_BY_NO_INDUK_JOB_ORDER,
  SET_DATA_BY_NO_INDUK_JOB_ORDER,
} from "../actions/terimajocabang";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
  dataNoInduk: [],
  NoIndukJO: undefined,
  detailJO: [],
};

const terimajocabang = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_DETAIL_JO_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_DETAIL_JO_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_NO_INDUK_JOB_ORDER:
      return {
        ...state,
        dataNoInduk: action.payload.data,
      };
    case GET_DATA_BY_NO_INDUK_JOB_ORDER:
      return {
        ...state,
        NoIndukJO: action.payload.data,
      };
    case SET_DATA_BY_NO_INDUK_JOB_ORDER:
      return {
        ...state,
        detailJO: action.payload.data,
      };
    default:
      return state;
  }
};

export default terimajocabang;
