// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_DIVISI_ASAL_SALDO_BAHAN_SUCCESS,
  SET_DATA_DIVISI_ASAL_SALDO_BAHAN_FAILED,
  SET_DATA_TUKANG_ASAL_DIVISI_SUCCESS,
  SET_DATA_TUKANG_ASAL_DIVISI_FAILED,
  SET_DATA_BAHAN_ASAL_TUKANG_SUCCESS,
  SET_DATA_BAHAN_ASAL_TUKANG_FAILED,
  SET_DATA_BERAT_BAHAN_SUCCESS,
  SET_DATA_BERAT_BAHAN_FAILED,
} from "../actions/terimabahantukang";

const initialState = {
  feedback: [],
  feedbackTukang: [],
  feedbackBahan: [],
  feedbackBerat: [],
  error: null,
  errorTukang: null,
  errorBahan: null,
  errorBerat: null,
  isEdit: false,
};

const terimabahantukang = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_DIVISI_ASAL_SALDO_BAHAN_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_DIVISI_ASAL_SALDO_BAHAN_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_DATA_TUKANG_ASAL_DIVISI_SUCCESS:
      return {
        ...state,
        feedbackTukang: action.payload.data,
      };
    case SET_DATA_TUKANG_ASAL_DIVISI_FAILED:
      return {
        ...state,
        errorTukang: action.payload.data,
      };
    case SET_DATA_BAHAN_ASAL_TUKANG_SUCCESS:
      return {
        ...state,
        feedbackBahan: action.payload.data,
      };
    case SET_DATA_BAHAN_ASAL_TUKANG_FAILED:
      return {
        ...state,
        errorBahan: action.payload.data,
      };
    case SET_DATA_BERAT_BAHAN_SUCCESS:
      return {
        ...state,
        feedbackBerat: action.payload.data,
      };
    case SET_DATA_BERAT_BAHAN_FAILED:
      return {
        ...state,
        errorBerat: action.payload.data,
      };
    default:
      return state;
  }
};

export default terimabahantukang;
