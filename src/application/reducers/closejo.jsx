// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_DETAIL_JO_SUCCESS,
  SET_DATA_DETAIL_JO_FAILED,
  SET_BERAT_AKHIR_SUCCESS,
  SET_BERAT_CLOSE,
} from "../actions/closejo";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
  beratClose: "",
  beratAkhir: "",
};

const closejo = (state = initialState, action) => {
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
    case SET_BERAT_AKHIR_SUCCESS:
      return {
        ...state,
        beratAkhir: action.payload.data,
      };
    case SET_BERAT_CLOSE:
      return {
        ...state,
        beratClose: action.payload.data,
      };
    default:
      return state;
  }
};

export default closejo;
