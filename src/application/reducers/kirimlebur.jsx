// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_HISTORY_KIRIM_LEBUR_SUCCESS,
  SET_DATA_HISTORY_KIRIM_LEBUR_FAILED,
  SET_DATA_SALDO_BAHAN_OPEN_SUCCESS,
  SET_DATA_SALDO_BAHAN_OPEN_FAILED,
  SET_DATA_SALDO_BAHAN_SUCCESS,
  SET_DATA_SALDO_BAHAN_FAILED,
  SET_DATA_24K,
  SET_DATA_ASAL_BAHAN,
  SET_COUNT_24,
  COUNT_24,
} from "../actions/kirimlebur";

const initialState = {
  feedback: [],
  feedbackSaldoBahan: [],
  feedbackHistory: [],
  error: null,
  errorHistory: null,
  errorSaldoBahan: null,
  isEdit: false,
  karat24: "",
  asalBahan: "",
  karat24Total: 0,
  kadarTotal: 0,
};

const kirimlebur = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_HISTORY_KIRIM_LEBUR_SUCCESS:
      return {
        ...state,
        feedbackHistory: action.payload.data,
      };
    case SET_DATA_HISTORY_KIRIM_LEBUR_FAILED:
      return {
        ...state,
        errorHistory: action.payload.data,
      };
    case SET_DATA_SALDO_BAHAN_OPEN_SUCCESS:
      return {
        ...state,
        feedbackSaldoBahan: action.payload.data,
      };
    case SET_DATA_SALDO_BAHAN_OPEN_FAILED:
      return {
        ...state,
        errorSaldoBahan: action.payload.data,
      };
    case SET_DATA_SALDO_BAHAN_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_SALDO_BAHAN_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_DATA_24K:
      return {
        ...state,
        karat24: action.payload.data,
      };
    case SET_DATA_ASAL_BAHAN:
      return {
        ...state,
        asalBahan: action.payload.data,
      };
    case SET_COUNT_24:
      return {
        ...state,
        karat24Total: action.payload.data,
      };
    case COUNT_24:
      return {
        ...state,
        kadarTotal: action.payload.data,
      };
    default:
      return state;
  }
};

export default kirimlebur;
