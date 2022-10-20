// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_DETAIL_JO_SUCCESS,
  SET_DATA_DETAIL_JO_FAILED,
  SET_BERAT_AKHIR_SUCCESS,
  SET_BERAT_CLOSE,
  SET_NO_INDUK_JOB_ORDER,
  SET_DATA_BY_NO_INDUK_JOB_ORDER,
  GET_DATA_BY_NO_INDUK_JOB_ORDER,
  SET_DATA_EDIT_JOB_ORDER,
  SET_IS_EDIT,
} from "../actions/closejo";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
  beratClose: "",
  beratAkhir: "",
  dataNoInduk: [],
  NoInduk: undefined,
  detailJO: [],
  dataEdit: undefined,
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
    case GET_DATA_BY_NO_INDUK_JOB_ORDER:
      return {
        ...state,
        NoInduk: action.payload.data,
      };
    case SET_NO_INDUK_JOB_ORDER:
      return {
        ...state,
        dataNoInduk: action.payload.data,
      };
    case SET_DATA_BY_NO_INDUK_JOB_ORDER:
      return { ...state, detailJO: action.payload.data };
    case SET_DATA_EDIT_JOB_ORDER:
      return {
        ...state,
        dataEdit: action.payload.data,
      };
    case SET_IS_EDIT:
      return {
        ...state,
        isEdit: action.payload.data,
      };
    default:
      return state;
  }
};

export default closejo;
