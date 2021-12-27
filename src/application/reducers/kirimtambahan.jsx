// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_ASAL_STOCK_BAHAN_SUCCESS,
  SET_DATA_ASAL_STOCK_BAHAN_FAILED,
  SET_DATA_STOCK_BAHAN_ADMIN_SUCCESS,
  SET_DATA_STOCK_BAHAN_ADMIN_FAILED,
  SET_DATA_KIRIM_TAMBAHAN_DIVISI_SUCCESS,
  SET_DATA_KIRIM_TAMBAHAN_DIVISI_FAILED,
} from "../actions/kirimtambahan";

const initialState = {
  feedback: [],
  dataStock: [],
  error: null,
  errorStock: null,
  isEdit: false,
  feedbackDivisi: [],
  errorDivisi: [],
};

const kirimtambahan = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_ASAL_STOCK_BAHAN_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_ASAL_STOCK_BAHAN_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_DATA_STOCK_BAHAN_ADMIN_SUCCESS:
      return {
        ...state,
        dataStock: action.payload.data,
      };
    case SET_DATA_STOCK_BAHAN_ADMIN_FAILED:
      return {
        ...state,
        errorStock: action.payload.data,
      };
    case SET_DATA_KIRIM_TAMBAHAN_DIVISI_SUCCESS:
      return {
        ...state,
        feedbackDivisi: action.payload.data,
      };
    case SET_DATA_KIRIM_TAMBAHAN_DIVISI_FAILED:
      return {
        ...state,
        errorDivisi: action.payload.data,
      };
    default:
      return state;
  }
};

export default kirimtambahan;
