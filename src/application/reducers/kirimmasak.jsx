// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_HISTORY_KIRIM_MASAK_SUCCESS,
  SET_DATA_HISTORY_KIRIM_MASAK_FAILED,
  SET_DATA_TERIMA_LEBUR_MASAK_SUCCESS,
  SET_DATA_TERIMA_LEBUR_MASAK_FAILED,
  SET_24K_SUCCESS,
  SET_BERAT_TERIMA,
} from "../actions/kirimmasak";

const initialState = {
  feedback: [],
  feedbackHistory: [],
  error: null,
  isEdit: false,
  karat24: "",
  beratTerima: "",
};

const kirimmasak = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_HISTORY_KIRIM_MASAK_SUCCESS:
      return {
        ...state,
        feedbackHistory: action.payload.data,
      };
    case SET_DATA_HISTORY_KIRIM_MASAK_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_DATA_TERIMA_LEBUR_MASAK_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_TERIMA_LEBUR_MASAK_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_24K_SUCCESS:
      return {
        ...state,
        karat24: action.payload.data,
      };
    case SET_BERAT_TERIMA:
      return {
        ...state,
        beratTerima: action.payload.data,
      };
    default:
      return state;
  }
};

export default kirimmasak;
